function BookingForm() {

    const getPersonOptions = () => {
        const options = [];
        for (let i = 1; i <= 10; i++) {
            options.push(<option key={`option${i}`} value={i}>{i}</option>);
        }
        return options
    }

    const getTomorrowDate = () => {
        const today = new Date();
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + 1);
        return nextDay.toISOString().split('T')[0]
    }

    return (
        <form className="book-form">
            <div className="inputs-section">
                <div className="input-control">
                    <label className="input-label" htmlFor="destination">Destination</label>
                    <input placeholder="Dubai" className="input" id="destination" type="text"/>
                </div>
                <div className="input-control">
                    <label className="input-label" htmlFor="person">Person</label>
                    <select className="input" id="person">
                        {getPersonOptions()}
                    </select>
                </div>
                <div className="input-control">
                    <label className="input-label" htmlFor="checkin-date">Check in</label>
                    <input className="input" type="date" id="checkin-date" min={getTomorrowDate()}/>
                </div>
                <div className="input-control">
                    <label className="input-label" htmlFor="checkout-date">Check out</label>
                    <input className="input" type="date" id="checkout-date" min={getTomorrowDate()}/>
                </div>
            </div>
            <button className="book-btn">
                <span>Book Now</span>
                <span>→</span>
            </button>
        </form>
    )
}

export default BookingForm;