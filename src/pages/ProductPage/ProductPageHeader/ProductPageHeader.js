import React from 'react'


import DuluxImage from '@/assets/images/Dulux_Australia_Logo.png'
import EquusImage from '@/assets/images/Equus_logo_web2.png'

function ProductPageHeader() {
  return (
    <div className='product-page-header px-5 md:px-10 pb-20 lg:flex lg:space-x-10 lg:px-20'>
        <div className='text-heading-group lg:pb-0'>
          <h2 className='h2-small'>Our Products</h2>
          <h1 className='border-bottom mt-5 pb-10 text-2xl xl:text-3xl'>Explore Our Range of
          <br></br>Masonry, Concrete & 
          Brickwork Solutions</h1>
          </div>
          <div className='lisenced-in'>
        <h2 className='h2-small lisenced-in-h2'>lisenced in: </h2>
          <div className='lisenced-in__image-group mt-5 flex flex-col space-y-6 items-start sm:flex-row sm:items-center sm:space-x-5 sm:space-y-0'>
              <img className='equus max-h-[80px]' src={EquusImage} />
              <img className='dulux max-h-[50px]' src={DuluxImage} />
          </div>
        </div>
    </div>
 
  )
}

export default ProductPageHeader