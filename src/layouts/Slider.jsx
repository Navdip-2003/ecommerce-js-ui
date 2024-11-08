import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useFetch from '../hooks/useFetch';

function ImageSlider() {
  const { data, loading, error } = useFetch('http://localhost:8080/banner/active');
  const images = data?.data || [];

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
    <div className="w-full mx-auto overflow-hidden">
      <Slider {...settings}>
        {/* Slider Item 1 */}
        <div className="relative">
          <img
            src="\src\assets\images\home-banner1.jpg"
            alt="Fashion & Show"
            className="w-full h-[650px]"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center bg-azure rounded-full border-4 border-orange-500 p-4">
            <h1 className="text-4xl font-bold text-orange-500">Womens Fashion</h1>
            <p className="text-lg text-black">A World Fashion and Trendy Fashion Clothes</p>
            <button className="bg-orange-500 text-black py-2 px-4 border-2 transition duration-500 ease-in-out rounded-full hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
        </div>

        {/* Slider Item 2 */}
        <div className="relative">
          <img
            src="\src\assets\images\home-banner2.jpg"
            alt="Fashion & Show"
            className="w-full h-[650px]"
          />
          <div className="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-azure rounded-full border-4 border-orange-500 p-4">
            <h1 className="text-4xl font-bold text-orange-500">Mens Fashion</h1>
            <p className="text-lg text-black">A World Fashion and Trendy Fashion Clothes</p>
            <button className="bg-orange-500 text-black py-2 px-4 border-2 transition duration-500 ease-in-out rounded-full hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
        </div>

        {/* Slider Item 3 */}
        <div className="relative">
          <img
            src="\src\assets\images\home-banner3.jpg"
            alt="Fashion & Show"
            className="w-full h-[650px]"
          />
          <div className="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 text-center bg-azure rounded-full border-4 border-orange-500 p-4">
            <h1 className="text-4xl font-bold text-orange-500">Kids Fashion</h1>
            <p className="text-lg text-black">A World Fashion and Trendy Fashion Clothes</p>
            <button className="bg-orange-500 text-black py-2 px-4 border-2 transition duration-500 ease-in-out rounded-full hover:bg-white hover:text-black">
              Shop Now
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
