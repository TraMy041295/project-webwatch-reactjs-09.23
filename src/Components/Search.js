import "../Css/men.css"
import "../Css/searchnav.css"
import Tooltip from '@mui/material/Tooltip';
import "../Css/sidebar.css"
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"



function Search(props) {
    const { filterSearchNav, searchnav } = props


    return (<>
        <div className="search_nav row">
            <p className="col-md-9 ">KẾT QUẢ TÌM KIẾM VỚI TỪ KHOÁ "{searchnav}"/</p>
            <p className="col-md-3 "><Link class="nav-link active" to="/app/trangchu">Trang chủ</Link></p>
        </div>
        {/* ---------------------------------------------- */}
        <div className="men-content row">
        <div className="watch-men row">
        <div style={{color:"#1B4B73" , fontWeight:"bolder",textTransform:"uppercase"}}>Có {filterSearchNav.length} kết quả tìm kiếm phù hợp</div>
            {filterSearchNav.map(item =>
                <div className='col-md-3 men-item'>
                    <a href='#'><img src={item.image} /></a>
                    <div className="row men-img-mini">
                        <p className="col-md-3 men-img-mini1"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/7.jpg?v=1502423293320" /></p>
                        <p className="col-md-3 men-img-mini2"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/6-574444e4-7a2d-4849-9dca-76ce01c24abd-9b0b1bb6-48a0-4b2a-8500-eccee4c446a1.jpg?v=1502422596970" /></p>
                        <p className="col-md-3 men-img-mini3"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/5-1da46838-470c-4fe1-9ba5-618c765d8789.jpg?v=1502422386343" /></p>
                    </div>
                    <p><a href='#'>{item.name}</a></p>
                    <p>{item.price}</p>
                    <button className="btn-men">Tuỳ chọn</button>
                    <Tooltip title="Xem nhanh" placement="top" arrow>
                        <button className="men-button" type="button" >
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

export default Search