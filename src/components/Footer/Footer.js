import React from 'react'
import './footer.scss'
import logo from '../../assets/images/RTS Logo (1).png'
import facebookIcon from '../../assets/images/facebookSvgRepo.svg';
import instaIcon from '../../assets/images/instagram-svgrepo-com.svg';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <Link to='/'>
              <img src={logo} className='footer-logo' />
            </Link>
            <div className='socials'>
                <a className='facebook' href='https://www.facebook.com/p/RTS-Masonry-Services-100077732815901/?paipv=0&eav=AfaLbdbqoV9JwQ66ZSyvBC5sK0qgOO5wZQ21IFpLltgSB8D3FoCwc5ppjzJdFVDJfQg&_rdr' >
                    <img src={facebookIcon} alt='Facebook'></img>
                </a>
                <a className='instagram' href='https://www.instagram.com/rts_chemicals/'>
                  <img src={instaIcon} alt="Instagram"></img>
              </a> 
            </div>
        </div>
        <div className='bottom-footer mx-5 md:mx-10 lg:mx-20 py-10'>
        &copy; 2024 RTS Chemicals
        </div>
    </div>
  )
}

export default Footer