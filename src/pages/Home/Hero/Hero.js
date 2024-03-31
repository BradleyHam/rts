import React from 'react';
import './hero.scss';
import ButtonPrimary from '../../../components/ButtonPrimary/ButtonPrimary'

const HeroSection = () => {
  return (
    <section className="hero-section relative">
       <div className='hero-content'>
          <h1>Seal the Deal with Superior
          Concrete Protection in Queenstown</h1>
          <p className='pb-5'>Your property deserves the best defense against the elements. Contact us today for a consultation and ensure lasting resilience for your concrete surfaces.</p>
          {/* <ButtonSecondary text='call for a free consultation'/>   */}
          <ButtonPrimary text='book a consultation' toWhat='arrange a free consultation'/>  
        </div>
    </section>
  );
}

export default HeroSection;