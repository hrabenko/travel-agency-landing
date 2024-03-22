import './HeroSection.sass'
import HeroBackground from '../../img/hero-section.png'
import Header from "./Header";
import BookingForm from "./BookingForm";
function HeroSection() {

    return (
        <div
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${HeroBackground})`}}
            className="hero-section">
            <Header />
            <div className="text-content">
                <h1 className="hero-title">Start your unforgettable journey with us.</h1>
                <p className="hero-text">The best travel for your journey begins now</p>
            </div>
            <BookingForm />
        </div>
    )
}

export default HeroSection;