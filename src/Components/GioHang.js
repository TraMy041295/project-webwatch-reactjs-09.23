import "../Css/giohang.css"
import { useState , useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import {Link , NavLink, Outlet} from "react-router-dom"



function GioHang(props) {
    const { listcart ,get_id_cart,setlistCart,setTongtien,setTongSoLuong ,tongtien} = props

    const navigate = useNavigate()
    function deleteItemCart(id){
        get_id_cart(id)
    }
    function changeQuantity(item,sl){
        const index = listcart.indexOf(item)
        const arr = [...listcart]
        arr[index].soluong += sl
        setlistCart([...arr])
    }
    function sum(){
        let tt = 0;
        listcart.map((item) => {
            tt += item.price * item.soluong
        })
        setTongtien(tt)
    }
    function sumquantity(){
        let sl = 0;
        listcart.map((item)=>{
            sl += item.soluong
        })
        setTongSoLuong(sl)
    }
    useEffect(()=>{
        sum();
        sumquantity()
        
        
    });

    // ----------------Tiếp tục mua hàng
    function continueBuy(){
  
        if((listcart[listcart.length-1].gioitinh) == 1 ){
            navigate("/app/men")
        }else {
            navigate("/app/women")
        }
    }

    return (<>
        <div className="cart-table">
            <h1 className="cart-title" >GIỎ HÀNG CỦA BẠN ^^!</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">GIỚI TÍNH</th>
                        <th scope="col">TÊN</th>
                        <th scope="col">HÌNH ẢNH</th>
                        <th scope="col">GIÁ</th>
                        <th scope="col">SỐ LƯỢNG</th>
                        <th scope="col">THÀNH TIỀN</th>
                        <th scope="col">XOÁ</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {listcart.map(item =>
                        <tr key={item.id}>
                            <th scope="row">{listcart.indexOf(item)}</th>
                            <th scope="row">{item.gioitinh == 1 ? "nam " : " nữ"}</th>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{ width: 100 }} /></td>
                            <td>{item.price}</td>
                            <td key={item.id}>
                                <div className="row quantity-item" >
                                    <button className="col-md-3 quantity-button" onClick={()=>changeQuantity(item,-1)} >-</button>
                                    <input className="col-md-6 quantity-item-input" type="text" value={item.soluong} />
                                    <button className="col-md-3 quantity-button"onClick={()=>changeQuantity(item,1)}>+</button>
                                </div>
                            </td>
                            <td>{item.price * item.soluong}</td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>deleteItemCart(item.id)} >Xoá</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <hr></hr>
            <div>
            <p style={{color:"red",fontWeight:"bolder",textAlign:"end"}} > Tổng tiền cần thanh toán : {tongtien} </p>
            <div className="choice-buy-pay">
                <button className="btn-continue-buy" onClick={continueBuy} >Tiếp tục mua hàng</button>
                <button className="btn-pay"><NavLink className='nav-link' to="/app/thanhtoan">Thanh Toán</NavLink></button>
            </div>
            </div>
        </div>

    </>)
}
export default GioHang