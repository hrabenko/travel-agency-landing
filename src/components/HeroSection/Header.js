import Logo from '../../img/logo.svg'
import burgerMenuIcon from '../../img/burger-menu-icon.svg'
import {useState} from "react";
import BurgerMenu from "./BurgerMenu";
function HeroSection() {
    const [sidebar, setSidebar] = useState(false);

    return (
        <div className="header">
            <div>
                <img src={Logo} alt="Travellian Logo" />
            </div>
            <nav className="header-nav">
                <ul className="header-nav-list">
                    <li><a className="header-nav-list-item" href="#">Home</a></li>
                    <li><a className="header-nav-list-item" href="#">Explore</a></li>
                    <li><a className="header-nav-list-item" href="#">Travel</a></li>
                    <li><a className="header-nav-list-item" href="#">Blog</a></li>
                    <li><a className="header-nav-list-item" href="#">Pricing</a></li>
                </ul>
            </nav>
            <div className="header-buttons auth-buttons">
                <a className="login-btn" href="#">Login</a>
                <a className="signup-btn" href="#">Sign Up</a>
            </div>
            <img onClick={() => setSidebar(prevState => !prevState)} className="burger-menu-icon" src={burgerMenuIcon} />
            <BurgerMenu sidebar={sidebar} setSidebar={setSidebar} />
        </div>
    )
}

export default HeroSection;