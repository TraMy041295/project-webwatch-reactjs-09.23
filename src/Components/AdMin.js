import '../Css/admin.css'
import Login from './Login';
import { Navigate, useNavigate } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  Outlet,
  NavLink,
} from "react-router-dom"

function AdMin(props) {
  const navigate = useNavigate()
  const { openLogin ,get_login_result } = props
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
  }
  // ---------------Đăng xuất khỏi admin
  function logOut(){
    get_login_result("true")
    navigate("/admin")
  }

  return (<>
  <div style={(openLogin) ? { display: "block" } : { display: "none" }}>
     <Login get_login_result={get_login_result}/>
     </div>
    <div className='admin' style={(openLogin) ? { display: "none" } : { display: "block" }}>
      <div id="mySidenav" className="sidenav_admin">
        <button href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</button>
        <Link to="/admin/tableproducts">Danh sách sản phẩm</Link>
        <Link to="/admin/addproduct">Thêm mới sản phẩm</Link>
        <Link to="/admin/ordermanage">Quản Lý Đơn Hàng</Link>
        <button onClick={logOut} >Đăng xuất</button>
      </div>
      <div id="main">
       
        <span className='button-open' style={{ fontSize: 30, cursor: "pointer" }} onClick={openNav}>&#9776; open</span>
        
        <Outlet />
      </div>
    </div>

  </>)
}

export default AdMin


