import "../css/footer.css"



function Footer() {
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

    return (<>
        <div className="email">
            <h6 className="email-title">GỬI MAIL</h6>
            <div className="input-group email-form row">
                <input type="text" className="form-control email-form-input col-md-8 col-8" placeholder="Gửi email" />
                <button className="btn btn-outline-secondary email-form-button col-md-4 col-4" type="button" id="button-addon2">Gửi ngay</button>
            </div>
        </div>
        <div className="footer row">
            <div className="footer1 col-md-3 col-12 col-sm-12 ">
                <a><img src="//bizweb.dktcdn.net/100/244/305/themes/895013/assets/logo-footer.png?1676340930397" /></a>
                <p>Showroom</p>
                <span>Tầng 6 - Tòa nhà Ladeco - 266 Đội Cấn, Hà Nội</span>
                <p>Hỗ trợ & Tư vấn</p>
                <span>19006750</span>
                <p>Email</p>
                <span>support@sapo.vn</span>
            </div>
            <div className="footer2 col-md-3 col-12 col-sm-12">
                <h4>BLOG</h4>
                <div className="row">
                    <p className="col-md-4 col-4 col-sm-4"><a><img src="//bizweb.dktcdn.net/thumb/small/100/244/305/articles/shutterstock-372398767.jpg?v=1502434798197" /></a></p>
                    <p className="col-md-8 col-8 col-sm-8"><a href="#">Từ điển kiến thức đồng hồ</a></p>
                </div>
                <div className="row">
                    <p className="col-md-4 col-4 col-sm-4"><a><img src="//bizweb.dktcdn.net/thumb/small/100/244/305/articles/shutterstock-404657758-ce0bf89f-2282-409b-8650-8212e967e7a6.jpg?v=1502434711520" /></a></p>
                    <p className="col-md-8 col-8 col-sm-8"><a href="#">Đồng hồ mới mua không chạy?</a></p>
                </div>
                <div className="row">
                    <p className="col-md-4 col-4 col-sm-4"><a><img src="//bizweb.dktcdn.net/thumb/small/100/244/305/articles/shutterstock-452064502.jpg?v=1502434322947" /></a></p>
                    <p className="col-md-8 col-8 col-sm-8"><a href="#">3 Dấu hiệu đồng hồ hết pin</a></p>
                </div>

            </div>
            <div className="footer3 col-md-3 col-12 col-sm-12" >
                <div className="tags">
                    <h4>TAGS</h4>
                    <div className="row">
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Apple Watch</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Biz Web</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Biz Web</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">CITIZEN</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Đồng hồ</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Men</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Motorola</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Movado</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Omega</a></p>
                        <p className="col-md-4 col-3 col-sm-2"><a href="#">Tissot</a></p>
                    </div>
                </div>
                <div className="theodoi">
                    <h4>THEO DÕI</h4>
                    <div className="theodoi-icon row">
                        <p className="col-md-2"><i class="fa-brands fa-twitter"></i></p>
                        <p className="col-md-2"><i class="fa-brands fa-facebook-f"></i></p>
                        <p className="col-md-2"><i class="fa-brands fa-google-plus-g"></i></p>
                        <p className="col-md-2"><i class="fa-brands fa-instagram"></i></p>
                        <p className="col-md-2"><i class="fa-brands fa-square-youtube"></i></p>
                    </div>
                </div>
            </div>
            <div className="footer4 col-md-3 col-12 col-sm-12">
                <h4>TIN MỚI</h4>
                <p><a href="#">Từ điển kiến thức đồng hồ</a></p>
                <p><a href="#">Đồng hồ mới mua không chạy?</a></p>
                <p><a href="#">3 Dấu hiệu đồng hồ hết pin</a></p>
            </div>
        </div>
        <div>
        <button onClick={topFunction} id="myBtn" title="Go to top">Top</button>
        </div>
    </>)
}

export default Footer