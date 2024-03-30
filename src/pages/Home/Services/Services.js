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
        {/* <div className='serviceGrid'>
            <ServiceCard serviceTitle='acid washing'>
                    <img className='service-image' alt='concrete before and after efflorescence removed' src={acidWash} />
            </ServiceCard>
            <ServiceCard serviceTitle='waterproof coatings'>
                <img className='service-image single-image' alt='showing concrete before and after waterproof coating' src={waterproofCoatings} />
            </ServiceCard>
            <ServiceCard serviceTitle='masonry sealing'>
                <img className='service-image' alt='concrete before and after masonry sealing' src={masonrySealing} />
            </ServiceCard>
            <ServiceCard serviceTitle='waterblasting'>
                <img className='service-image' alt='showing concrete before and after being waterblasted' src={waterblasting} />
            </ServiceCard>
            <ServiceCard serviceTitle='industrial coatings'>
                <img className='service-image single-image right-positioned' alt='showing owners industrial coatings' src={industrialCoatings} />
            </ServiceCard>
            <ServiceCard serviceTitle='efflorescence removal'>
                <img className='service-image' alt='showing masonary before and after being efforescence removal' src={efflorescenceRemoval} />
            </ServiceCard>
      </div> */}
    </section>
  )
}

export default Services