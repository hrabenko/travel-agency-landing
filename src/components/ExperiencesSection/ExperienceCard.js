import johnDoe from '../../img/experiences-avatars/john-doe.png';
import johnSmith from '../../img/experiences-avatars/john-smith.png';
import tamaraBellis from '../../img/experiences-avatars/tamara-bellis.png';
import rating from '../../img/rating.svg';


function ExperienceCard({avatar, message, fullName, position}) {
    let userAvatar;

    switch (avatar) {
        case 'john-doe.png':
            userAvatar = johnDoe;
            break;
        case 'john-smith.png':
            userAvatar = johnSmith;
            break;
        case 'tamara-bellis.png':
            userAvatar = tamaraBellis;
            break;
        default:
            userAvatar = null;
    }

    return (
        <div className="experience-card">
            <img className="experience-card-avatar" src={userAvatar}/>
            <p className="experience-card-message">{message}</p>
            <img src={rating} alt="Rating" />
            <h5 className="experience-card-fullname">{fullName}</h5>
            <p className="experience-card-position">{position}</p>
        </div>
    )
}

export default ExperienceCard;