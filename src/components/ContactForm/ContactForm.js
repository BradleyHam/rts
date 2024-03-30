import React, { useState } from 'react';
import './contactForm.scss';
import Button from '../ButtonPrimary/ButtonPrimary'
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log('Form data submitted:', formData);
    // Here you would typically send the form data to a server
    // For example, using fetch() or axios to post the data
  };

  return (
    <form className='contact-form' onSubmit={handleSubmit}>
        <h3>Reach Out Today!</h3>
        <input
          placeholder='name'
          aria-label="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          placeholder='email'
          aria-label="email"
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          className='mb-5'
          id="message"
          name="message"
          placeholder='message'
          value={formData.message}
          onChange={handleChange}
          required
        />
      <ButtonPrimary text='Get In Touch'/>
    </form>
  );
}

export default ContactForm;
