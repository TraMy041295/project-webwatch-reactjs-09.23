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
import Nav from './Components/Nav';
import TrangChu from './Components/TrangChu';
import DaiLy from './Components/DaiLy';
import TinTuc from './Components/TinTuc';
import LienHe from './Components/LienHe';
import Men from './Components/Men';
import WoMen from './Components/WoMen';
import AdMin from './Components/AdMin'
import TableProducts from './Components/TableProducts';
import AddProduct from './Components/AddProduct';
import GioHang from './Components/GioHang';
import ThanhToan from './Components/ThanhToan';
import OderManage from './Components/OderManage';
import SeeQuickOnApp from './Components/SeeQuickOnApp';


const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function App(props) {
  var [ watchList , setwatchList ] = useState([])
  var [ openLogin , setopenLogin] = useState("true")
  var [ listcart , setlistCart] = useState([])
  const [paycustom , setPayCusTom] = useState([])
  const [tongtien, setTongtien] = useState(0)
  const [tongsoluong, setTongSoLuong] = useState(0)


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
    console.log(id)
    axios.delete(`${api}/Listwatch/${id}`)
   .then(res=>{
     const listWatchNew = watchList.filter(item=>item.id!==id)
     setwatchList(listWatchNew)
   })
  }

  function addProduct(value){
    console.log(value)
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
      console.log(value)
    axios.post(`${api}/Listwatch`,{...value})
    .then(res=>{
      const listStudentNew = [...watchList]
      listStudentNew.push(res.data)
      setwatchList(listStudentNew)
  })
    }
    }
  // -----------------------login------
  function get_login_result(result){
    setopenLogin(result)
  }
  // ----------------------LIST CART--------
  function get_item_cart(item){
    const listcartcoppy = [...listcart]
    listcartcoppy.push(item)
    setlistCart(listcartcoppy)
  }
  function get_id_cart(id){
   const index = listcart.findIndex(item => item.id == id)
   const listcartcoppy = [...listcart]
   listcartcoppy.splice(index,1)
   setlistCart(listcartcoppy)
  }
// -------------------------Tổng số lượng & Tổng tiền
  function get_sum_quantity_money(tt,sl){
    console.log(tt,sl)
  }
  return (
    
    <Router>
        <Routes>
            <Route path='/app' element={<Nav listcart={listcart} watchList={watchList} get_login_result={get_login_result} tongsoluong={tongsoluong}/>}>
                <Route index element={<TrangChu watchList={watchList}/>} />
                <Route path='/app/trangchu' element={<TrangChu watchList={watchList}/>} />
                <Route path='/app/men' element={<Men watchList={watchList} get_item_cart={get_item_cart}/>} />
                <Route path='/app/women' element={<WoMen watchList={watchList} get_item_cart={get_item_cart}/>} />
                <Route path='/app/daily' element={<DaiLy />} />
                <Route path='/app/seequickonapp/:id' element={<SeeQuickOnApp watchList={watchList} get_item_cart={get_item_cart}/>} />
                <Route path='/app/tintuc' element={<TinTuc />} />
                <Route path='/app/lienhe' element={<LienHe />} />
                <Route path='/app/giohang' element={<GioHang listcart={listcart} get_id_cart={get_id_cart} setlistCart={setlistCart} setTongtien={setTongtien} setTongSoLuong={setTongSoLuong} tongtien={tongtien} />} />
                <Route path='/app/thanhtoan' element={<ThanhToan paycustom={paycustom} setPayCusTom={setPayCusTom} listcart={listcart} setlistCart={setlistCart} tongsoluong={tongsoluong} tongtien={tongtien}/>} />

            </Route>
            <Route path="/admin" element={<AdMin get_login_result={get_login_result} openLogin={openLogin} />}>
              <Route index element={<TableProducts  watchList={watchList} />}/>
              <Route path="/admin/tableproducts" element={ <TableProducts watchList={watchList} deleteApp={deleteApp}/>}/>
              <Route path='/admin/addproduct' element={<AddProduct addProduct={addProduct}/>}/>
              <Route path='/admin/ordermanage' element={<OderManage paycustom={paycustom} setPayCusTom={setPayCusTom}/>}/>
              <Route path='/admin/editbook/:id' element={<AddProduct addProduct={addProduct} watchList={watchList}/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
