import lisbonImage from '../../img/offers/lisbon.png';
import athensImage from '../../img/offers/athens.png';
import romeImage from '../../img/offers/rome.png';
import rating from '../../img/rating.svg';


function OfferCard({image, description, location, price}) {
    let backgroundImage;

    switch (image) {
        case 'lisbon.png':
            backgroundImage = lisbonImage;
            break;
        case 'athens.png':
            backgroundImage = athensImage;
            break;
        case 'rome.png':
            backgroundImage = romeImage;
            break;
        default:
            backgroundImage = null;
    }

    return (
        <div className="offer-card">
            <img className="offer-card-image" src={backgroundImage} />
            <div className="offer-card-content">
                <h4 className="offer-card-location">{location}</h4>
                <img className="offer-card-rating" src={rating}/>
                <p className="offer-card-description">{description}</p>
                <div className="offer-card-bottom">
                    <div className="price-container">
                        <p className="price-container-text">From</p>
                        <p className="offer-card-price">{price}</p>
                    </div>
                    <a className="offer-card-button">Details</a>
                </div>
            </div>
        </div>
    )
}

export default OfferCard;