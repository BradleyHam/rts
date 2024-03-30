import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import serviceData from './pages/Service/servicesData';
import {useState} from 'react';
import Products from '@/pages/ProductPage/ProductPage'
import Product from '@/pages/ProductPage/ProductSection/ProductSection'
import ScrollToTop from './components/ScrollToTop'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
const [currentPage, setCurrentPage] = useState('home');
const [currentService, setCurrentService] = useState(null);

 return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header className="App-header">
          <Navbar  setCurrentPage={setCurrentPage} setCurrentService={setCurrentService}/>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productName" element={<Product />} />
          {/* <Route path="/product/:productName" element={<ProductPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
