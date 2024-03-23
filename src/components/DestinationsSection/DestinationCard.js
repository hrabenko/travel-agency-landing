import locationIcon from '../../img/location.svg'
import berlinImage from '../../img/destinations/berlin.png';
import londonImage from '../../img/destinations/london.png';
import veniceImage from '../../img/destinations/venice.png';
import lisbonImage from '../../img/destinations/lisbon.png';
function DestinationCard({image, description, location}) {
    let backgroundImage;

    switch (image) {
        case 'berlin.png':
            backgroundImage = berlinImage;
            break;
        case 'london.png':
            backgroundImage = londonImage;
            break;
        case 'venice.png':
            backgroundImage = veniceImage;
            break;
        case 'lisbon.png':
            backgroundImage = lisbonImage;
            break;
        default:
            backgroundImage = null;
    }

    return (
        <div className="destination-card"
             style={{backgroundImage: `url(${backgroundImage})`}}
        >
            <h4 className="destination-card-description">{description}</h4>
            <div className="destination-card-location">
                <img src={locationIcon} alt="Location Icon" />
                <p>{location}</p>
            </div>
        </div>
    )
}

export default DestinationCard;