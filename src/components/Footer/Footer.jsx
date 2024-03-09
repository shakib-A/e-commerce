import React from 'react'
import './Footer.css'
import footer_logo from '../../Assets/logo_big.png'
import instagram_icon from '../../Assets/instagram_icon.png'
import pintrest_icon from '../../Assets/pintester_icon.png'
import whatspp_icon from '../../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="footer logo" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="fotter-icons-container">
                <img src={instagram_icon} alt="" />
            </div>

            <div className="fotter-icons-container">
                <img src={pintrest_icon} alt="" />
            </div>

            <div className="fotter-icons-container">
                <img src={whatspp_icon} alt="" />
            </div>
        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer