import "../Css/men.css"
import Tooltip from '@mui/material/Tooltip';
import "../Css/sidebar.css"
import {useState , useEffect} from 'react'
import {Link} from "react-router-dom"
import { useNavigate  } from 'react-router-dom';


function WoMenPage(props) {
  const { watchList,getItemCart } = props
  const navigate = useNavigate()
  const [ listWoMen , setListWoMen] = useState([])
  const [checked, setChecked] = useState([])
    const [filter , setFilter] = useState([])

  useEffect(()=>{
    const filterListWoMen = watchList.filter (item => item.gender == 0)
    setFilter(filterListWoMen)
    setListWoMen(filterListWoMen)
  },[watchList])

  useEffect(()=>{
    if( checked.length !== 0 ) {    
        const filterCheckBox = listWoMen.filter((item)=>item.name.includes(checked.join("")))
        setFilter(filterCheckBox)
    }else {
        const filterCheckBox1 = listWoMen.filter((item)=>item.name.includes(""))
        setFilter(filterCheckBox1)

    }
},[checked,listWoMen ])

const checkBox = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
        updatedList = [...checked, event.target.value];
    } else {
        updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
};

  // -----------------------------Lọc giá

  const [data1, setDataLeft] = useState(10000000)
  const [data2, setDataRight] = useState(0)
  var num1 = parseInt(data2)
  var num2 = parseInt(data1)
  var womenPrice = []
  function filterWoMenPrice(){
    womenPrice = filter.filter((item)=>(num1 <= item.price  && item.price <= num2))
    setFilter(womenPrice)
  }
//   -----------------Thêm vào giỏ hàng
function addCart(item){
    navigate("/giohang")
    getItemCart(item)
  }
  //   ----------------------- SắP XẾP
  var filterCoppy = [...listWoMen]
var sort1_2 = [...listWoMen].sort(function(a,b){
    var n1 = parseInt(a.price)
    var n2 = parseInt(b.price)
    return n1 - n2
})
var sort2_1 = [...listWoMen].sort(function(a,b){
    var n1 = parseInt(a.price)
    var n2 = parseInt(b.price)
    return -n1 + n2
})


  function changeValue(e){
     if ( e.target.value == "Giá Giảm dần"){
        setFilter(sort2_1)
     } else if (e.target.value == "Giá tăng dần"){
        setFilter(sort1_2)
     }else if (e.target.value == "Mặc Định") {
        setFilter(filterCoppy)
    }
  }
