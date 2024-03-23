import './SectionsTextContent.sass'

function SectionsTextContent({title, description}) {

    return (
        <div className="sections-text-content">
            <h2 className="sections-title">{title}</h2>
            <hr className="sections-divider" />
            <p className="sections-description">{description}</p>
        </div>
    )
}

export default SectionsTextContent;