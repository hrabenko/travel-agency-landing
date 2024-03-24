import './Footer.sass'
import Logo from '../../img/logo.svg'
import facebookIcon from '../../img/social-media-icons/facebook.svg'
import pinterestIcon from '../../img/social-media-icons/pinterest.svg'
import instagramIcon from '../../img/social-media-icons/instagram.svg'
import twitterIcon from '../../img/social-media-icons/twitter.svg'

function Footer() {
    return (
        <div className="footer">
            <div>
                <img src={Logo} alt="Travellian Logo"/>
                <p className="copyright">Copyright © Travellian 2020 All rights reserved</p>
            </div>
            <div className="footer-nav">
                <h5 className="footer-nav-title">Menu</h5>
                <ul className="footer-nav-list">
                    <li className="footer-nav-list-item"><a href="#">Home</a></li>
                    <li className="footer-nav-list-item"><a href="#">Explore</a></li>
                    <li className="footer-nav-list-item"><a href="#">Travel</a></li>
                    <li className="footer-nav-list-item"><a href="#">Blog</a></li>
                    <li className="footer-nav-list-item"><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div className="footer-nav">
                <h5 className="footer-nav-title">Information</h5>
                <ul className="footer-nav-list">
                    <li className="footer-nav-list-item"><a href="#">Destinations</a></li>
                    <li className="footer-nav-list-item"><a href="#">Support</a></li>
                    <li className="footer-nav-list-item"><a href="#">Terms & Conditions</a></li>
                    <li className="footer-nav-list-item"><a href="#">Privacy</a></li>
                </ul>
            </div>
            <div className="footer-nav">
                <h5 className="footer-nav-title">Contact Info</h5>
                <ul className="footer-nav-list">
                    <li className="footer-nav-list-item"><a href="tel:+123456789">+123 456 789</a></li>
                    <li className="footer-nav-list-item"><a href="mailto:info@travellian.com">info@travellian.com</a>
                    </li>
                    <li className="footer-nav-list-item">1245, New York, USA</li>
                </ul>
            </div>
            <div className="footer-nav">
                <h5 className="footer-nav-title">Follow us on</h5>
                <ul className="footer-nav-list social-media-list">
                    <li className="footer-nav-list-item"><a href="https://www.facebook.com/"><img
                        src={facebookIcon}/></a></li>
                    <li className="footer-nav-list-item"><a href="https://www.pinterest.com/"><img src={pinterestIcon}/></a>
                    </li>
                    <li className="footer-nav-list-item"><a href="https://www.instagram.com/"><img src={instagramIcon}/></a>
                    </li>
                    <li className="footer-nav-list-item"><a href="https://twitter.com/"><img src={twitterIcon}/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;