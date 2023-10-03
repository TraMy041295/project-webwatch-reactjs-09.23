import React from "react";
import Slider from "react-slick";
import Tooltip from '@mui/material/Tooltip';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e1e1e1" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#e1e1e1" }}
      onClick={onClick}
    />
  );
}


function SliderComponent(props) {
  const { watchList ,getItemCart } = props
  const navigate = useNavigate()
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  var listSpecialProduct = watchList.filter(item => (parseInt(item.price)) > 8000000)
  // ----------------------xem nhanh
  function seeQuickOnApp(id){
    navigate(`/seequickonapp/${id}`)

}
// ---------------- thêm vào giỏ hàng
function addCart(item) {
  navigate("/giohang")
  getItemCart(item)
}

  return (<>

    <Slider {...settings}>
      {listSpecialProduct.map(item =>
        <div className="slider-item row">
          <div className="slider-item-img-change">
            <p className="img-replace1"><img src={item.image} /></p>

          </div>
          <div className="slider-item-information row">
            <div className="row img-mini">
              <p className="col-md-2 img-mini1"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/7.jpg?v=1502423293320" /></p>
              <p className="col-md-2 img-mini2"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/6-574444e4-7a2d-4849-9dca-76ce01c24abd-9b0b1bb6-48a0-4b2a-8500-eccee4c446a1.jpg?v=1502422596970" /></p>
              <p className="col-md-2 img-mini3"><img src="https://bizweb.dktcdn.net/thumb/large/100/244/305/products/5-1da46838-470c-4fe1-9ba5-618c765d8789.jpg?v=1502422386343" /></p>
            </div>
            <p>{item.name}</p>
            <p>{item.price}</p>
            <button className="slider-add-cart" onClick={() => addCart(item)}>Thêm vào giỏ hàng</button>


          </div>
          <Tooltip title="Xem nhanh" placement="top" arrow>
            <button className="slider-button-seequick" type="button" onClick={()=>seeQuickOnApp(item.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search-heart" viewBox="0 0 16 16" >
                <path d="M6.5 4.482c1.664-1.673 5.825 1.254 0 5.018-5.825-3.764-1.664-6.69 0-5.018Z" />
                <path d="M13 6.5a6.471 6.471 0 0 1-1.258 3.844c.04.03.078.062.115.098l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1.007 1.007 0 0 1-.1-.115h.002A6.5 6.5 0 1 1 13 6.5ZM6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
              </svg></button>
          </Tooltip>
        </div>
      )}
    </Slider>
  </>)
}

export default SliderComponent