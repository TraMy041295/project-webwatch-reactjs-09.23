import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import axios from 'axios';


import {
  BrowserRouter as  Router ,
  Route ,
  Link, 
  Routes, 
  Outlet,
} from "react-router-dom";
import { useState , useEffect } from 'react';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import AgentSystemPage from './components/AgentSystemPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';
import MenPage from './components/MenPage';
import WoMenPage from './components/WoMenPage';
import AdMinPage from './components/AdMinPage'
import TableProductsPage from './components/TableProductsPage';
import AddProduct from './components/AddProduct';
import Cart from './components/Cart';
import PaymentPay from './components/PagementPay';
import OderManagePage from './components/OderManagePage';
import SeeQuickOnApp from './components/SeeQuickOnApp';
import {getProducts , getPayCusTom , deleteProduct , addProducts , editProduct} from './api/Product';

const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function App(props) {
  var [ watchList , setwatchList ] = useState([])
  var [ listCart , setListCart] = useState([])
  const [ payCusTom , setPayCusTom] = useState([])
  const [ sumMoney, setSumMoney] = useState(0)
  const [ sumQuantity, setSumQuantity] = useState(0)

  useEffect(() => {
    // --------------- call product
    getProducts().then(res => {
        setwatchList(res.data)
      })
      .catch(res => {
        console.log(res)
      })
  }, [watchList])

  useEffect (()=>{
          // ------------- call đơn hàng
          getPayCusTom().then(res => {
            setPayCusTom(res.data)
          })
          .catch(res => {
            console.log(res)
          })
  },[])
  
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
    
    <Router>
        <Routes>
            <Route path='/' element={<Nav watchList={watchList}  sumQuantity={sumQuantity}/>}>
                <Route index element={<HomePage watchList={watchList}/>} />
                <Route path='trang-chu' element={<HomePage watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='men' element={<MenPage watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='women' element={<WoMenPage watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='dai-ly' element={<AgentSystemPage />} />
                <Route path='see-quick-on-app/:id' element={<SeeQuickOnApp watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='tin-tuc' element={<NewsPage />} />
                <Route path='lien-he' element={<ContactPage />} />
                <Route path='gio-hang' element={<Cart listCart={listCart} getIdCart={getIdCart} setListCart={setListCart} setSumMoney={setSumMoney} setSumQuantity={setSumQuantity} sumMoney={sumMoney} />} />
                <Route path='thanh-toan' element={<PaymentPay payCusTom={payCusTom} setPayCusTom={setPayCusTom} listCart={listCart} setListCart={setListCart} sumQuantity={sumQuantity} sumMoney={sumMoney}/>} />

            </Route>
            <Route path="admin" element={<AdMinPage  />}>
              <Route index element={<TableProductsPage  watchList={watchList} />}/>
              <Route path="table-products" element={ <TableProductsPage  watchList={watchList} deleteApp={deleteApp}/>}/>
              <Route path='add-product' element={<AddProduct addProduct={addProduct}/>}/>
              <Route path='order-manage' element={<OderManagePage payCusTom={payCusTom} setPayCusTom={setPayCusTom}/>}/>
              <Route path='edit-book/:id' element={<AddProduct addProduct={addProduct} watchList={watchList}/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
