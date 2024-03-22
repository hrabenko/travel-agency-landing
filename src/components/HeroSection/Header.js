import Logo from '../../img/logo.svg'
function HeroSection() {

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
            <div className="auth-buttons">
                <a className="login-btn" href="#">Login</a>
                <a className="signup-btn" href="#">Sign Up</a>
            </div>
        </div>
    )
}

export default HeroSection;