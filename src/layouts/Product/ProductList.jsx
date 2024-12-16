// ProductList.jsx
import React, { useRef } from 'react';
import ProductCard from './ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';

function ProductList() {
  const scrollRef = useRef(null);

  // Dummy product data
  const products = [
{
    id: 1,
    name: 'Edna Dress',
    imageUrl: product1,
    discountPrice: 600,
    actualPrice: 500,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#FF0000', '#00FFFF', '#0000FF'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 2,
    name: 'Elastic Waist Dress',
    imageUrl: product2,
    discountPrice: 748,
    actualPrice: 948,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#000000', '#7F00FF', '#DAA520'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 3,
    name: '3/4 Sleeve Kimono Dress',
    imageUrl: product3,
    discountPrice: 550,
    actualPrice: 750,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#FF4500', '#FFD700', '#C0C0C0'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 4,
    name: 'Cape Dress',
    imageUrl: product1,
    discountPrice: 788,
    actualPrice: 900,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#191970', '#8B0000', '#006400'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 5,
    name: 'Edna Dress',
    imageUrl: product1,
    discountPrice: 600,
    actualPrice: 500,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#FF0000', '#00FFFF', '#0000FF'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 6,
    name: 'Elastic Waist Dress',
    imageUrl: product2,
    discountPrice: 748,
    actualPrice: 748,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#000000', '#7F00FF', '#DAA520'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 7,
    name: '3/4 Sleeve Kimono Dress',
    imageUrl: product3,
    discountPrice: 550,
    actualPrice: 550,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#FF4500', '#FFD700', '#C0C0C0'],
    size: ['xs','s','m','x','xl','xll']
  },
  {
    id: 8,
    name: 'Cape Dress',
    imageUrl: product1,
    discountPrice: 788,
    actualPrice: 900,
    description:
      'A beautiful 3/4 Sleeve Kimono Dress, perfect for any occasion. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.',
    colors: ['#191970', '#8B0000', '#006400'],
    size: ['xs','s','m','x','xl','xll']
  },
    // Add more products as needed
  ];

  // Function to scroll left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: 'smooth',
    });
  };

  // Function to scroll right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: 'smooth',
    });
  };

  return (
    <div className="p-8 relative">
      <h1 className="text-2xl font-bold text-center mb-4">Weekly Bestseller</h1>
      <p className="text-center text-gray-500 mb-8">Our most popular products based on sales</p>

      {/* Scrollable Product List with Arrow Buttons */}
      <div className="relative flex items-center">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 z-10 bg-white shadow-md rounded-full p-4 hover:bg-gray-200 transition transform -translate-x-4"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>

        {/* Product List */}
        <div
          ref={scrollRef}
          className="overflow-x-auto flex space-x-4 p-4 mx-8 scrollbar-hide"
        >
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 z-10 bg-white shadow-md rounded-full p-4 hover:bg-gray-200 transition transform translate-x-4"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default ProductList;
