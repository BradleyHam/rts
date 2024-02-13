import React from 'react'
import './service.scss';
import image from '@/assets/images/acidWashing.jpg';

function Service({serviceName, description, images}) {


  return (
    <div className='service-component'>
     <div>
      <h1>
        {serviceName}
      </h1>
      <p>
        {description}
      </p>
      </div>
      <div className='service-images'>
      {
          images.map((image, index) => <img src={image} key={index} />)
      }
      </div>
    </div>
  )
}

export default Service