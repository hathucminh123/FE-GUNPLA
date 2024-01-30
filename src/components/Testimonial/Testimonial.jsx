import React from "react";
import Slider from "react-slick";

import "../Testimonial/testimonial.css";

import ava01 from "../../assets/images/minhwap.jpg";
import ava02 from "../../assets/images/minhwap.jpg";
import ava03 from "../../assets/images/minhwap.jpg";
import ava04 from "../../assets/images/minhwap.jpg";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 3000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} >
    
      <div className="testimonial py-4 px-3" style={{paddingTop:'4px',paddingBottom:'4px',paddingLeft:'3px',paddingRight:'3px'}}>
        <p className="section__description">
        Tôi hoàn toàn hài lòng với sản phẩm Gundam mà tôi đã mua. Chất lượng chi tiết của mô hình là đỉnh cao, từ các chi tiết nhỏ nhất cho đến màu sắc và hoàn thiện.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4" style={{marginTop:'3rem',display:'flex',alignItems:'center',gap:'4rem'}}>
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" style={{width:'25%',height:'25%',borderRadius:'50%'}} />

          <div>
            <h6 className="mb-0 mt-3"style={{marginBottom:'0',marginTop:'3rem',fontSize:'2.0rem'}}>Hà Thúc Minh</h6>
            <p className="section__description">Khách hàng</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3" style={{paddingTop:'4px',paddingBottom:'4px',paddingLeft:'3px',paddingRight:'3px'}}>
        <p className="section__description">
        Sản phẩm đến nhanh chóng và hoàn toàn như mô tả. Rất hài lòng với chất lượng và dịch vụ của cửa hàng. 5 sao! Đó là một bức tượng nghệ thuật thực sự!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4" style={{marginTop:'3rem',display:'flex',alignItems:'center',gap:'4rem'}}>
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" style={{width:'25%',height:'25%',borderRadius:'50%'}} />

          <div>
            <h6 className="mb-0 mt-3" style={{marginBottom:'0',marginTop:'3rem',fontSize:'2.0rem'}}>Minh trí</h6>
            <p className="section__description">Khách hàng</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3"  style={{paddingTop:'4px',paddingBottom:'4px',paddingLeft:'3px',paddingRight:'3px'}}>
        <p className="section__description">
        Gundam này là một phần không thể thiếu trong bộ sưu tập của tôi. Chất liệu và màu sắc tuyệt vời. Được đóng gói cẩn thận, không có trầy xước!
        </p>

        <div className="mt-3 d-flex align-items-center gap-4" style={{marginTop:'3rem',display:'flex',alignItems:'center',gap:'4rem'}}>
          <img src={ava03} alt="" className="w-25 h-25 rounded-2"  style={{width:'25%',height:'25%',borderRadius:'50%'}}/>

          <div>
            <h6 className="mb-0 mt-3" style={{marginBottom:'0',marginTop:'3rem',fontSize:'2.0rem'}}>Minh Huy</h6>
            <p className="section__description">Khách hàng</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3" style={{paddingTop:'4px',paddingBottom:'4px',paddingLeft:'3px',paddingRight:'3px'}}>
        <p className="section__description">
        Gundam này là một phần không thể thiếu trong bộ sưu tập của tôi. Chất liệu và màu sắc tuyệt vời. Được đóng gói cẩn thận, không có trầy xước!
        </p>
 
        <div className="mt-3 d-flex align-items-center gap-4" style={{marginTop:'3rem',display:'flex',alignItems:'center',gap:'4rem'}}>
          <img src={ava04} alt="" className="w-25 h-25 rounded-2" style={{width:'25%',height:'25%',borderRadius:'50%'}} />

          <div>
            <h6 className="mb-0 mt-3" style={{marginBottom:'0',marginTop:'3rem',fontSize:'2.0rem'}}>Tâm</h6>
            <p className="section__description">Khách hàng</p>
          </div>
        </div>
      </div>
    
    </Slider>
  );
};

export default Testimonial;
