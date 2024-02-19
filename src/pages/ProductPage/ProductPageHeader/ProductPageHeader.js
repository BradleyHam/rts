import React from 'react'


import DuluxImage from '@/assets/images/Dulux_Australia_Logo.png'
import EquusImage from '@/assets/images/Equus_logo_web2.png'

function ProductPageHeader() {
  return (
    <div className='product-page-header'>
        <div className='text-heading-group'>
          <h2 className='h2-small'>Our Products</h2>
          <h1 className='border-bottom'>Explore Our Range of
          <br></br>Masonry, Concrete & 
          Brickwork Solutions</h1>
          </div>
          <div className='lisenced-in'>
        <h2 className='h2-small lisenced-in-h2'>lisenced in: </h2>
          <div className='lisenced-in__image-group'>
              <img className='dulux' src={DuluxImage} />
              <img className='equus' src={EquusImage} />
          </div>
        </div>
    </div>
 
  )
}

export default ProductPageHeader