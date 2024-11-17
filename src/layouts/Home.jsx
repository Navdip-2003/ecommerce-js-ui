import { useState } from 'react'
import ProductList from './Product/ProductList';
import Line from './line';
import ImageSlider from './Slider';


function Home() {
  var url =import.meta.env.APP_API_BASE_URL;

  return (
    <>
      <ImageSlider />
      <Line />
      <ProductList />
      <Line />
      <ProductList />
    </>
  )
}

export default Home
