import "../css/seequickonapp.css"
import { useEffect, useState } from 'react';
import { Navigate, useNavigate ,useParams } from 'react-router-dom';
import {
    Link,
} from "react-router-dom"



function SeeQuickOnApp(props){
    const { watchList ,getItemCart} = props
    const navigate = useNavigate()
    const id = parseInt(useParams().id)
    const index = watchList.findIndex(item => item.id == id )
    // --------------------thêm vào giỏ hàng
    function addCart(item) {
        navigate("/gio-hang")
        getItemCart(item)
    }

    return(<>
    <div className="seequickonapp-title row">
            <p className="col-md-8 col-8 col-sm-4">{watchList[index].name}</p>
            <p className="col-md-2 col-2 col-sm-2">{(watchList[index].gender == 1) ? <Link class="nav-link active" to="/men">Đồng hồ Nam</Link>  : <Link class="nav-link active" to="/women">Đồng hồ nữ</Link> } </p>
            <p className="col-md-2 col-2 col-sm-2"><Link class="nav-link active" to="/trang-chu"> Trang chủ</Link></p>
        </div>
        <div className="seequickonapp-content row">
            <div className="col-md-6 col-12 col-sm-6 seequickonapp-content-left "><img  src={watchList[index].image}/> </div>
            <div className="col-md-6 col-12 col-sm-6 seequickonapp-content-right">
                <p className="seequickonapp-name">{watchList[index].name}</p>
                <p className="seequickonapp-price">{watchList[index].price}</p>
                <p>{watchList[index].introduce}</p>
                <p className="seequickonapp-button"><button onClick={() => addCart(watchList[index])}>THÊM VÀO GIỎ HÀNG</button></p>
            </div>
        </div>

    </>)
}
export default SeeQuickOnApp