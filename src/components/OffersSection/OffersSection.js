import React, {useState} from 'react';
import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import Arrows from "../Arrows/Arrows";
import OfferCard from "./OfferCard";
import './OffersSection.sass';

function OffersSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="offers-section">
            <div className="offers-section-top">
                <Arrows currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} lastIndex={data.length - 1} />
                <SectionsTextContent
                    title="Special Offer"
                    description="Check out our special offer and discounts"
                />
            </div>
            <div className="offers-cards">
                {data
                    .filter((item, index) => index >= currentIndex)
                    .map((item, index) => (
                        <OfferCard
                            key={index}
                            image={item.image}
                            location={item.location}
                            description={item.description}
                            price={item.price}
                        />
                    ))}
            </div>
        </div>
    );
}

const data = [
    {
        image: 'lisbon.png',
        location: 'Lisbon, Portugal',
        description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
        price: '€500'
    },
    {
        image: 'athens.png',
        location: 'Athens, Greece',
        description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
        price: '€800'
    },
    {
        image: 'rome.png',
        location: 'Rome, Italy',
        description: '5 nights and 4 days in 5 star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cites of the world in classical literature.',
        price: '€750'
    }
];

export default OffersSection;
