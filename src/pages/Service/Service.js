import React from 'react'
import './service.scss';
import serviceData from '../Service/servicesData';

function Service({serviceName}) {

  const currentServiceData = serviceData[serviceName]

  return (
    <div id={serviceName} className='service-component pt-20'>
      
      <h3 className='service-heading'>
        {currentServiceData.serviceName}
      </h3>
      <ul className='service-list'>
         {currentServiceData.bulletPoints.map(item => (
           <li><strong>{item.bulletHeading}</strong><br/>{item.bulletDescription}</li>
         ))} 
      </ul>
    
      <div className='service-image'>
        <img src={currentServiceData.image}/>
      </div>
  
    </div>
  )
}

export default Service