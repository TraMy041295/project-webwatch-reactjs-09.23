import "../Css/seequickonapp.css"
import { useEffect, useState } from 'react';
import { Navigate, useNavigate ,useParams } from 'react-router-dom';
import {
    Link,
} from "react-router-dom"



function SeeQuickOnApp(props){
    const { watchList ,get_item_cart} = props
    const navigate = useNavigate()
    const id = parseInt(useParams().id)
    const index = watchList.findIndex(item => item.id == id )
    // --------------------thêm vào giỏ hàng
    function add_cart(item) {
        navigate("/app/giohang")
        get_item_cart(item)
    }

    return(<>
    <div className="seequickonapp-title row">
            <p className="col-md-8 ">{watchList[index].name}</p>
            <p className="col-md-2">{(watchList[index].gioitinh == 1) ? <Link class="nav-link active" to="/app/men">Đồng hồ Nam</Link>  : <Link class="nav-link active" to="/app/women">Đồng hồ nữ</Link> } </p>
            <p className="col-md-2 "><Link class="nav-link active" to="/app/trangchu"> Trang chủ</Link></p>
        </div>
        <div className="seequickonapp-content row">
            <div className="col-md-6 seequickonapp-content-left "><img  src={watchList[index].image}/> </div>
            <div className="col-md-6 seequickonapp-content-right">
                <p className="seequickonapp-name">{watchList[index].name}</p>
                <p className="seequickonapp-price">{watchList[index].price}</p>
                <p>{watchList[index].gioithieu}</p>
                <p className="seequickonapp-button"><button onClick={() => add_cart(watchList[index])}>THÊM VÀO GIỎ HÀNG</button></p>
            </div>
        </div>

    </>)
}
export default SeeQuickOnApp