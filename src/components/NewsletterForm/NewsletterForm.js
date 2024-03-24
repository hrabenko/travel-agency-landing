import './NewsletterForm.sass'

function NewsletterForm() {
    return (
        <div className="newsletter-form">
            <h2 className="newsletter-form-title">Our Newsletter</h2>
            <form>
                <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Enter your email"/>
                </div>
                <button className="subscribe-button">Subscribe</button>
            </form>
        </div>
    )
}

export default NewsletterForm;