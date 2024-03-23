import arrowLeft from '../../img/arrow-left.svg'
import arrowRight from '../../img/arrow-right.svg'
import './Arrows.sass'

function Arrows({currentIndex, setCurrentIndex, lastIndex}) {

    const handleArrow = (direction) => {
        if (direction === "left") {
            if (currentIndex > 0) {
                setCurrentIndex(prevState => prevState - 1)
            }
        } else if (direction === "right") {
            if (currentIndex < lastIndex) {
                setCurrentIndex(prevState => prevState + 1)
            }
        }
    }

    return (
        <div className="arrows">
            <div className={currentIndex === 0 ? `arrow arrow-disable` : `arrow`}
                 onClick={() => handleArrow('left')}
            >
                <img src={arrowLeft} alt="Arrow Left" />
            </div>
            <div className={currentIndex === lastIndex ? `arrow arrow-disable` : `arrow`}
                 onClick={() => handleArrow('right')}
            >
                <img src={arrowRight} alt="Arrow Right" />
            </div>
        </div>
    )
}

export default Arrows;