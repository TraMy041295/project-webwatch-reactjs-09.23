import '../Css/homepage.css'
import SliderComponent from './SliderComponent'
import ShowImage from './ShowImage'
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';



function HomePage(props) {
  const { watchList ,getItemCart } = props
  const navigate = useNavigate()

// ----------item gỉam giá
  var topDiscountItem = watchList.filter(item=> (parseInt(item.price)) == 5000000)
// ----------------------xem nhanh
function seeQuickOnApp(id){
  navigate(`/seequickonapp/${id}`)

}

  return (<>
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/slider_1.jpg?1676340930397" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/slider_3.jpg?1676340930397" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/slider_2.jpg?1676340930397" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    {/* ------------support */}
    <div className="row support">
      <div className="col-md-3 support-item">
        <div>
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/policy1.png?1676340930397" />
        </div>
        <span>Vận chuyển toàn cầu</span>
        <p>Chúng tôi miễn phí vận chuyển với tất cả các đơn hàng trị giá trên 2.000.000 đ</p>
      </div>
      <div className="col-md-3 support-item">
        <div>
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/policy2.png?1676340930397" />
        </div>
        <span>HỖ TRỢ ONLINE 24/24</span>
        <p>Chúng tôi luôn luôn hỗ trợ khách hàng 24/24 tất cả các ngày trong tuần </p>
      </div>
      <div className="col-md-3 support-item">
        <div>
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/policy3.png?1676340930397" />
        </div>
        <span>MIỄN PHÍ ĐỔI TRẢ</span>
        <p>Miễn phí đổi trả trong vòng 15 ngày đầu tiên  áp dụng cho tất cả các loại mặt hàng</p>
      </div>
      <div className="col-md-3 support-item">
        <div>
          <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/policy4.png?1676340930397" />
        </div>
        <span>Quà tặng hấp dẫn</span>
        <p>Chương trình khuyến mại cực lớn và hấp dẫn vào mỗi chủ nhật hàng tuần</p>
      </div>
    </div>
    {/* -------------------Sản phẩm nổi bật */}
    <div className="Featured-products">
      <div>
        <h2>sản phẩm nổi bật</h2>
        <SliderComponent watchList={watchList} getItemCart={getItemCart}/>
      </div>
    </div>
    {/* -------------hình ảnh loai đồng hồ */}
    <div className='typeofwatch-image row'>
      <div className='col-md-4 typeofwatch-image-item'>
        <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/banner_1.jpg?1676340930397" />
      </div>
      <div className='col-md-4 typeofwatch-image-item'>
        <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/banner_2.jpg?1676340930397" />
      </div>
      <div className='col-md-4 typeofwatch-image-item'>
        <img src="https://bizweb.dktcdn.net/100/244/305/themes/895013/assets/banner_3.jpg?1676340930397" />
      </div>
    </div>
    {/* --------------Thương hiệu */}
    <div className='typeofbrand-image row'>
      <div className='col-md-2 typeofbrand-image-item'>
        <div>
          <a href='#'><img src='https://bizweb.dktcdn.net/thumb/medium/100/244/305/themes/895013/assets/brand1.jpg?1676340930397' /></a>
        </div>
      </div>
      <div className='col-md-2 typeofbrand-image-item'>
        <div>
          <a href='#'><img src='//bizweb.dktcdn.net/thumb/medium/100/244/305/themes/895013/assets/brand3.jpg?1676340930397' /></a>
        </div>
      </div>
      <div className='col-md-2 typeofbrand-image-item'>
        <div>
          <a href='#'><img src='//bizweb.dktcdn.net/thumb/medium/100/244/305/themes/895013/assets/brand3.jpg?1676340930397' /></a>
        </div>
      </div>
      <div className='col-md-2 typeofbrand-image-item'>
        <div>
          <a href='#'><img src='//bizweb.dktcdn.net/thumb/medium/100/244/305/themes/895013/assets/brand4.jpg?1676340930397' /></a>
        </div>
      </div>
      <div className='col-md-2 typeofbrand-image-item'>
        <div>
          <a href='#'><img src='//bizweb.dktcdn.net/thumb/medium/100/244/305/themes/895013/assets/brand5.jpg?1676340930397' /></a>
        </div>
      </div>
      <div className='col-md-2 typeofbrand-image-item'>
        <div>
          <a href='#'><img src='//bizweb.dktcdn.net/thumb/medium/100/244/305/themes/895013/assets/brand6.jpg?1676340930397' /></a>
        </div>
      </div>
    </div>
    {/* ----------- top discount */}
    <div className='row top-discount'>
      <div className='col-md-3 top-discount-item'>
        <h1><a href='#'>TOP GIẢM GIÁ</a></h1>
        <p>Là đại lý ủy quyền chính thức hợp pháp được cấp chứng nhận quốc tế Cam kết không bán hàng rởm hàng nhái kém chất lượng</p>
        <button className='top-discount-button'>XEM THÊM</button>
      </div>
      <div className='col-md-9 top-discount-item item-watch row'>
        <div className='row'>
          {topDiscountItem.map(item =>
          <div className='col-md-3 item-information'>
          <a href='#'><img src={item.image} /></a>
          <p><a href='#'>{item.name}</a></p>
          <p>{item.price}</p>
          <Tooltip title="Xem nhanh" placement="top" arrow>
          <button className='item-information-button' onClick={()=>seeQuickOnApp(item.id)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16">
            <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
            <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
          </svg></button>
          </Tooltip>
        </div>)}
        </div>
      </div>
    </div>
    {/* ----------- introduce */}
    <div className='introduce row'>
      <span className='col-md-1 left'>“</span>
      <p className='col-md-10'><i>Đồng hồ đeo tay là một trong những phát minh vĩ đại nhất trên thế giới. Trước đây đồng hồ đeo tay chủ yếu giúp
        mọi người xem thời gian. Tuy nhiên, trong vài thập kỷ trở lại đây đồng hồ đeo tay không còn là một công cụ đơn thuần để mọi người xem giờ nữa mà nó là phụ kiện thiết yếu dành cho cả nam và nữ...</i></p>
      <span className='col-md-1 right'>”</span>
    </div>
    {/* ------------- customer */}
    <div className='customer'>
      <div>
        <img src='//bizweb.dktcdn.net/100/244/305/themes/895013/assets/testimonial1.jpg?1676340930397' />
      </div>
      <p>Sebastian Lloyd - ca sĩ</p>
      <p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
        </svg>
      </p>
    </div>
    {/* ----------------Show image */}
    <div className='show-image'>
      <div>show hình ảnh</div>
      <button className='show-image-button'>Xem thêm hình ảnh</button>
    </div>
    {/* ----------------- image-item */}
    <ShowImage/>
  </>)
}

export default HomePage