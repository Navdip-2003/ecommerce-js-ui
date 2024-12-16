import { useState } from 'react'
import ProductList from './Product/ProductList';
import Line from './line';
import ImageSlider from './Slider';
import Slider from "react-slick";

import delivery1 from '../assets/images/about-us-delivery-1.png';
import delivery2 from '../assets/images/about-us-delivery-2.png';
import delivery3 from '../assets/images/about-us-delivery-3.png';

function Home() {
  var url =import.meta.env.APP_API_BASE_URL;

    const customerReviews = [
      {
        image: delivery1,
        text: "Reliable, Fast, and Easy Delivery Solutions!",
        name: "Fast Delivery"
      },
      {
        image: delivery2,
        text: "Quick, Reliable, and Catchy Deliveries with Cash On Delivery!",
        name: "Cash On Delivery"
      },
      {
        image: delivery3,
        text: "Easy Return Policy for our Most Valuable Customers!",
        name: "Easy Return"
      },
    ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <>
      <ImageSlider />
      <Line />
      <ProductList />
      <Line />
      <div style={{ padding: '50px 0', backgroundColor: '#ffffff' }}>
        <Slider {...settings}  style={{ width: '1500px', justifySelf: 'center' }}>
          {customerReviews.map((review, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <img src={review.image} style={{ marginBottom: '20px', width: '150px', height: '100px', justifySelf: 'center' }} />
                <p style={{ fontSize: '18px', fontStyle: 'italic' }}>{review.text}</p>
                <p style={{ fontWeight: 'bold' }}>{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </>
  )
}

export default Home
