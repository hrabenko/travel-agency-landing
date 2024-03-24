import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import './GallerySection.sass';
import firstImage from '../../img/gallery/gallery1.png';
import secondImage from '../../img/gallery/gallery2.png';
import thirdImage from '../../img/gallery/gallery3.png';
import fourthImage from '../../img/gallery/gallery4.png';

function GallerySection() {

    return (
        <div className="gallery-section">
            <div className="gallery-section-top">
                <SectionsTextContent
                    title="Destination Gallery"
                    description="Our photo gallery on trip"
                />
            </div>
            <div className="gallery-images">
                <img src={firstImage} />
                <img src={secondImage} />
                <img src={thirdImage} />
                <img src={fourthImage} />
            </div>
        </div>
    );
}

export default GallerySection;
