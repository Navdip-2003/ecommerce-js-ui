import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import product1 from '../../assets/images/product1.jpg';
import product2 from '../../assets/images/product2.jpg';
import product3 from '../../assets/images/product3.jpg';

import delivery1 from '../../assets/images/about-us-delivery-1.png';
import delivery2 from '../../assets/images/about-us-delivery-2.png';
import delivery3 from '../../assets/images/about-us-delivery-3.png';

import sizeGuideImage from '../../assets/images/Size_Chart.jpg';

const productData = [
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

function ProductDetails() {
  const { id } = useParams();
  const product = productData.find((product) => product.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="p-6 max-w- mx-auto">
      <div className="flex flex-col md:flex-row">
        <img src={product.imageUrl} alt={product.name} className="ml-12 mr-12 mb-4 rounded-lg" style={{ width: '600px', height: '700px', objectFit: 'cover' }} />
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>

          <p className="text-lg mb-2">Price: <span className="line-through text-gray-500">₹{product.actualPrice}</span> ₹{product.discountPrice}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2">Add to Cart</button>
          <h3 className="font-semibold text-lg mt-4">Available Colors:</h3>
          <div className="flex space-x-2 mb-4">
            {product.colors.map((color, index) => (
              <span
                key={index}
                className="w-6 h-6 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
            ))}
          </div>
          <h3 className="font-semibold text-lg">Size Options:</h3>
          <div className="grid grid-cols-3 gap-4 mb-4">
            {product.size.map((size, index) => (
              <div
                key={index}
                onClick={() => handleSizeChange(size)}
                className={`cursor-pointer border-2 rounded-lg p-2 flex justify-center items-center text-xl
                  ${selectedSize === size ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} 
                  transition duration-200 ease-in-out`}
              >
                <input
                  type="radio"
                  name="size"
                  value={size}
                  checked={selectedSize === size}
                  onChange={() => handleSizeChange(size)}
                  className="hidden"
                />
                {size}
              </div>
            ))}
          </div>
          <button onClick={togglePopup} className="bg-gray-300 text-black py-2 px-4 rounded">
            Size Guide
          </button>
        </div>
      </div>
      <h2 className="ml-12 font-semibold text-lg mt-6">Product Description:</h2>
      <p className=" ml-12 mr-12 text-gray-600">{product.description}</p>

      <hr style={{ marginTop: '30px' }} />
      <div style={{ textAlign: 'center', padding: '30px' }}>
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

      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={togglePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={togglePopup}
            >
              ✖
            </button>
            <img
              src={sizeGuideImage}
              alt="Size Guide"
              className="w-full h-auto"
              style={{ maxWidth: '400px' }}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;