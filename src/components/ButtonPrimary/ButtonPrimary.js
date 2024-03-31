import React, { useState } from 'react';
import './buttonPrimary.scss';
import Modal from '../../components/PhoneModal';

const ButtonPrimary = ({ text, toWhat }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAction = () => {
    // Simple mobile detection logic
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      // Initiating a call if the device is a mobile
      window.location.href = 'tel:0277111711';
    } else {
      // Opening the modal if the device is not a mobile
      setIsModalOpen(true);
    }
  };

  // Function to close the Modal
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <button className="button-primary mt-3" onClick={handleAction}>
        {text}
      </button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} toWhat={toWhat}/>
    </>
  );
};

export default ButtonPrimary;

