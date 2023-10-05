import "../Css/news.css"
import {Link} from "react-router-dom"


function NewsPage() {





    return (<>
        <div className="tintuc-title row">
                <p className="col-md-6 news-item ">TIN TỨC /</p>
                <p className="col-md-6 news-homepage"><Link class="nav-link active" to="/trangchu">Trang chủ</Link></p>
        </div>
        <div className="row tintuc">
            <div className="col-md-4 col-12">
                <a href="#"><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-372398767.jpg?v=1502434798197" /></a>
                <a href="#"><h4 className="tintuc-content">Từ điển kiến thức đồng hồ</h4></a>
                <span className="tintuc-content time"><i class="fa-regular fa-clock"></i>11/8/2017</span>
                <span className="tintuc-content comment"><i class="fa-solid fa-comment"></i>1 bình luận</span>
                <p className="tintuc-content mt-3">Bạn muốn trang bị kiến thức đồng hồ để sử dụng đúng hoặc hiểu biết thêm về thế giới máy đo thời gian? Bạn muốn đọc những bài viết về đồng hồ tiếng Anh nhưng...</p>
                <div className="row tintuc-content-icon" >
                    <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                    <p className="col-md-8 tintuc-content">chia sẻ :
                        <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>

                    </p>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <a href="#"><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-404657758-ce0bf89f-2282-409b-8650-8212e967e7a6.jpg?v=1502434711520" /></a>
                <a href="#"><h4 className="tintuc-content">Đồng hồ mới mua không chạy?</h4></a>
                <span className="tintuc-content time"><i class="fa-regular fa-clock"></i>11/8/2017</span>
                <span className="tintuc-content comment"><i class="fa-solid fa-comment"></i>0 bình luận</span>
                <p className="tintuc-content mt-3">Bạn đang tức điên người vì đồng hồ mới mua không chạy? Liệu đó có phải là mình đã mua phải đồ giả kém chất lượng? Ngay sau đây chính là các nguyên nhân chiếc...</p>
                <div className="row tintuc-content-icon" >
                    <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                    <p className="col-md-8 tintuc-content">chia sẻ :
                        <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>

                    </p>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <a href="#"><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-452064502.jpg?v=1502434322947" /></a>
                <a href="#"><h4 className="tintuc-content">Từ điển kiến thức đồng hồ</h4></a>
                <span className="tintuc-content time"><i class="fa-regular fa-clock"></i>11/8/2017</span>
                <span className="tintuc-content comment"><i class="fa-solid fa-comment"></i>1 bình luận</span>
                <p className="tintuc-content mt-3">Khi sắp hết pin, rất nhiều đồng hồ có chức năng thông báo cho người dùng biết cần phải thay pin trong thời gian trước dừng hẳn mọi hoạt động sẽ bằng một dấu hiệu...</p>
                <div className="row tintuc-content-icon" >
                    <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                    <p className="col-md-8 tintuc-content">chia sẻ :
                        <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                        <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>
                    </p>
                </div>
            </div>

        </div>
        <div className="row tintuc-total">
            <div className="tintuc-left col-md-3">
                <div className="danhmuc">
                    <h3>DANH MỤC</h3>
                    <ul class="nav flex-column">
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link active" to="/trangchu">Trang chủ</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/men">Đồng hồ nam</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/women">Đồng hồ nữ</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/tintuc">Tin tức</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/daily">Đại Lý</Link>
                    </li>
                    <li class="nav-item danhmuc-item">
                        <Link class="nav-link" to="/lienhe">Liên Hệ</Link>
                    </li>
                </ul>
                </div>
                <div className="tintuc-noibat">
                    <h5>Tin Tức Nổi Bật</h5>
                    <div className="row">
                        <p className="col-md-4 col-4"><img src="//bizweb.dktcdn.net/100/244/305/themes/895013/assets/ajaxloader.gif?1676340930397" /></p>
                        <p className="col-md-8 col-8">
                            <a href="#">Từ điển kiến thức đồng hồ</a>
                            <p><i class="fa-regular fa-clock"></i> 11/08/2017</p>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-md-4 col-4"><img src="//bizweb.dktcdn.net/100/244/305/themes/895013/assets/ajaxloader.gif?1676340930397" /></p>
                        <p className="col-md-8 col-8">
                            <a href="#">Đồng hồ mới mua không chạy?</a>
                            <p><i class="fa-regular fa-clock"></i> 11/08/2017</p>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-md-4 col-4"><img src="//bizweb.dktcdn.net/100/244/305/themes/895013/assets/ajaxloader.gif?1676340930397" /></p>
                        <p className="col-md-8 col-8">
                            <a href="#">3 Dấu hiệu đồng hồ hết pin</a>
                            <p><i class="fa-regular fa-clock"></i> 11/08/2017</p>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-md-4 col-4"><img src="//bizweb.dktcdn.net/100/244/305/themes/895013/assets/ajaxloader.gif?1676340930397" /></p>
                        <p className="col-md-8 col-8">
                            <a href="#">Đồng hồ SEIKO cổ</a>
                            <p><i class="fa-regular fa-clock"></i> 11/08/2017</p>
                        </p>
                    </div>
                    <div className="row">
                        <p className="col-md-4 col-4"><img src="//bizweb.dktcdn.net/100/244/305/themes/895013/assets/ajaxloader.gif?1676340930397" /></p>
                        <p className="col-md-8 col-8">
                            <a href="#">Lịch sử đồng hồ TUDOR</a>
                            <p><i class="fa-regular fa-clock"></i> 11/08/2017</p>
                        </p>
                    </div>

                </div>
            </div>
            <div className="tintuc-right col-md-9">
                <div className="row tintuc-right-item ">
                    <p className="col-md-6 tintuc-right-image"><a><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-497575942.jpg?v=1502434097500" /></a></p>
                    <div className="col-md-6 tintuc-right-content">
                        <h5><a href="#">Đồng hồ SEIKO cổ</a></h5>
                        <span><i class="fa-regular fa-clock"></i>11/8/2017</span>
                        <span><i class="fa-solid fa-comment"></i>0 bình luận</span>
                        <p>Với những người yêu thích và sưu tầm đồng hồ cổ, thì họ không quá xa lạ với những dòng đồng hồ Seiko cổ, đặc biệt là Seiko 5 cổ. Bởi vì, đồng hồ Seiko...</p>
                        <div className="row tintuc-content-icon" >
                            <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                            <p className="col-md-8 tintuc-content">chia sẻ :
                                <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="row tintuc-right-item">
                    <p className="col-md-6 tintuc-right-image"><a><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-469113338.jpg?v=1502434134407" /></a></p>
                    <div className="col-md-6 tintuc-right-content">
                        <h5><a href="#">Đồng hồ SEIKO cổ</a></h5>
                        <span><i class="fa-regular fa-clock"></i>11/8/2017</span>
                        <span><i class="fa-solid fa-comment"></i>0 bình luận</span>
                        <p>Với những người yêu thích và sưu tầm đồng hồ cổ, thì họ không quá xa lạ với những dòng đồng hồ Seiko cổ, đặc biệt là Seiko 5 cổ. Bởi vì, đồng hồ Seiko...</p>
                        <div className="row tintuc-content-icon" >
                            <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                            <p className="col-md-8 tintuc-content">chia sẻ :
                                <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="row tintuc-right-item">
                    <p className="col-md-6 tintuc-right-image"><a><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-449546110.jpg?v=1502427158767" /></a></p>
                    <div className="col-md-6 tintuc-right-content">
                        <h5><a href="#">Đồng hồ SEIKO cổ</a></h5>
                        <span><i class="fa-regular fa-clock"></i>11/8/2017</span>
                        <span><i class="fa-solid fa-comment"></i>0 bình luận</span>
                        <p>Với những người yêu thích và sưu tầm đồng hồ cổ, thì họ không quá xa lạ với những dòng đồng hồ Seiko cổ, đặc biệt là Seiko 5 cổ. Bởi vì, đồng hồ Seiko...</p>
                        <div className="row tintuc-content-icon" >
                            <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                            <p className="col-md-8 tintuc-content">chia sẻ :
                                <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>

                            </p>
                        </div>
                    </div>
                </div>
                <div className="row tintuc-right-item">
                    <p className="col-md-6 tintuc-right-image"><a><img src="//bizweb.dktcdn.net/thumb/large/100/244/305/articles/shutterstock-404657758.jpg?v=1502427057823" /></a></p>
                    <div className="col-md-6 tintuc-right-content">
                        <h5><a href="#">Đồng hồ SEIKO cổ</a></h5>
                        <span><i class="fa-regular fa-clock"></i>11/8/2017</span>
                        <span><i class="fa-solid fa-comment"></i>0 bình luận</span>
                        <p>Với những người yêu thích và sưu tầm đồng hồ cổ, thì họ không quá xa lạ với những dòng đồng hồ Seiko cổ, đặc biệt là Seiko 5 cổ. Bởi vì, đồng hồ Seiko...</p>
                        <div className="row tintuc-content-icon" >
                            <p className=" col-md-4 tintuc-content"><a href="#">Đọc thêm</a></p>
                            <p className="col-md-8 tintuc-content">chia sẻ :
                                <span className="share-icon"><i class="fa-brands fa-facebook-f"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-twitter"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-pinterest"></i></span>
                                <span className="share-icon"><i class="fa-brands fa-google-plus-g"></i></span>

                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
 
    </>)
}

export default NewsPage