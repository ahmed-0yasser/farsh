
import React from 'react';
import slider1 from '../../Assats/slider1.jpg.jpeg';
import slider2 from '../../Assats/slider2.jpg.jpg';
import slider3 from '../../Assats/slider3.jpg.jpg';
import mainslider1 from '../../Assats/mainslider1.jpg.webp';
import mainslider2 from '../../Assats/mainslider.2jpg.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MainSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container py-4">
      <div className="row gx-0">
        <div className="col-md-9">
          <Slider {...settings}>
            <div>
              <img className="w-100" height={400} style={{objectFit:'cover'}} src={mainslider1} alt="main slider 1" />
            </div>
            <div>
              <img className="w-100" height={400} style={{objectFit:'cover'}} src={mainslider2} alt="main slider 2" />
            </div>
            <div>
              <img className="w-100" height={400} style={{objectFit:'cover'}} src={slider3} alt="slider 3" />
            </div>
          </Slider>
        </div>
        <div className="col-md-3">
          <img className="w-100" height={200} style={{objectFit:'cover'}} src={slider1} alt="slider 1" />
          <img className="w-100" height={200} style={{objectFit:'cover'}} src={slider2} alt="slider 2" />
        </div>
      </div>
    </div>
  );
}

export default MainSlider;
