import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaCheck } from 'react-icons/fa';

import ButtonPrimary from '../../../../components/ButtonPrimary/ButtonPrimary'; 
import SecondaryButton from '@/components/SecondaryButton';

function ProductCard({ product, text }) {
  const { image, slug, cardBulletPoints } = product;
  return (
    <div className='product-card flex flex-col justify-between'>
      <img className='product-image' src={image} alt="product" />
      { text && (
        <>
          <div className='product-card-bullets space-y-2 pt-6 pb-8 mb-auto '>
            {cardBulletPoints.map((bulletPoint, index) => (
              <div className='product-card-bullet-point flex items-center' key={index}>
                <FaCheck className='text-accent-secondary mr-2 min-w-[20px]'/>
                <p className='flex text-base'>{bulletPoint}</p>
              </div>
            ))}
          </div>
          <div className='button-container'>
            <Link to={`/products/${slug}`}>
              <SecondaryButton text='Learn more'/>
            </Link>
            <ButtonPrimary text='Enquire now' toWhat='enquire about our products'/>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductCard;