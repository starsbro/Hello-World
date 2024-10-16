import './Contact.css';
import Button from "./Button";

function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <p className='contactpage__content--others'>Did you know you can use this website to manage your account? </p>
            <p className='contactpage__content--others'>You can check all your account status and change your account information. Many of our cats show cases are available to the public. If you have any questions about this Website or somethings about cats , please contact us. Our contact infomation as below:
</p>
            <p className='contactpage__content'>1. Phone Number: +1 (000)000 0000</p>
            <p className='contactpage__content'>2. Email Address: xxx@gmail.com</p>
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default Contact;