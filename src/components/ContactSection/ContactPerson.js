import React from 'react'
import phoneImage from '../../assets/images/phone-svgrepo-com.svg'
import emailImage from '../../assets/images/email-svgrepo-com.svg'

function ContactPerson(props){
    return(
        <div className='contact-person'>
            <p className='contact-name'>{props.name}</p>
      
            <div className='contact-method contact-method--email'><img className='contact-method-icon' src={emailImage}/><p>{props.email}</p></div>
            <div className='contact-method contact-method--phone'><img className='contact-method-icon' src={phoneImage}/><p>{props.number}</p></div>
        </div>
    )
}

export default ContactPerson