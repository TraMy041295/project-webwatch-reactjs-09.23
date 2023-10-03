import "../Css/agentsystem.css"
import {Link} from "react-router-dom"
import { useState , useEffect } from 'react';


function AgentSystemPage() {
    const [ map , setMap ] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.94638122772!2d105.79576391957492!3d21.02281475941761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1696051585061!5m2!1svi!2s")
    const [ listAddress , setListAddress ] = useState([{
        address:"Tầng 4 - Tòa nhà Hanoi Group - 442  Đội Cấn - Ba Đình - Hà Nội",
        phone:"(84-4) 66558868",
        email:"support@bizweb.vn"
    },{
    address:"Tầng 8 - Toà nhà Ladeco 266  Đội Cấn - Ba Đình - Hà Nội",
        phone:"01234 567 890",
        email:"support@bizweb.vn"
    }])


    function changeValueArea(e){
        if ( e.target.value == "Hà Nội"){
            setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.94638122772!2d105.79576391957492!3d21.02281475941761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1696051585061!5m2!1svi!2s")
            setListAddress ([{
                address:"Tầng 4 - Tòa nhà Hanoi Group - 442  Đội Cấn - Ba Đình - Hà Nội",
                phone:"(84-4) 66558868",
                email:"support@bizweb.vn"
            },{
            address:"Tầng 8 - Toà nhà Ladeco 266  Đội Cấn - Ba Đình - Hà Nội",
                phone:"01234 567 890",
                email:"support@bizweb.vn"
            }])
        }else if ( e.target.value == "Hải Phòng"){
            setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59658.01268655364!2d106.65754691852412!3d20.846812137511854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7af39e3f1ad3%3A0xa5ffc85ff87a07e8!2zSOG6o2kgUGjDsm5nLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1696051706913!5m2!1svi!2s" )
            setListAddress ([{
                address:"257 Đà Nẵng - Ngô Quyền - Hải Phòng, Việt Nam",
                phone:"0225 730 6880",
                email:"support@bizweb.vn"
            }])
        }else {
            setMap("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d501725.4184478732!2d106.36556632772526!3d10.755292861255853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1696051761301!5m2!1svi!2s")
            setListAddress ([{
                address:"Số 70 Lữ Gia - Phường 15 - Quận 11 - TP Hồ Chí Minh",
                phone:"(84-8) 7308 6880",
                email:"support@bizweb.vn"
            }])
        }
    }
console.log(listAddress)

    return (<>
        <div className="daily-item row">
                <p className="col-md-6 agent-item">ĐẠI LÝ /</p>
                <p className="col-md-6 agent-homepage"><Link class="nav-link active" to="/trangchu">Trang chủ</Link></p>
        </div>
        <div className="row daily-information">
            <div className="col-md-6">
                <p className="item-movado">
                    Movado là sự lựa chọn hoàn hảo cho các website đồng hồ, mỹ phẩm... với phong cách thiết kế tinh tế và lôi cuốn.
                </p>
                <h3><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                    Hệ thống đại lý
                </h3>
                <select onChange={changeValueArea}>
                    <option value="Hà Nội">Hà Nội</option>
                    <option value="Hải Phòng">Hải Phòng</option>
                    <option value="TPHCM">TPHCM</option>
                </select>
               
                    {listAddress.map(item =>
                     <div>
                     <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                         <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                     </svg>
                     </span>{item.address}
                     </p>
                     <p><span>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                             <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                             <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                         </svg></span>{item.phone}
                         </p>
                     <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                         <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                     </svg></span>{item.email}</p>
                 </div>)}
                    
            </div>
            <div className="col-md-6">
                <iframe src={map} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </>)
}

export default AgentSystemPage