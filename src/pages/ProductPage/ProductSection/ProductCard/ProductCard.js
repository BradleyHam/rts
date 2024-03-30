import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaCheck } from 'react-icons/fa';

import ButtonPrimary from '../../../../components/ButtonPrimary/ButtonPrimary'; 
import SecondaryButton from '@/components/SecondaryButton';

function ProductCard({ product, text }) {
  const { image, slug, cardBulletPoints } = product;
  return (
    <div className='product-card'>
      <img className='product-image' src={image} alt="product" />
      { text && (
        <>
          <div className='product-card-bullets space-y-2 pt-6 pb-3'>
            {cardBulletPoints.map((bulletPoint, index) => (
              <div className='product-card-bullet-point flex items-center' key={index}>
                <FaCheck className='text-accent-secondary mr-2'/>
                <p className='flex text-base'>{bulletPoint}</p>
              </div>
            ))}
          </div>
          <Link to={`/products/${slug}`}>
            <SecondaryButton text='Learn more'/>
          </Link>
          <ButtonPrimary text='Enquire now'/>
        </>
      )}
    </div>
  );
}

export default ProductCard;