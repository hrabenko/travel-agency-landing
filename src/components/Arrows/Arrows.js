import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'
import './Arrows.sass'

function Arrows({}) {

    return (
        <div className="arrows">
            <div className="arrow arrow-disable arrow-left">
                <img src={arrowLeft} alt="Arrow Left" />
            </div>
            <div className="arrow arrow-right">
                <img src={arrowRight} alt="Arrow Right" />
            </div>
        </div>
    )
}

export default Arrows;