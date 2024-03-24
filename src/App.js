import HeroSection from "./components/HeroSection/HeroSection";
import DestinationsSection from "./components/DestinationsSection/DestinationsSection";
import OffersSection from "./components/OffersSection/OffersSection";
import BlogSection from "./components/BlogSection/BlogSection";
import PlannersSection from "./components/PlannersSection/PlannersSection";
import GallerySection from "./components/GallerySection/GallerySection";
import ExperiencesSection from "./components/ExperiencesSection/ExperiencesSection";
import Footer from "./components/Footer/Footer";

function App() {

    return (
        <div className="App">
            <HeroSection />
            <DestinationsSection />
            <OffersSection />
            <BlogSection />
            <PlannersSection />
            <GallerySection />
            <ExperiencesSection />
            <Footer />
        </div>
    )
}

export default App;