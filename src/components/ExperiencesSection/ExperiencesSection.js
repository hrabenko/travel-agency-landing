import React, {useState} from 'react';
import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import './ExperiencesSection.sass';
import ExperienceCard from "./ExperienceCard";
import Arrows from "../Arrows/Arrows";

function ExperiencesSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="experiences-section">
            <div className="experiences-section-top">
                <SectionsTextContent
                    title="Traveler’s Experiences"
                    description="Here some awesome feedback from our travelers"
                />
            </div>
            <div className="experiences-cards">
                {data
                    .filter((item, index) => index >= currentIndex)
                    .map((item, index) => <ExperienceCard key={`experience${index}`}
                                                           avatar={item.avatar}
                                                           message={item.message}
                                                           fullName={item.fullName}
                                                           position={item.position}
                />)}
            </div>
            <Arrows currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} lastIndex={data.length - 1} />
        </div>
    );
}

const data = [
    {
        avatar: 'john-doe.png',
        message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
        fullName: 'John Doe',
        position: 'Accountant'
    }, {
        avatar: 'john-smith.png',
        message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
        fullName: 'John Smith',
        position: 'Journalist, HWO News'
    }, {
        avatar: 'tamara-bellis.png',
        message: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness.',
        fullName: 'Tamara Bellis',
        position: 'Managing Director, JTH'
    },
]

export default ExperiencesSection;
