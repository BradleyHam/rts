import React from 'react';
import './services.scss'
import Service from '@/pages/Service/Service'


function Services() {
  return (
    <section className='services'>
        <div className='heading-container'>
            <h2 className='h2-small'>Our Services in Action</h2>
            <h2 className='h2-large'>Discover How We Revitalize Queenstown Properties</h2>
        </div>
        <div className='service-components'>
            <Service serviceName='efflorescenceRemoval'/>
            <Service serviceName='acidWashing'/>
            <Service serviceName='waterBlasting'/>
            <Service serviceName='waterproofCoatings'/>
            <Service serviceName='masonrySealing'/>
            <Service serviceName='industrialCoatings'/>
        </div>
      
    </section>
  )
}

export default Services