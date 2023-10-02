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
import type { RouteObject } from "react-router-dom";
import { useRoutes, useParams } from "react-router-dom";
import { useState , useEffect } from 'react';
import Nav from './Components/Nav';
import HomePage from './Components/HomePage';
import AgentSystemPage from './Components/AgentSystemPage';
import NewsPage from './Components/NewsPage';
import ContactPage from './Components/ContactPage';
import MenPage from './Components/MenPage';
import WoMenPage from './Components/WoMenPage';
import AdMinPage from './Components/AdMinPage'
import TableProductsPage from './Components/TableProductsPage';
import AddProductPage from './Components/AddProductPage';
import Cart from './Components/Cart';
import PaymentPay from './Components/PagementPay';
import OderManagePage from './Components/OderManagePage';
import SeeQuickOnApp from './Components/SeeQuickOnApp';


const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function App(props) {
  var [ watchList , setwatchList ] = useState([])
  var [ listCart , setListCart] = useState([])
  const [ payCusTom , setPayCusTom] = useState([])
  const [ sumMoney, setSumMoney] = useState(0)
  const [ sumQuantity, setSumQuantity] = useState(0)


  useEffect(() => {
    axios.get(
      `${api}/Listwatch/`,
    )
      .then(res => {
        setwatchList(res.data)
      })
      .catch(res => {
        console.log(res)
      })
    
  }, [])
  useEffect(() => {
    axios.get(
      `${api}/Liststudent/`,
    )
      .then(res => {
        setPayCusTom(res.data)
      })
      .catch(res => {
        console.log(res)
      })
    
  }, [])

  
  // ------------------------------------

  function deleteApp(id){
    axios.delete(`${api}/Listwatch/${id}`)
   .then(res=>{
     const listWatchNew = watchList.filter(item=>item.id!==id)
     setwatchList(listWatchNew)
   })
  }

  function addProduct(value){
    if(value.id !== undefined)
    { const index = watchList.findIndex(item=>item.id===value.id)
      value = watchList[index]
      axios.put(`${api}/Listwatch`,{...value})
      .then(res=>{
        const index = watchList.findIndex(item=>item.id===value.id)
        const listStudentNew = [...watchList] 
        listStudentNew[index] = res.data
        setwatchList(listStudentNew)
      })

    }else{
    axios.post(`${api}/Listwatch`,{...value})
    .then(res=>{
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
            <Route path='/app' element={<Nav watchList={watchList}  sumQuantity={sumQuantity}/>}>
                <Route index element={<HomePage watchList={watchList}/>} />
                <Route path='/app/trangchu' element={<HomePage watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='/app/men' element={<MenPage watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='/app/women' element={<WoMenPage watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='/app/daily' element={<AgentSystemPage />} />
                <Route path='/app/seequickonapp/:id' element={<SeeQuickOnApp watchList={watchList} getItemCart={getItemCart}/>} />
                <Route path='/app/tintuc' element={<NewsPage />} />
                <Route path='/app/lienhe' element={<ContactPage />} />
                <Route path='/app/giohang' element={<Cart listCart={listCart} getIdCart={getIdCart} setListCart={setListCart} setSumMoney={setSumMoney} setSumQuantity={setSumQuantity} sumMoney={sumMoney} />} />
                <Route path='/app/thanhtoan' element={<PaymentPay payCusTom={payCusTom} setPayCusTom={setPayCusTom} listCart={listCart} setListCart={setListCart} sumQuantity={sumQuantity} sumMoney={sumMoney}/>} />

            </Route>
            <Route path="/admin" element={<AdMinPage  />}>
              <Route index element={<TableProductsPage  watchList={watchList} />}/>
              <Route path="/admin/tableproducts" element={ <TableProductsPage watchList={watchList} deleteApp={deleteApp}/>}/>
              <Route path='/admin/addproduct' element={<AddProductPage addProduct={addProduct}/>}/>
              <Route path='/admin/ordermanage' element={<OderManagePage payCusTom={payCusTom} setPayCusTom={setPayCusTom}/>}/>
              <Route path='/admin/editbook/:id' element={<AddProductPage addProduct={addProduct} watchList={watchList}/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
