import React from 'react'
import ImageQueenstown from '../assets/images/queenstown.jpg'
import ButtonPrimary from './ButtonPrimary/ButtonPrimary'

function FooterBanner() {
  return (
    <section className='h-[400px] relative z-1'>
        <div className='h-full w-full absolute bg-primary opacity-80'> </div>
        <img className='w-full h-full object-cover' src={ImageQueenstown}/>
        <div className='absolute top-0 left-0 w-full h-full flex items-center p-20 justify-between'>
            <p className='text-light text-[24px] font-primary font-bold'>Get in touch for a free consultation on how we can
            <br /> <span className='italic opacity-80'> Preserve Your Masonary Investments! </span></p>
            <ButtonPrimary text='Call Us Now'/>
        </div>
    </section>
  )
}

export default FooterBanner