import React from 'react';
import { Outlet } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


import service1 from '../assets/images/about-us-icon-1.png';
import service2 from '../assets/images/about-us-icon-2.png';
import service3 from '../assets/images/about-us-icon-3.png';
import service4 from '../assets/images/about-us-icon-4.png';
import service5 from '../assets/images/about-us-icon-5.png';
import service6 from '../assets/images/about-us-icon-6.png';

import delivery1 from '../assets/images/about-us-delivery-1.png';
import delivery2 from '../assets/images/about-us-delivery-2.png';
import delivery3 from '../assets/images/about-us-delivery-3.png';

import customer1 from '../assets/images/about-us-customer-1.jpg';
import customer2 from '../assets/images/about-us-customer-2.jpg';
import customer3 from '../assets/images/about-us-customer-3.jpg';

const AboutUs = () => {

  const aboutUsService = [
    {
      name: "Our Story",
      description: "Welcome to Shivay Cloths, where style meets passion! Our journey began with a mission to offer fashionable, high-quality clothing that suits every personality and lifestyle. What started as a small dream has now transformed into an inclusive and innovative fashion destination for trendsetters and classic style lovers alike.",
      image: service1
    },
    {
      name: "Quality & Craftsmanship",
      description: "Quality is the foundation of everything we do. Each piece is crafted using high-grade materials and ethical manufacturing processes to ensure durability, comfort, and style. We work closely with experienced artisans and trusted suppliers to bring our designs to life.",
      image: service2
    },
    {
      name: "Our Vision",
      description: "At Shivay Cloths, we envision a world where everyone can express themselves authentically through fashion. We believe that clothing is more than just fabric; it's an extension of who we are. Our vision is to inspire confidence and creativity through clothing that empowers individuals to show up as their best selves every day.",
      image: service3
    },
    {
      name: "Sustainability Matters",
      description: "We’re proud to embrace eco-conscious practices in every step of our production process. From selecting sustainable fabrics to minimizing waste, our commitment to the planet is as strong as our commitment to style. We continually seek ways to reduce our carbon footprint and make our operations more environmentally friendly.",
      image: service4
    },
    {
      name: "Customer-Centric Approach",
      description: "You, our customer, are at the heart of everything we do. We are dedicated to providing a seamless and enjoyable shopping experience, from our website design to our customer service. Our team is always here to help you with styling tips, size guidance, or any questions you may have.",
      image: service5
    },
    {
      name: "Join the Community",
      description: "We invite you to become a part of the Shivay Cloths community. Follow us on social media, share your style with us, and be the first to know about new collections, special promotions, and more! Together, let’s celebrate fashion, individuality, and a journey toward a more sustainable, stylish future. Thank you for choosing Shivay Cloths.",
      image: service6
    }
  ];

  const aboutUsDelivery = [
    {
      name: "Fast Delivery",
      image: delivery1
    },
    {
      name: "Cash On Delivery",
      image: delivery2
    },
    {
      name: "Easy Return",
      image: delivery3
    }
  ];
  
  const customerReviews = [
    {
      image: customer1,
      text: "Exceptional service with a dedication to satisfaction!",
      name: "~ Dhyey Gorasiya"
    },
    {
      image: customer2,
      text: "High-quality products and fast delivery – couldn’t ask for more!",
      name: "~ Deep Vadodariya"
    },
    {
      image: customer3,
      text: "They truly understand customer needs. Fantastic experience!",
      name: "~ Navdip Chothani"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: true,
    autoplaySpeed: 3000
  };
  
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', lineHeight: '1.6' }}>
      {/* Hero Section */}
      <div style={{ position: 'relative', textAlign: 'center', padding: '30px 30px', backgroundColor: '#f5ece7', margin: '10px 10px 0 10px' }}>
        <img src="\src\assets\images\about-us-banner.jpg" alt="Hero" style={{ width: '100%', height: 'auto' }} />
        <h1 style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffffff', fontSize: '100px', fontWeight: 'bold' }}>ELEGANCE</h1>
      </div>

      {/* Icon Section */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px 0', backgroundColor: '#f5ece7', margin: '0 10px 0 10px' }}>
        {['Womens', 'Mens', 'Kids', 'Traditional ', 'Western '].map((text, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold' }}>{text}</div>
            <p style={{ color: '#666' }}>{text} Products Available</p>
          </div>
        ))}
      </div>

      {/* Services Section */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '30px 0' }}>
        {aboutUsService.map((item, index) => (
          <div key={index} style={{ flex: '1 1 30%', margin: '10px', padding: '20px', backgroundColor: '#f5ece7', textAlign: 'center' }}>
            <img style={{ width: '150px', height: '150px', justifySelf: 'center'}} src={item.image} />
            <h1 style={{ fontSize: '25px' }}>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>


      {/* Featured Section */}
      <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px 0', backgroundColor: '#ffffff' }}>
        <img src="\src\assets\images\about-us-featured.png" alt="Featured" style={{ width: '600px', height: '500px', objectFit: 'cover' }} />
        <div className="border rounded-lg shadow-lg" style={{ maxWidth: '500px', padding: '100px 20px 0 20px' }}>
          <p>
            During these years, we have reached a leading position in the fashion market, allowing us to significantly expand our range of services and offerings. Our growth is fueled by a passion for quality, an eye for style, and a commitment to our customers' evolving needs. From exclusive collections to personalized styling services, we've expanded our capabilities to bring a truly exceptional shopping experience to our customers. We believe that fashion is more than just clothing – it's about delivering confidence and satisfaction through every piece.
          </p>
          <h2 style={{ justifySelf: 'right', margin: '10px 20px' }}> ~ Dhyey Gorasiya</h2>
        </div>
      </div>

      {/* Delivery Section */}
      <div style={{ textAlign: 'center', padding: '30px', backgroundColor: '#f5ece7' }}>
        <h2 style={{ fontSize: '25px' }}>Delivery by Courier</h2>
        <p style={{ maxWidth: '800px', margin: '0 auto' }}>Have your order delivered to your place with great ease. Our delivery team ensures a smooth experience.</p>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
          {aboutUsDelivery.map((item, index) => (
            <div key={index} style={{ margin: '10px', padding: '20px', backgroundColor: '#f5ece7' }}>
              <img key={index} src={item.image} style={{ width: '200px', height: '180px', margin: '0 80px' }} />
              <h1 style={{ fontSize: '25px', marginLeft: '30px' }}>{item.name}</h1>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div style={{ padding: '50px 0', backgroundColor: '#ffffff' }}>
        <Slider {...settings}  style={{ width: '1500px', justifySelf: 'center' }}>
          {customerReviews.map((review, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', maxWidth: '400px', margin: '0 auto' }}>
                <img src={review.image} style={{ borderRadius: '50%', marginBottom: '20px', width: '200px', height: '200px', justifySelf: 'center' }} />
                <p style={{ fontSize: '18px', fontStyle: 'italic' }}>{review.text}</p>
                <p style={{ fontWeight: 'bold' }}>{review.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default AboutUs;
