import React from 'react';
import './services.scss'

import acidWash from '../../../assets/images/acidWashing.jpg'
import masonrySealing from '../../../assets/images/masonrySealing.jpg'
import waterblasting from '../../../assets/images/waterblasting.jpg'
import efflorescenceRemoval from '../../../assets/images/efflorescenceRemoval.jpg'
import industrialCoatings from '../../../assets/images/industrialCoatings.jpg'
import waterproofCoatings from '../../../assets/images/waterproofCoatings.jpg'

import ServiceCard from '@/components/ServiceCard/ServiceCard';

function Services() {
  return (
    <section className='services'>
        <h2 className='h2-small'>Our Services</h2>
        <h2 className='h2-large'>See how we can preserve your concrete</h2>
        <div className='serviceGrid'>
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
       
        
        </div>
    </section>
  )
}

export default Services