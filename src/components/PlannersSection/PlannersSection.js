import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import './PlannersSection.sass';
import PlannerCard from "./PlannerCard";

function PlannersSection() {


    return (
        <div className="planners-section">
            <div className="planners-section-text-content">
                <SectionsTextContent
                    title="Trip Planners"
                    description="20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines."
                />
                <div className="first-square"></div>
                <a className="plans-button">
                    View all trip plans
                </a>
                <div className="second-square"></div>
            </div>
            <div className="planners-cards">
            {data.map((item) => <PlannerCard image={item.image} price={item.price}
                location={item.location} duration={item.duration}/>)}
            </div>
        </div>
    );
}

const data = [
    {
        image: "rome.png",
        price: "99",
        location: "Rome",
        duration: "7 Days tour"
    }, {
        image: "paris.png",
        price: "95",
        location: "Paris",
        duration: "7 Days tour"
    }, {
        image: "barcelona.png",
        price: "89",
        location: "Barcelona",
        duration: "7 Days tour"
    }, {
        image: "budapest.png",
        price: "89",
        location: "Budapest",
        duration: "7 Days tour"
    },
];

export default PlannersSection;
