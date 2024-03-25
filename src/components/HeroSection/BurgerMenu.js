function BurgerMenu({sidebar, setSidebar}) {
    return (
        <div className={sidebar ? "burger-menu burger-menu-active" : "burger-menu"}>
            <div className="back-icon" onClick={() => setSidebar(prevState => !prevState)}>←</div>
            <div className="burger-menu-content">
                <nav className="burger-menu-nav">
                    <ul className="burger-menu-nav-list">
                        <li><a className="burger-menu-nav-list-item" href="#">Home</a></li>
                        <li><a className="burger-menu-nav-list-item" href="#">Explore</a></li>
                        <li><a className="burger-menu-nav-list-item" href="#">Travel</a></li>
                        <li><a className="burger-menu-nav-list-item" href="#">Blog</a></li>
                        <li><a className="burger-menu-nav-list-item" href="#">Pricing</a></li>
                    </ul>
                </nav>
                <div className="auth-buttons">
                    <a className="login-btn" href="#">Login</a>
                    <a className="signup-btn" href="#">Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default BurgerMenu;