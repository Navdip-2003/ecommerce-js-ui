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
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (loading) return <div className="flex justify-center items-center h-[90vh]">Loading...</div>;
  if (error) return <div className="text-red-500 text-center">Error: {error.message}</div>;

  return (
    <div className="slider-container relative w-7/10 mx-auto overflow-hidden">
      <Slider {...settings}>
        {images.map((item) => (
          <div key={item.id} className="relative w-full h-[70vh] overflow-hidden">
            <img
              src={item.imageUrl}
              alt={item.mainText || `slide-${item.id}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div
              className={`absolute inset-0 flex items-center bg-opacity-50 ${
                item.position === 'start' ? 'justify-start' : item.position === 'center' ? 'justify-center' : 'justify-end'
              }`}
            >
              <div className="w-1/2 p-5">
                <h1 className="text-3xl md:text-5xl font-bold text-black">{item.mainText}</h1>
                <h2 className="text-lg md:text-2xl text-black">{item.subText}</h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <button className="mt-4 px-5 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

function NextArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-5 transform -translate-y-1/2 text-2xl text-white cursor-pointer bg-gray-700 bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full z-10"
    >
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl text-white cursor-pointer bg-gray-700 bg-opacity-20 hover:bg-opacity-30 p-2 rounded-full z-10"
    >
      <FontAwesomeIcon icon={faChevronLeft} />
    </div>
  );
}

export default ImageSlider;
