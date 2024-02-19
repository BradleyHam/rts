import React from 'react'
import productImage from '@/assets/images/productImages/productOne.jpg'

function ProductCard() {
  return (
    <div className='product-card'>
          <img className='product-image' src={productImage} alt="product" />
    </div>
  )
}

export default ProductCard;