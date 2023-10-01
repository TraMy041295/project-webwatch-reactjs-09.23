

import "../Css/seequick.css"
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {
    Link,
} from "react-router-dom"


function SeeQuickOrDer(props){
    const { id, payCusTom } = props
    const [isExpand, setExpand] = useState("false")
    const [index , setIndex ] = useState(0)
    function expand() {
        const indexof = payCusTom.findIndex(item=>item.id ===id)
        setIndex(indexof)
        
        if (isExpand == "false") {
            setExpand("true")
        }
        else {
            setExpand("false")
        }
    }

    function hander() {
        setExpand("false")
        setIndex(0)
    }
    return(<>
    <div className="see_quick">

<a className="see_quick_button" onClick={expand} >Xem nhanh</a>
<div className='modal' style={isExpand == "false" ? { display: "none" } : { display: "block" }}>
    <div className="card row">
        
    <table className="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">GIỚI TÍNH</th>
                    <th scope="col">NAME</th>
                    <th scope="col">IMAGE</th>
                    <th scope="col">SỐ LƯỢNG</th>
                    <th scope="col">ĐƠN GIÁ</th>
                    <th scope="col">TẠM TÍNH</th>
                    <th scope="col">PHÍ VẬN CHUYỂN</th>
                    <th scope="col">TỔNG TIỀN</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                {payCusTom[index].listbuycustom.map(item =>
                    <tr>
                    <th scope="row">{item.id}</th>
                    <th scope="row">{item.gender == 1 ? "nam " : " nữ"}</th>
                    <td>{item.name}</td>
                    <td><img src={item.image} style={{width:100}} /></td>
                    <td>{item.quantity}</td>
                    <td>{item.price}</td>
                    <td>{item.price * item.quantity}</td>
                    <td>{payCusTom[index].transportcustom} </td>
                  <td>{payCusTom[index].transportcustom + (item.price * item.quantity)} </td>
                  </tr>
                
                    )}
                    
            </tbody>
        </table>
        <hr></hr>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button type="button" onClick={hander} className="cancelbtn">Cancel</button>
        </div>
    </div>
</div>
</div>
    </>)
}

export default SeeQuickOrDer