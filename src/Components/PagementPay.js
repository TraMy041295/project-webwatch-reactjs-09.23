import "../css/paymentpage.css"
import {Link , NavLink, Outlet} from "react-router-dom"
import { useState , useEffect } from 'react';
import axios from 'axios';
import {AppContext} from '../context/AppContext'
import { useContext } from 'react';



const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function PaymentPay(props) {
    const {payCusTom , setPayCusTom} = useContext(AppContext)

    const {listCart , sumQuantity ,sumMoney, setListCart} = props
    var [cod , setCod] = useState(0)
    const [orderInfo , setOrDerInFo] = useState({
        emailcustom: "",namecustom: "",phonecustom: "",notecustom: "",shipcodecustom: "",transportcustom: "",
  listbuycustom: "",addresscustom: "",statuscustom:""})
    const [formorder , setFormOrDer] = useState({emailcustom: "",namecustom: "",phonecustom: "",notecustom: "",addresscustom: ""})


    function myFunction() {
        var checkBox = document.getElementById("myCheck");
        var text = document.getElementById("text");
        if (checkBox.checked == true) {
            text.style.display = "block";
        } else {
            text.style.display = "none";
        }
    }
// ---------------Chi phí vận chuyển
    function changeArea(e){
        if ( e.target.value == "TPHCM"){
            setCod(40000)
        }else if (e.target.value == "Hà Nội"){
            setCod(70000)
        }else if (e.target.value == "Cà Mau"){
            setCod(100000)
        }else {
            setCod(0)
        }
    }
// --------------------Thanh toán final

      function finalPay(){
        axios.post(`${api}/Liststudent`,{...orderInfo})
        .then(res=>{
          const payCustomNew = [...payCusTom]
          payCustomNew.push(res.data)
          setPayCusTom(payCustomNew)
          alert("đã đặt hàng thành công")
          setFormOrDer({
            emailcustom: "",namecustom: "",phonecustom: "",notecustom: "",addresscustom: ""
        })
        setListCart([])
        setCod(0)
      })
    }

    useEffect(()=>{
        setOrDerInFo({
            emailcustom:formorder.emailcustom,
            namecustom:formorder.namecustom,
            phonecustom:formorder.phonecustom,
            notecustom:formorder.notecustom,
            listbuycustom:listCart,
            addresscustom:formorder.addresscustom,
            shipcodecustom:"1",
            transportcustom:cod,
            statuscustom:"chưa duyệt"

        })
    },[formorder])
      function handleChange(e) {
        setFormOrDer({
            ...formorder,
            [e.target.name]:e.target.value
        })
      }

    return (<>
        <div className="row info-pay">
            <div className="col-md-4 col-12 col-sm-6 info-pay-form">
                <p className="form-title">Movado</p>
                <div className="row form-info">
                    <p className="col-md-6 col-6 info">Thông tin nhận hàng</p>
                    <p className="col-md-4 col-4 login">Đăng Nhập</p>
                </div>
                <div >
                    <form >
                        <input type="text" value={formorder.emailcustom} onChange={handleChange}  name="emailcustom" placeholder="Email.." />
                        <input type="text" value={formorder.namecustom} onChange={handleChange} name="namecustom" placeholder="Họ Và Tên.." />
                        <input type="text" value={formorder.phonecustom} onChange={handleChange} name="phonecustom" placeholder="Số điện thoại.." />
                        <input type="text" value={formorder.addresscustom} onChange={handleChange}  name="addresscustom" placeholder="Địa chỉ" />
                        <select id="country" name="country" onChange={changeArea}>
                        <option value="---">---</option>
                            <option value="TPHCM">TPHCM</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Cà Mau">Cà Mau</option>
                        </select>
                        <textarea value={formorder.notecustom} onChange={handleChange} name="notecustom" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                    </form>
                </div>
            </div>
            <div className="col-md-4 col-12 col-sm-6 transport">
                <div style={{height : "64px"}}></div>
                <p className="transport-title">Vận chuyển</p>
                <p className="info-transport">{(cod !== 0) ? `Phí vận chuyển : ${cod}` : "Vui lòng nhập thông tin giao hàng" }</p>
                <div className="pay-action">
                    <p className="pay-action-title">Thanh Toán</p>
                    <div className="pay-action-cod">
                        <input type="checkbox" id="myCheck" onClick={myFunction} />
                        <label for="myCheck">Thanh Toán Khi Giao Hàng (COD)</label>

                        <p id="text" style={{ display: "none" }}>COD</p>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12 col-sm-12 pay-money">
                <p className="pay-money-title">Đơn hàng {sumQuantity} sản phẩm</p>
                <table className="table">
                    <tbody className="table-group-divider">
                    {listCart.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{ width: 50 }} /></td>
                            <td>{item.quantity}</td>
                            <td>{item.price * item.quantity}</td>
                        </tr>
                    )}
                </tbody>
                </table>
                <div className="discount-code">
                    <form className="row discount-code-form">
                        <input  type="email" className="form-control col-md-6 col-sm-6" placeholder="Nhập Mã Giảm Giá" />
                        <button type="submit" className="btn btn-primary col-md-3 col-sm-3">Submit</button>
                    </form>
                </div>
                <div className="add-transport row">
                    <p className="col-md-6 col-6 col-sm-6">Tạm Tính</p>
                    <p className="col-md-6 col-6 col-sm-6">{sumMoney}</p>
                    <p className="col-md-6 col-6 col-sm-6">Phí vận chuyển</p>
                    <p className="col-md-6 col-6 col-sm-6">{cod}</p>
                </div>
                <div className="sum-pay row">
                    <p className="col-md-6 col-6 col-sm-6">Tổng cộng</p>
                    <p className="col-md-6 col-6 col-sm-6">{sumMoney + cod}</p>
                    <p className="col-md-6 col-6 col-sm-6"><button className="btn-comback-cart"  ><NavLink className='nav-link' to="/gio-hang">Giỏ Hàng</NavLink></button></p>
                    <p className="col-md-6 col-6 col-sm-6"><button className="btn-pay-ok" onClick={finalPay}>Thanh Toán</button></p>
                </div>

            </div>
        </div>

    </>)
}
export default PaymentPay