import React, {useState} from 'react';
import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import Arrows from "../Arrows/Arrows";
import './DestinationsSection.sass';
import DestinationCard from "./DestinationCard";

function DestinationsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="destinations-section">
            <div className="destinations-section-top">
                <SectionsTextContent
                    title="Popular Destinations"
                    description="Most popular destinations around the world, from historical places to natural wonders."
                />
                <Arrows currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} lastIndex={data.length - 1} />
            </div>
            <div className="destinations-cards">
                {data
                    .filter((item, index) => index >= currentIndex)
                    .map((item, index) => (
                    <DestinationCard
                        key={`destination-card${index}`}
                        image={item.image}
                        description={item.description}
                        location={item.location}
                    />
                ))}
            </div>
        </div>
    );
}

const data = [
    {
        image: 'berlin.png',
        description: 'Monument of Berlin',
        location: 'Berlin, Germany'
    },
    {
        image: 'london.png',
        description: 'Millennium Bridge',
        location: 'London, United Kingdom'
    },
    {
        image: 'venice.png',
        description: 'Rialto Bridge',
        location: 'Venice, Italy'
    },
    {
        image: 'lisbon.png',
        description: 'Sea of Orange Tiles',
        location: 'Lisbon, Portugal'
    }
];

export default DestinationsSection;
