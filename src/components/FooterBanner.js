import React from 'react'
import ImageQueenstown from '../assets/images/queenstown.jpg'
import ButtonPrimary from './ButtonPrimary/ButtonPrimary'

function FooterBanner() {
  return (
    <section className='h-[400px] relative'>
        <div className='h-full w-full absolute bg-primary opacity-80'> </div>
        <img className='w-full h-full object-cover' src={ImageQueenstown}/>
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-start p-5 md:px-10 lg:px-20 flex-col lg:flex-row lg:justify-between lg:items-center space-y-5'>
            <p className='text-light text-md md:text-xl lg:text-2xl font-primary font-bold'>Get in touch for a free consultation on how we can
            <br className='hidden md:block'/> <span className='italic opacity-80'> Preserve Your Masonary Investments! </span></p>
            <ButtonPrimary text='Call Us Now' toWhat='arrange a free consultation'/>
        </div>
    </section>
  )
}

export default FooterBanner