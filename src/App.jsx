import { useState } from 'react'
import ImageSlider from './layouts/Slider'
import ProductList from './layouts/Product/ProductList';
import Line from './layouts/line';


function App() {
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

export default App
