import React from 'react';

function Modal({ onClose, currentProduct, activeSheetType }) {
    const dataSheetImages = currentProduct.infoSheetImages.dataSheets;
    const mdmsSheetImages = currentProduct.infoSheetImages.mdmsSheets;
    console.log('active sheet',activeSheetType)
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-85 flex justify-center items-start pt-10 z-50 overflow-y-auto">
            <button
            onClick={onClose}
            className="fixed top-0 right-4 z-50 m-4 bg-primary text-white p-2 rounded-full"
            aria-label="Close modal"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        <div className="relative bg-primary p-4 max-w-[800px] w-11/12 overflow-y-auto max-h-90vh">
          {/* Close Button */}
      
  
          {/* Modal Content */}
          {activeSheetType === 'data' && dataSheetImages.map((image, index) => (
            <img key={index} className="mb-8 w-full" src={image} alt={`Datasheet ${index}`} />
          ))}

          {activeSheetType === 'mdms' && mdmsSheetImages.map((image, index) => (
            <img key={index} className="mb-8 w-full" src={image} alt={`MDMS ${index}`} />
          ))}
        </div>
      </div>
    );
  }
  

export default Modal;