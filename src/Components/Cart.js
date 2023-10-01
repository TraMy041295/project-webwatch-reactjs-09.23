import "../Css/cart.css"
import { useState , useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';
import {Link , NavLink, Outlet} from "react-router-dom"



function Cart(props) {
    const { listCart ,getIdCart,setListCart,setSumMoney,setSumQuantity ,sumMoney} = props

    const navigate = useNavigate()
    function deleteItemCart(id){
        getIdCart(id)
    }
    function changeQuantity(item,addQuantity){
        const index = listCart.indexOf(item)
        const arr = [...listCart]
        arr[index].quantity += addQuantity
        setListCart([...arr])
    }
    function sum(){
        let sumMoneyCart = 0;
        listCart.map((item) => {
            sumMoneyCart += item.price * item.quantity
        })
        setSumMoney(sumMoneyCart)
    }
    function sumQuantity(){
        let addQuantity = 0;
        listCart.map((item)=>{
            addQuantity += item.quantity
        })
        setSumQuantity(addQuantity)
    }
    useEffect(()=>{
        sum();
        sumQuantity()
        
        
    });

    // ----------------Tiếp tục mua hàng
    function continueBuy(){
  
        if((listCart[listCart.length-1].gender) == 1 ){
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
                    {listCart.map(item =>
                        <tr key={item.id}>
                            <th scope="row">{listCart.indexOf(item)}</th>
                            <th scope="row">{item.gender == 1 ? "nam " : " nữ"}</th>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{ width: 100 }} /></td>
                            <td>{item.price}</td>
                            <td key={item.id}>
                                <div className="row quantity-item" >
                                    <button className="col-md-3 quantity-button" onClick={()=>changeQuantity(item,-1)} >-</button>
                                    <input className="col-md-6 quantity-item-input" type="text" value={item.quantity} />
                                    <button className="col-md-3 quantity-button"onClick={()=>changeQuantity(item,1)}>+</button>
                                </div>
                            </td>
                            <td>{item.price * item.quantity}</td>
                            <td><button type="button" className="btn btn-danger" onClick={()=>deleteItemCart(item.id)} >Xoá</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
            <hr></hr>
            <div>
            <p style={{color:"red",fontWeight:"bolder",textAlign:"end"}} > Tổng tiền cần thanh toán : {sumMoney} </p>
            <div className="choice-buy-pay">
                <button className="btn-continue-buy" onClick={continueBuy} >Tiếp tục mua hàng</button>
                <button className="btn-pay"><NavLink className='nav-link' to="/app/thanhtoan">Thanh Toán</NavLink></button>
            </div>
            </div>
        </div>

    </>)
}
export default Cart