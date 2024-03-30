// button component 
import React from 'react';
import { Link } from 'react-router-dom';
import './buttonPrimary.scss';
import phone from '../../assets/images/phone-svgrepo-com.svg'

const ButtonPrimary = (props) => {
    return (
    <Link className="button-primary mt-3" to={props.link}>
      <button>
        {/* <img className='phone-icon' src={phone}/> */}
        {props.text}
        </button>
    </Link>
  );
}
export default ButtonPrimary;
