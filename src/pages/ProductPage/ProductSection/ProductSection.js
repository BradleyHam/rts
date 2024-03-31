import React, {useState} from 'react'
import ProductCard from './ProductCard/ProductCard'
import ButtonPrimary from '@/components/ButtonPrimary/ButtonPrimary'
import { useParams, Link } from 'react-router-dom'
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

  return (
    <div >
      <div className='px-5 md:px-10 lg:px-20 bg-primary-light '>
      {isModalOpen && <Modal onClose={closeModal} currentProduct={product} activeSheetType={activeSheetType} />}
      <div className='pt-[100px] text-white '>
       <nav aria-label="Breadcrumb" className="px-0 bg-primary-light relative z-0">
        <ol className="list-none p-0 inline-flex">
          <li className="flex items-center">
            <Link to="/products" className="text-white opacity-80">
              products
            </Link>
          </li>
          <li className="flex items-center">
            <span className="mx-2 text-white">/</span>
            <span className="text-white" aria-current="page">
              {product.name}
            </span>
          </li>
        </ol>
      </nav>
      </div>
      <div className='product-section flex flex-col lg:flex-row items-start bg-primary-light'>
        <div className='mb-10'>
        <ProductCard product={product} text={false}/>
        </div>
        <div className='product-text lg:max-w-[500px] xl:max-w-[800px]'>
            <h3 className='text-2xl mb-5'>{productPageText.heading}</h3>
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
              <div className='pb-10'>
              <ButtonPrimary text='Enquire Now' toWhat='enquire about our products'/>
              </div>
            </div>
         
        </div>
    </div>
    </div>
    <FooterBanner />
    <Footer />
    </div>
  )
}

export default ProductSection