import '../Css/nav.css'
import {Link , NavLink, Outlet} from "react-router-dom"
import Footer from './Footer'
import Login from './Login'
import { useNavigate , useParams , useSearchParams } from 'react-router-dom';
import { useState ,useEffect, useMemo } from 'react'
import Search from './Search';

function Nav( props) {
    const { watchList ,sumQuantity} = props
    const [searchNav , setSearchNav] = useState("")
    const [ searchParams , setsearchParams ] = useSearchParams()
    function openNav() {
        document.getElementById("mySidenav").style.width = "1000px"
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0"
    }

    // ----------------search
    function searchItemNav(e){
        e.preventDefault()
        setsearchParams({value:searchNav})
    }
    const filterSearchNav = useMemo(()=>
    (searchNav !== "") ? watchList.filter(item=>item.name.toLowerCase().includes(searchParams.get("value"))) : []
       ,[searchParams])


  
    return (<>
       
        <div className="menu row">
            <div className='col-md-2'>
                <div id="mySidenav" className="sidenav row">
                    <div className='sidenav-left col-md-4'>
                    <button className="closebtn" onClick={closeNav}>x</button>
                    <NavLink className='nav-link' to="/trangchu">TRANG CHỦ</NavLink>
                    <NavLink className='nav-link' to="/men" >ĐỒNG HỒ NAM</NavLink>
                    <NavLink className='nav-link' to="/women">ĐỒNG HỒ NỮ</NavLink>
                    <NavLink className='nav-link' to="/tintuc">TIN TỨC</NavLink>
                    <NavLink className='nav-link' to="/daily">ĐẠI LÝ</NavLink>
                    <NavLink className='nav-link' to="/lienhe">LIÊN HỆ</NavLink>
                    </div>
                    <div className='sidenav-right col-md-8'>
                        <div className='sidenav-right-men row'>
                            <p className='col-md-4'><img src='//bizweb.dktcdn.net/100/244/305/themes/895013/assets/menu1.jpg?1676340930397'/></p>
                            <p className='col-md-8'>
                                <p>ĐỒNG HỒ NAM</p>
                                <p className='row'>
                                <NavLink className='nav-link col-md-6' to="/men" >ĐỒNG HỒ TSOT</NavLink>
                                <NavLink className='nav-link col-md-6' to="/men" >ĐỒNG HỒ CITIZEN</NavLink>
                                <NavLink className='nav-link col-md-6' to="/men" >ĐỒNG HỒ OMEGA</NavLink>
                                <NavLink className='nav-link col-md-6' to="/men" >Đang Khuyến Mãi</NavLink>
                                </p>
                            </p>
                        </div>
                        <div className='sidenav-right-men row'>
                            <p className='col-md-4'><img src='//bizweb.dktcdn.net/100/244/305/themes/895013/assets/menu2.jpg?1676340930397'/></p>
                            <p className='col-md-8'>
                                <p>ĐỒNG HỒ NỮ</p>
                                <p className='row'>
                                <NavLink className='nav-link col-md-6' to="/women" >ĐỒNG HỒ TSOT</NavLink>
                                <NavLink className='nav-link col-md-6' to="/women" >ĐỒNG HỒ CITIZEN</NavLink>
                                <NavLink className='nav-link col-md-6' to="/women" >ĐỒNG HỒ OMEGA</NavLink>
                                <NavLink className='nav-link col-md-6' to="/women" >Đang Khuyến Mãi</NavLink>
                                </p>
                            </p>
                        </div>
                        <div className='sidenav-right-men row'>
                            <p className='col-md-4'><img src='//bizweb.dktcdn.net/100/244/305/themes/895013/assets/menu3.jpg?1676340930397'/></p>
                            <p className='col-md-8'>
                                <p>SẢN PHẨM KHUYẾN MÃI</p>
                                <p className='row'>
                                <NavLink className='nav-link col-md-6' to="/men" >ĐỒNG HỒ TSOT</NavLink>
                                <NavLink className='nav-link col-md-6' to="/men" >ĐỒNG HỒ CITIZEN</NavLink>
                                <NavLink className='nav-link col-md-6' to="/men" >ĐỒNG HỒ OMEGA</NavLink>
                                <NavLink className='nav-link col-md-6' to="/men" >Đang Khuyến Mãi</NavLink>
                                </p>
                            </p>
                        </div>

                    </div>
                </div>
                <span onClick={openNav}>&#9776; Menu</span>
            </div>
            {/* --------------Find */}
            <div className="input-group col-md-2">
                <div className='row input-group-item'>
                
                <span className="input-group-text border-left col-md-1" id="addon-wrapping">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </span>
                <form className='input-group-search  col-md-8' onSubmit={searchItemNav}>
                <input type="text" value={searchNav} onChange={e=>{setSearchNav(e.target.value)}} className="form-control " placeholder="Tìm kiếm..." />

                </form>
                </div>
            </div>
            {/* ---------------logo */}

            <div className="logo col-md-5">
                <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/logo.png?1676340930397" />
            </div>
            {/* --------- cart */}
            <div className="cart col-md-3">
                <div className="row cart-item ">
                    <span className=" col-md-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                    </span>
                    <p className="col-md-4"><NavLink className='nav-link' to="/giohang">Giỏ hàng(<span style={{color:"red"}}>{sumQuantity}</span>)</NavLink></p>
                </div>
           </div>
        </div>
        <div className='nav-main'>
        {(searchParams == "") ? <Outlet/> : <Search filterSearchNav={filterSearchNav} searchNav={searchNav}/>}
        </div>
        <Footer/>
    </>)
}

export default Nav