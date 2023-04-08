import './Footer.css'
import ImgFooter from '../../assets/img/footer.png'
import React from 'react';

const Footer = () => {
  return (
    <div id='footer'>
        <div className="footer-img">
            <img src={ImgFooter} alt="" />
        </div>
      <div className="footer-info">
        
      </div>
    </div>
  );
}

export default Footer;
