import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';
import { AppProvider } from './context/AppContext';


import {
  BrowserRouter as  Router ,
  Route ,
  Link, 
  Routes, 
  Outlet,
} from "react-router-dom";
import { useState , useEffect , useRef } from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import AgentSystemPage from './components/AgentSystemPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';
import MenPage from './components/MenPage';
import WoMenPage from './components/WoMenPage';
import AdMinPage from './components/AdMinPage'
import TableProducts from './components/TableProducts';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import PaymentPay from './components/PagementPay';
import OderManagePage from './components/OderManagePage';
import SeeQuickOnApp from './components/SeeQuickOnApp';
import {getProducts , getPayCusTom , deleteProduct , addProducts , editProduct} from './api/Product';
import {AppContext} from './context/AppContext'
import { useContext } from 'react';

const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function App(props) {
  const {watchList ,setwatchList} = useContext(AppContext)
  var [ listCart , setListCart] = useState([])
  const [ sumMoney, setSumMoney] = useState(0)
  const [ sumQuantity, setSumQuantity] = useState(0)


  // ------------------------------------

  function deleteApp(id){
    deleteProduct(id).then(res=>{
     const listWatchNew = watchList.filter(item=>item.id!==id)
     setwatchList(listWatchNew)
   })
  }

  function addProduct(value){
    console.log(value)
    if(value.id !== undefined){
      editProduct(value).then(res=>{
        const index = watchList.findIndex(item=>item.id===value.id)
        const listStudentNew = [...watchList] 
        listStudentNew[index] = res.data
        setwatchList(listStudentNew)
      })
      .catch(res=>{
        console.log(res)
      })
    
    }else{
    addProducts(value).then(res=>{
      const listStudentNew = [...watchList]
      listStudentNew.push(res.data)
      setwatchList(listStudentNew)
  })
    }
    }

  // ----------------------LIST CART--------
  function getItemCart(item){
    const listCartCoppy = [...listCart]
    listCartCoppy.push(item)
    setListCart(listCartCoppy)
  }
  function getIdCart(id){
   const index = listCart.findIndex(item => item.id == id)
   const listCartCoppy = [...listCart]
   listCartCoppy.splice(index,1)
   setListCart(listCartCoppy)
  }

  return (
    <AppProvider>
    <Router>
        <Routes>
            <Route path='/' element={<Nav  sumQuantity={sumQuantity}/>}>
                <Route index element={<HomePage />} />
                <Route path='trang-chu' element={<HomePage getItemCart={getItemCart}/>} />
                <Route path='men' element={<MenPage getItemCart={getItemCart}/>} />
                <Route path='women' element={<WoMenPage getItemCart={getItemCart}/>} />
                <Route path='dai-ly' element={<AgentSystemPage />} />
                <Route path='see-quick-on-app/:id' element={<SeeQuickOnApp  getItemCart={getItemCart}/>} />
                <Route path='tin-tuc' element={<NewsPage />} />
                <Route path='lien-he' element={<ContactPage />} />
                <Route path='gio-hang' element={<Cart listCart={listCart} getIdCart={getIdCart} setListCart={setListCart} setSumMoney={setSumMoney} setSumQuantity={setSumQuantity} sumMoney={sumMoney} />} />
                <Route path='thanh-toan' element={<PaymentPay  listCart={listCart} setListCart={setListCart} sumQuantity={sumQuantity} sumMoney={sumMoney}/>} />

            </Route>
            <Route path="admin" element={<AdMinPage  />}>
              <Route index element={<TableProducts />}/>
              <Route path="table-products" element={ <TableProducts  deleteApp={deleteApp}/>}/>
              <Route path='add-product' element={<AddProduct addProduct={addProduct}/>}/>
              <Route path='order-manage' element={<OderManagePage />}/>
              <Route path='edit-book/:id' element={<AddProduct addProduct={addProduct} />}/>
            </Route>
        </Routes>
    </Router>
    </AppProvider>
  );
}

export default App;
