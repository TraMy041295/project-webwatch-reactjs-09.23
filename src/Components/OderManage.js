import {Link , NavLink, Outlet} from "react-router-dom"
import { useState , useEffect } from 'react';
import axios from 'axios';
import SeeQuickOrDer from "./SeeQuickOrDer";
import "../Css/ordermanage.css"

const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"


function OderManage(props){
    const { paycustom ,setPayCusTom} = props

    

// ------------------Xoá đơn hàng
    function deleteOrder(id){
        axios.delete(`${api}/Liststudent/${id}`)
        .then(res=>{
          const paycustomnew = paycustom.filter(item=>item.id!==id)
          setPayCusTom(paycustomnew)
        })
    }

    // ------------------duyệt đơn hàng

    function isagree(e){
        if (e.target.innerHTML == "Đã Duyệt đơn" ){
            e.target.innerHTML = "Chưa Duyệt đơn"
        }else {
            e.target.innerHTML = "Đã Duyệt đơn"
        }
       
    }

    return(<>
      <div className="table-order">
        
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Họ Và Tên</th>
                    <th scope="col">Số điện thoại</th>
                    <th scope="col">Địa Chỉ</th>
                    <th scope="col">Note</th>
                    <th scope="col">Xoá Đơn Hàng</th>
                    <th scope="col">Xem đơn hàng</th>
                    <th scope="col">Trạng thái(duyệt)</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {paycustom.map(item =>
                    <tr>
                    <th scope="row">{item.id}</th>
                    <th scope="row">{item.namecustom}</th>
                    <td>{item.sdtcustom}</td>
                    <td>{item.diachicustom}</td>
                    <td>{item.notecustom}</td>
                    <td><button type="button" className="btn btn-danger" onClick={()=>deleteOrder(item.id)}  >Xoá</button></td>
              <td><button type="button" className="btn btn-success" ><SeeQuickOrDer id={item.id} paycustom={paycustom} /></button></td>
              <td><button type="button" class="btn btn-info" onClick={(e)=>isagree(e)}>Chưa Duyệt đơn</button></td>
                  </tr>
                    )}
            </tbody>
        </table>

</div>
    
    </>)
}
export default OderManage