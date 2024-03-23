import SectionsTextContent from "../SectionsTextContent/SectionsTextContent";
import './BlogSection.sass';
import blogImage from '../../img/blog-image.png';

function BlogSection() {

    return (
        <div className="blog-section">
            <div className="blog-section-top">
                <SectionsTextContent
                    title="Our Blog"
                    description="An insight the incredible experience in the world"
                />
            </div>
            <div className="blog-content">
                <img className="blog-image" src={blogImage} alt="Blog Image" />
                <div className="blog-text">
                    <h3 className="blog-text-title">Beautiful Italy <br/>Let’s travel</h3>
                    <p className="blog-text-description">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of the great explorer of the truth, the master- builder of human happiness. No one rejects, dislike, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues.</p>
                    <a className="blog-text-link">Read more →</a>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
