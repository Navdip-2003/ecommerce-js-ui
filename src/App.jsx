import { useState } from 'react'
import ImageSlider from './layouts/Slider'
import ProductList from './layouts/Product/ProductList';


function App() {
  var url =import.meta.env.APP_API_BASE_URL;

  return (
    <>
    <ImageSlider />
    <ProductList />
      <h1 className="text-3xl font-bold underline">
      Hello world! {`${url}`}
    </h1>
    </>
  )
}

export default App
