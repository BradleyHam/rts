import React, {useState} from 'react'
import ProductCard from './ProductCard/ProductCard'
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary'
import { useParams } from 'react-router-dom'
import productData from '../ProductData'
import Footer from '@/components/Footer/Footer'
import FooterBanner from '@/components/FooterBanner'
import SecondaryButton from '@/components/SecondaryButton'
import Modal from '@/components/Modal'

function ProductSection() {
  let { productName } = useParams();
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSheetType, setActiveSheetType] = useState('');
  const openModal = (type) => {
    document.body.classList.add('no-scroll');
    setActiveSheetType(type); // First state update
    setIsModalOpen(true); // Second state update
  };
  const closeModal = () => {
    document.body.classList.remove('no-scroll');
    setIsModalOpen(false);
  };

  const product = Object.values(productData).find(p => p.slug === productName)
  const { productPageText } = product

  console.log(productPageText)

  return (
    <div>
      {isModalOpen && <Modal onClose={closeModal} currentProduct={product} activeSheetType={activeSheetType} />}
    
    <div className='product-section flex items-start'>
        <ProductCard product={product} text={false}/>
        <div className='product-text'>
            <h3 >{productPageText.heading}</h3>
            <p className='text-[18px]'>{productPageText.topText}</p>
            <ul className='py-4 '>
            {
              productPageText.benefits.map(benefit => (
                <li className='text-[18px]'><strong className='pr-2 text-[19px]'>{benefit.heading}</strong>{benefit.description}</li>
              ))
            }
            </ul>
            <p className='text-[18px]'>{productPageText.bottomText}</p>
            <div className='product-button-group flex flex-col items-start space-y-2 mt-4'>
              <div className='flex flex-col items-start space-y-2'>
              <SecondaryButton onClick={() => openModal('data')} text='Data Sheet'/>
              <SecondaryButton onClick={() => openModal('mdms')} text='MDMS Sheet'/>
         
              </div>
              <ButtonPrimary text='Enquire Now'/>
            </div>
         
        </div>
    </div>
    <FooterBanner />
    <Footer />
    </div>
  )
}

export default ProductSection