import React from 'react';
import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import Arrows from "../Arrows/Arrows";
import './DestinationsSection.sass';
import DestinationCard from "./DestinationCard";

function DestinationsSection() {
    return (
        <div className="destinations-section">
            <div className="destinations-section-top">
                <SectionsTextContent
                    title="Popular Destinations"
                    description="Most popular destinations around the world, from historical places to natural wonders."
                />
                <Arrows />
            </div>
            <div className="destinations-cards">
                {data.map((item, index) => (
                    <DestinationCard
                        key={index}
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
