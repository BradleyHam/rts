import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Service from './pages/Service/Service';
import serviceData from './pages/Service/servicesData';
import {useState} from 'react';



function App() {
const [currentPage, setCurrentPage] = useState('home');
const [currentService, setCurrentService] = useState(null);

const renderPage = () => {
  switch (currentPage) {
    case 'home':
      return <Home />;
      break;
    case 'service':
      const serviceObject = serviceData.find(service => service.serviceName === currentService);
      return <Service {...serviceObject}/>;
      break;
    default:
      return <Home />;  // default to Home page if currentPage is not recognized 
      break;
  }
}
 return (
    <div className="App">
      <header className="App-header">
        <Navbar  setCurrentPage={setCurrentPage} setCurrentService={setCurrentService}/>
      </header>
      {renderPage()}
    </div>
  );
}

export default App;
