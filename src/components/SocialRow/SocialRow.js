import React from 'react'
import './socialRow.scss';
import instaIcon from './instagram-svgrepo-com.svg';
import facebookIcon from './facebook-svgrepo-com.svg';

function SocialRow() {
  return (
    <div className='social-media-row'>
    <a className='insta'>
        <img src={instaIcon} />
    </a>
    <a className='facebook'>
        <img src={facebookIcon} />
    </a>
</div>
  )
}

export default SocialRow