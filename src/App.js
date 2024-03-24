import HeroSection from "./components/HeroSection/HeroSection";
import DestinationsSection from "./components/DestinationsSection/DestinationsSection";
import OffersSection from "./components/OffersSection/OffersSection";
import BlogSection from "./components/BlogSection/BlogSection";
import PlannersSection from "./components/PlannersSection/PlannersSection";

function App() {

    return (
        <div className="App">
            <HeroSection />
            <DestinationsSection />
            <OffersSection />
            <BlogSection />
            <PlannersSection />
        </div>
    )
}

export default App;