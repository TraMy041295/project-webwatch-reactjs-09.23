import '../Css/admin.css'
import Login from './Login';
import { Navigate, useNavigate } from 'react-router-dom';
import { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
  NavLink,
} from "react-router-dom"

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return undefined;
}
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}


function AdMinPage(props) {
  const navigate = useNavigate()
  const [ openLogin , setopenLogin] = useState("true")
  const [ user , setUser ]= useState(null)
  const [form, setForm] = useState({
    username: "",
    password: "",
  })


  useEffect(()=>{
    const user = getCookie("user")
    if(user) {
        setUser(JSON.parse(user))
    }
  },[])

  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  // ---------------Đăng xuất khỏi admin
  function logOut() {
    setCookie("user","",0)
    setUser(null)
    navigate("/admin")
  }


  return (<>
    <div style={(user) ? { display: "none" } : { display: "block" }}>
      <h1>Hello ! Admin</h1>
      <Login  setopenLogin={setopenLogin} form={form} setForm={setForm} setUser={setUser}/>
    </div>
    <div className='admin' style={(user) ? { display: "block" } : { display: "none" }}>
      <div id="mySidenav" className="sidenav_admin">
        <button href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</button>
        <Link to="tableproducts">Danh sách sản phẩm</Link>
        <Link to="addproduct">Thêm mới sản phẩm</Link>
        <Link to="ordermanage">Quản Lý Đơn Hàng</Link>
        <button onClick={logOut} >Đăng xuất</button>
      </div>
      <div id="main">
        <span className='button-open' style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav}>&#9776; open</span>
        <Outlet />
      </div>
    </div>

  </>)
}

export default AdMinPage


