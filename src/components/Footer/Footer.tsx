import './Footer.css'
import ImgFooter from '../../assets/img/footer.png'
import React from 'react';
import { BsLinkedin, BsGithub, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  return (
    <div id='footer'>
      <div className="footer-img">
        <img src={ImgFooter} alt="" />
      </div>
      <div className="footer-info">
        <div className="icons">
          <a target='_blank' href="https://www.linkedin.com/in/lucasccgomes/"><BsLinkedin className='linkedin' /></a>
          <a target='_blank' href="https://github.com/lucasccgomes"><BsGithub className='github' /></a>
          <a target='_blank' href="https://wa.me/5547991399367"><BsWhatsapp className='whatsapp' /></a>
        </div>
        <p>© 2023 Lucas O. Gomes. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
