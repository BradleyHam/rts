import React from 'react'
import './serviceCard.scss'

import Arrow from '../../assets/images/arrowDiagonal.svg'

function ServiceCard(props) {
  return (
    <div className='service-card'>
      <image src={props.imgSource}/>
      <h3>{props.serviceTitle}</h3>
      <button className='service-button'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <polygon fill='white' points="7 7 15.586 7 5.293 17.293 6.707 18.707 17 8.414 17 17 19 17 19 5 7 5 7 7"/>
        </svg>
      </button>
      {props.children}
     
    </div>
  )
}

export default ServiceCard