import React from 'react'
import './contactSection.scss';
import ContactPerson from './ContactPerson';
import ContactForm from '../../components/ContactForm/ContactForm';

function ContactSection() {
  return (
    <section id='contact' className='contact-section pt-20'>
        <div className='heading-container mb-10'>
              <h2 className='h2-small'>Get in Touch</h2>
              <h2 className='h2-large'>Connect With Our Masonry Experts</h2> 
            </div>
       <div className='contact-information'>
          
                <div className='contact-people flex flex-col gap-5 pb-5'>
                    <ContactPerson name='Callum Mckenna' email='callum@rtschemicals' number='027 507 0185'/>
                    <ContactPerson name='Liam Turner' email='info@rtschemicals.com' number='027 711 1711'/>
                    </div>   
                    <ContactForm />
       </div>
       <div className='map-view'>
        <iframe
          width="100%"
          height="100%"
          style={{border:0}}

          allowFullScreen
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90284.49043269485!2d168.61739859040918!3d-44.99669492981708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa9d51df1d7a8de5f%3A0x500ef868479a600!2sQueenstown!5e0!3m2!1sen!2snz!4v1711249838039!5m2!1sen!2snz">
        </iframe>
      </div>
    </section>
  )
}

export default ContactSection