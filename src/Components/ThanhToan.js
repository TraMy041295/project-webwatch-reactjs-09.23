import "../Css/thanhtoan.css"
import {Link , NavLink, Outlet} from "react-router-dom"
import { useState , useEffect } from 'react';
import axios from 'axios';


const api = "https://6496d60c83d4c69925a326f0.mockapi.io/"

function ThanhToan(props) {
    const {listcart , tongsoluong ,tongtien, setlistCart, setPayCusTom , paycustom} = props
    var [cod , setCod] = useState(0)
    const [orderinfo , setOrDerInFo] = useState({
        emailcustom: "",namecustom: "",sdtcustom: "",notecustom: "",shipcodecustom: "",transportcustom: "",
  listbuycustom: "",diachicustom: "",trangthaicustom:""})
    const [formorder , setFormOrDer] = useState({
        emailcustom: "",namecustom: "",sdtcustom: "",notecustom: "",diachicustom: ""
    })


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
    function changearea(e){
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


   

      function finalpay(){
        axios.post(`${api}/Liststudent`,{...orderinfo})
        .then(res=>{
          const paycustomnew = [...paycustom]
          paycustomnew.push(res.data)
          setPayCusTom(paycustomnew)
          alert("đã đặt hàng thành công")
          setFormOrDer({
            emailcustom: "",namecustom: "",sdtcustom: "",notecustom: "",diachicustom: ""
        })
        setlistCart([])
        setCod(0)
      })
    }

    useEffect(()=>{
        setOrDerInFo({
            emailcustom:formorder.emailcustom,
            namecustom:formorder.namecustom,
            sdtcustom:formorder.sdtcustom,
            notecustom:formorder.notecustom,
            listbuycustom:listcart,
            diachicustom:formorder.diachicustom,
            shipcodecustom:"1",
            transportcustom:cod,
            trangthaicustom:"chưa duyệt"

        })
    },[formorder])
console.log(paycustom)
      function handleChange(e) {
        setFormOrDer({
            ...formorder,
            [e.target.name]:e.target.value
        })
      }

    return (<>
        <div className="row info-pay">
            <div className="col-md-4 info-pay-form">
                <p className="form-title">Movado</p>
                <div className="row form-info">
                    <p className="col-md-6 info">Thông tin nhận hàng</p>
                    <p className="col-md-4 login">Đăng Nhập</p>
                </div>
                <div >
                    <form >
                        <input type="text" value={formorder.emailcustom} onChange={handleChange}  name="emailcustom" placeholder="Email.." />
                        <input type="text" value={formorder.namecustom} onChange={handleChange} name="namecustom" placeholder="Họ Và Tên.." />
                        <input type="text" value={formorder.sdtcustom} onChange={handleChange} name="sdtcustom" placeholder="Số điện thoại.." />
                        <input type="text" value={formorder.diachicustom} onChange={handleChange}  name="diachicustom" placeholder="Địa chỉ" />
                        <select id="country" name="country" onChange={changearea}>
                        <option value="---">---</option>
                            <option value="TPHCM">TPHCM</option>
                            <option value="Hà Nội">Hà Nội</option>
                            <option value="Cà Mau">Cà Mau</option>
                        </select>
                        <textarea value={formorder.notecustom} onChange={handleChange} name="notecustom" placeholder="Write something.." style={{ height: "200px" }}></textarea>
                    </form>
                </div>
            </div>
            <div className="col-md-4 transport">
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
            <div className="col-md-4 pay-money">
                <p className="pay-money-title">Đơn hàng {tongsoluong} sản phẩm</p>
                <table className="table">
                    <tbody className="table-group-divider">
                    {listcart.map(item =>
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td><img src={item.image} style={{ width: 50 }} /></td>
                            <td>{item.soluong}</td>
                            <td>{item.price * item.soluong}</td>
                        </tr>
                    )}
                </tbody>
                </table>
                <div className="discount-code">
                    <form className="row discount-code-form">
                        <input  type="email" className="form-control col-md-6" placeholder="Nhập Mã Giảm Giá" />
                        <button type="submit" className="btn btn-primary col-md-3">Submit</button>
                    </form>
                </div>
                <div className="add-transport row">
                    <p className="col-md-6">Tạm Tính</p>
                    <p className="col-md-6">{tongtien}</p>
                    <p className="col-md-6">Phí vận chuyển</p>
                    <p className="col-md-6">{cod}</p>
                </div>
                <div className="sum-pay row">
                    <p className="col-md-6">Tổng cộng</p>
                    <p className="col-md-6">{tongtien + cod}</p>
                    <p className="col-md-6"><button className="btn-comback-cart"  ><NavLink className='nav-link' to="/app/giohang">Giỏ Hàng</NavLink></button></p>
                    <p className="col-md-6"><button className="btn-pay-ok" onClick={finalpay}>Thanh Toán</button></p>
                </div>

            </div>
        </div>

    </>)
}
export default ThanhToan