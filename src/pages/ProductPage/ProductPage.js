import './productPage.scss'
import React from 'react'
import ProductPageHeader from './ProductPageHeader/ProductPageHeader'
import ProductSection from '../ProductPage/ProductSection/ProductSection'
import ProductsSection from './ProductsSection/ProductsSection'
import FooterBanner from '../../components/FooterBanner'
import Footer from '../../components/Footer/Footer'


function ProductPage() {
  return (
  <div>
    <ProductPageHeader />
    <ProductsSection />
    {/* <ProductSection /> */}
    <FooterBanner />
    <Footer />
  </div>
  )
}

export default ProductPage