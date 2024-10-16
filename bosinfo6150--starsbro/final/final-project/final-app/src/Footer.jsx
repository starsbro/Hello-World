import './Footer.css';
import EmailVerification from './EmailVerification';
import Button from "./Button";

function Footer() {

    const handleSubmit = (e) => {
        e.preventDefault();
      }

    return (
        <footer className="footer">
            <div className='footer_form'>
                <h2>Keep up to date on Cats News</h2>
                <form className="Subscribe__form" onSubmit={handleSubmit}>
                    <EmailVerification className="subscirbe__email"/>
                    <button className="Subscribe__submit" type="submit">Subscribe</button>
                </form>
            </div>

            <ul className="footer__list">
                <li className="footer__item"><a href="/privacy/">Privacy Policy</a></li>
                <li className="footer__item"><a href="/values/">Our Values</a></li>
                <li className="footer__item"><a href="/contact/">Contact Us</a></li>
                <li className="footer__item"><a href="/social/">Social Media</a></li>
            </ul>
        
        </footer>
    );
}

export default Footer;