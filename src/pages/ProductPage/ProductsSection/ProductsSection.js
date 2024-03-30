import React from 'react'
import ProductCard from '../ProductSection/ProductCard/ProductCard'
import productData from '../ProductData'

function ProductsSection() {
  const productsKeys = Object.keys(productData);

  return (
    <div className='grid grid-cols-4 px-20 gap-x-2.5 gap-y-2.5 py-24 bg-primary-light'>
      {productsKeys.map((product) => (
        <ProductCard key={product.name} text={true} product={productData[product]} />
      ))}
    </div>
  )
}

export default ProductsSection