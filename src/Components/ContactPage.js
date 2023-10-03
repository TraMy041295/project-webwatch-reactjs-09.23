import '../Css/contactpage.css'
import {Link} from "react-router-dom"


function ContactPage() {



    return (<>
     
        <div className="contact-title row">
                <p className="col-md-6 contact-item">LIÊN HỆ /</p>
                <p className="col-md-6 contact-homepage"><Link class="nav-link active" to="/trangchu">Trang chủ</Link></p>
        </div>
        <div className='contact-map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250743.53678991133!2d108.00914591071172!3d10.897653061920964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3176830f876e16e5%3A0x2a82c373d3a16cc8!2zVHAuIFBoYW4gVGhp4bq_dCwgQsOsbmggVGh14bqtbiwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1692980686165!5m2!1svi!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='contact-info row'>
            <div className='form col-md-6'>
                <form>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder='Tên :*' />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder='Email:*' />
                    </div>
                    <div class="mb-3">
                        <input type="text" class="form-control" placeholder='Điện Thoại:*' />
                    </div>
                    <div class="mb-3">
                        <textarea placeholder='Nội Dung:*' />
                    </div>

                    <button type="submit" class="btn btn-primary">Gửi liên hệ</button>
                </form>

            </div>
            <div className='address col-md-6'>
                <p className='address-content'>Movado là sự lựa chọn hoàn hảo cho các website đồng hồ, mỹ phẩm... với phong cách thiết kế tinh tế và lôi cuốn.</p>
                <div>
                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                    </span>Tầng 4 - Tòa nhà Hanoi Group - 442  Đội Cấn - Ba Đình - Hà Nội
                    </p>

                    <p><span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                        </svg></span>(84-4) 66558868
                    </p>
                    <p><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg></span>support@bizweb.vn</p>
                </div>
            </div>

        </div>


    </>)
}

export default ContactPage