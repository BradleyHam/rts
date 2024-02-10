import React from 'react'
import './contactSection.scss';
import ContactPerson from './ContactPerson';
import ContactForm from '../../components/ContactForm/ContactForm';

import instaIcon from '../../assets/images/instagram-svgrepo-com.svg';
import facebookIcon from '../../assets/images/facebook-svgrepo-com.svg';

function ContactSection() {
  return (
    <section className='contact-section'>
       <div className='contact-information'>
            <h2 className='h2-small'>contact</h2>
            <h2 className='h2-large'>Get in Touch for a Consultation</h2> 
                <div className='contact-people'>
                    <ContactPerson name='callum smith' email='callum@rts.com' number='0226132926'/>
                    <ContactPerson name='liam turner' email='liam@rts.com' number='0226132996'/>
                    </div>   
       </div>
        <ContactForm />
    </section>
  )
}

export default ContactSection