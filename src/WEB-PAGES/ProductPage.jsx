import React, { useState } from 'react'
import ExploreCategories from '../EXPLORE-CATEGORIES/ExploreCategories'
import ProductsDisplay from '../PRODUCTS-DISPLAY/ProductsDisplay'

const ProductPage = () => {
  const[categories,setCategories]=useState("ALL")
  return (
    <>
    <div className='ProductPage'>
      <ExploreCategories  Categories={categories} setCategories={setCategories}/>
      <ProductsDisplay Categories={categories}/>
    </div>
    </>
  )
}

export default ProductPage
