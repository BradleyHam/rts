import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, toWhat }) => {

  return (
        <div>
          {isOpen && (
            <div className="modal fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-20 bg-black bg-opacity-90">
              <div className="modal-content bg-primary-dark p-20 relative">
                <div className='flex items-center space-x-3'>
                <p className='font-primary uppercase text-silver tracking-widest font-medium text-[17px]'>Call us on:  </p>
                <p className='font-semibold '> 027 711 1711</p>
                </div>
                <p>to {toWhat}</p>
                <div className='cursor-pointer'>
                    <FaTimes onClick={onClose} className='absolute top-5 right-5' size={24} color='white' /> 
                </div>
              </div>
            </div> )}
        </div>
  );
};

export default Modal;