//-------------------------
function seeQuickOnApp(id){
    navigate(`/seequickonapp/${id}`)

}

  return (<>

    <div className="men-title row">
                <p className="col-md-6 men-all-item">TẤT CẢ SẢN PHẨM /</p>
                <p className="col-md-6 men-homepage "><Link class="nav-link active" to="/trangchu">Trang chủ</Link></p>
        </div>
    <div className="men-content row">
    <div className="tintuc-left col-md-3 grid">
            <div className="danhmuc col-md-12">
                <div className="danhmuc-title">
                    <p className="title-item"><h6>DANH MỤC</h6></p>
                </div>
                <ul class="nav flex-column">
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link active" to="/trangchu">Trang chủ</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/men">Đồng hồ nam</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/women">Đồng hồ nữ</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/tintuc">Tin tức</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/daily">Đại Lý</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/lienhe">Liên Hệ</Link>
                    </li>
                </ul>
            </div>
            {/* -----------------range-price */}
            <div className="range-price" >
                <div className="danhmuc-title">
                    <p className="title-item"><h6>MỨC GIÁ</h6></p>
                </div>
                <div className="range-item" >
                    <input className="range-1" type="range" min="0" max="10000000" step="-1000" value={data1} onChange={(e) => setDataLeft(e.target.value)} />
                    <input className="range-2" type="range" min="0" max="10000000" step="1000" value={data2} onChange={(e) => setDataRight(e.target.value)} />
                </div>
                <div className="display-price" >
                    <button>{data2}</button>
                    <button>{data1}</button>
                </div>
                <div className="button-locgia">
                    <button onClick={filterWoMenPrice}>{(womenPrice == null) ? "Lọc Giá" : "Bỏ Giá "}</button>
                </div>
            </div>
            {/* ---------------- */}
            <div className="filter-product">
                <div className="danhmuc-title">
                    <p className="title-item"><h6>SẢN PHẨM</h6></p>
                </div>
                <div className="checkbox-product row">
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                           Apple Watch
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value=" Đồng hồ" id="flexCheckDefault" onClick={checkBox} />
                        <label className="form-check-label" for="flexCheckDefault">
                           Đồng hồ
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="ECO-DRIVE" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                           ECO-DRIVE
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="UNISEX" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                           UNISEX
                        </label>
                    </div>
                </div>
            </div>
            {/* ----------------- theo thương hiệu */}
            <div className="follow-brand">
                <div className="danhmuc-title">
                    <p className="title-item"><h6>THEO THƯƠNG HIỆU</h6></p>
                </div>
                <div className="checkbox-brand row">
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="Apple" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                           Apple 
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="CITIZEN" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                           CITIZEN
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="DIESEL" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                           DIESEL
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="Montbrilliant" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                        Montbrilliant
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="Omega" id="flexCheckDefault"onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                        Omega
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="Tag Heuer" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                        Tag Heuer
                        </label>
                    </div>
                    <div className="form-check col-md-6">
                        <input className="form-check-input" type="checkbox" value="TITSOT" id="flexCheckDefault" onClick={checkBox}/>
                        <label className="form-check-label" for="flexCheckDefault">
                        TITSOT
                        </label>
                    </div>
                </div>

            </div>
            {/* --------------------sản phẩm nổi bật */}
            <div className="filter-product">
                <div className="danhmuc-title">
                    <p className="title-item"><h6>SẢN PHẨM NỔI BẬT</h6></p>
                </div>
                <div className="hot-product grid">
                    <div className="hot-product-item row">
                        <p className="col-md-5" ><img src="//bizweb.dktcdn.net/thumb/medium/100/244/305/products/25.jpg?v=1502425368580" /></p>
                        <p className="col-md-7">
                            <p><a href="#" >Đồng hồ Motorola Moto 360</a></p>
                            <p>8.500.000₫</p>
                        </p>
                    </div>
                    <div className="hot-product-item row">
                        <p className="col-md-5" ><img src="//bizweb.dktcdn.net/thumb/medium/100/244/305/products/7.jpg?v=1502423293320" /></p>
                        <p className="col-md-7">
                            <p><a href="#" >Đồng hồ CITIZEN MEN'S ECO-DRIVE CANVAS</a></p>
                            <p>8.500.000₫</p>
                        </p>
                    </div>
                    <div className="hot-product-item row">
                        <p className="col-md-5" ><img src="//bizweb.dktcdn.net/thumb/medium/100/244/305/products/6-574444e4-7a2d-4849-9dca-76ce01c24abd-9b0b1bb6-48a0-4b2a-8500-eccee4c446a1.jpg?v=1502422596970" /></p>
                        <p className="col-md-7">
                            <p><a href="#" >Đồng hồ TISSOT T0055171705700</a></p>
                            <p>4.500.000₫</p>
                        </p>
                    </div>
                    <div className="hot-product-item row">
                        <p className="col-md-5" ><img src="//bizweb.dktcdn.net/thumb/medium/100/244/305/products/5-1da46838-470c-4fe1-9ba5-618c765d8789.jpg?v=1502422386343" /></p>
                        <p className="col-md-7">
                            <p><a href="#" >Đồng hồ TISSOT MEN'S</a></p>
                            <p>5.000.000₫</p>
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>
{/* ---------------------------------------------- */}
   
      <div className="watch-men row col-md-9">
        <div className="all-item row" >
          <p className="left-all-item col-md-3">Tất cả sản phẩm</p>

          <div class="dropdown right-all-item col-md-4">
          <select name="watchmen" id="watchmen" onChange={changeValue}>
    <option value="Mặc Định">Sắp xếp Mặc Định</option>
    <option value="Giá tăng dần">Sắp xếp: Giá tăng dần</option>
    <option value="Giá Giảm dần">Sắp xếp: Giá Giảm dần</option>

  </select>
          </div>
        </div>
      
        {filter.map(item =>
          <div className='col-md-4 men-item'>
            <a href='#'><img src={item.image} /></a>
            <div className="row men-img-mini">
              <p className="col-md-3 men-img-mini1"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/7.jpg?v=1502423293320" /></p>
              <p className="col-md-3 men-img-mini2"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/6-574444e4-7a2d-4849-9dca-76ce01c24abd-9b0b1bb6-48a0-4b2a-8500-eccee4c446a1.jpg?v=1502422596970" /></p>
              <p className="col-md-3 men-img-mini3"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/5-1da46838-470c-4fe1-9ba5-618c765d8789.jpg?v=1502422386343" /></p>
            </div>
            <p><a href='#'>{item.name}</a></p>
            <p>{item.price}</p>
            <button className="btn-men" onClick={()=>addCart(item)}>Thêm Vào Giỏ Hàng</button>
            <Tooltip title="Xem nhanh" placement="top" arrow>
              <button className="men-button" type="button" onClick={()=>seeQuickOnApp(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16" >
              <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
              <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
            </svg></button>
    </Tooltip>
            
          </div>
        )}
      </div>
    </div>
  </>)
}
export default WoMenPage