import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary'

function ProductSection() {
  return (
    <div className='product-section'>
        <ProductCard />
        <div className='product-text'>
            <h3></h3>
            <ul>
                <li> <strong>Powerful Formula:</strong> Engineered with cutting-edge technology, our solution penetrates deep into porous surfaces, dissolving efflorescence at the source for a thorough cleanse.
                </li>
                <li> <strong>Powerful Formula:</strong> Engineered with cutting-edge technology, our solution penetrates deep into porous surfaces, dissolving efflorescence at the source for a thorough cleanse.
                </li>
                <li> <strong>Powerful Formula:</strong> Engineered with cutting-edge technology, our solution penetrates deep into porous surfaces, dissolving efflorescence at the source for a thorough cleanse.
                </li>
                <li> <strong>Powerful Formula:</strong> Engineered with cutting-edge technology, our solution penetrates deep into porous surfaces, dissolving efflorescence at the source for a thorough cleanse.
                </li>
            </ul>
            <div className='product-button-group'>
              <div className='button--mdms-sheet'>
                Mdms Sheet
              </div>
              <div className='button--data-sheet'>
                Data Sheet
              </div>
              <ButtonPrimary text='Call to buy'/>
            </div>
           
        </div>
    </div>
  )
}

export default ProductSection