import rating from '../../img/rating.svg';
import romeImage from '../../img/planners/rome.png'
import parisImage from '../../img/planners/paris.png'
import barcelonaImage from '../../img/planners/barcelona.png'
import budapestImage from '../../img/planners/budapest.png'
function PlannerCard({image, price, location, duration}) {
    let cardImage;

    switch (image) {
        case 'rome.png':
            cardImage = romeImage;
            break;
        case 'paris.png':
            cardImage = parisImage;
            break;
        case 'barcelona.png':
            cardImage = barcelonaImage;
            break;
        case 'budapest.png':
            cardImage = budapestImage;
            break;
        default:
            cardImage = null;
    }

    return (
        <div className="planner-card">
            <img className="planner-card-image" src={cardImage} alt="Card Image" />
            <div className="planner-card-description">
                <div>
                    <p>Guided tour</p>
                    <p>€{price}/day</p>
                </div>
                <h4 className="planner-card-location">{location} City Tour</h4>
                <div>
                    <img src={rating} alt="Rating" />
                    <p>{duration}</p>
                </div>
            </div>
        </div>
    );
}


export default PlannerCard;
