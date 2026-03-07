

import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Categoryslider() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    rtl: true
  };

  const getcategoryslider = () => {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  const { isError, isLoading, data } = useQuery('Categoryslider', getcategoryslider);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading categories.</div>;
  }

  return <>
    <div className='py-4'>
    <Slider {...settings}>
      {data?.data.data?.map((category) => (
        <img key={category._id} src={category.image} alt={category.name || ""} className='w-100' height={250}  />
      ))}
    </Slider>
    </div>
    </>
}
