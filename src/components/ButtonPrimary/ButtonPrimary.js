// button component 
import React from 'react';
import { Link } from 'react-router-dom';
import './buttonPrimary.scss';

const ButtonPrimary = (props) => {
    return (
    <Link to={props.link}>
      <button className="button-primary">{props.text}</button>
    </Link>
  );
}
export default ButtonPrimary;
