import './Social.css';
import Button from "./Button";

function Social() {
    return (
        <div>
            <h2>Social Media</h2>
            <p className="socialpage__content">If you are interested in our Website or what cats correlated, please follow our social account. Our social media infomation as below:
</p>
            <p className="socialpage__content--detail">1. TikTok: +1 (000)000 0000</p>
            <p className="socialpage__content--detail">2. Whatsapp: +1 (000)000 0000</p>
            <p className="socialpage__content--detail">3. Instagram: xxxxxxCats</p>
            <p className="socialpage__content--detail">4. Facebook: xxxxxxCats</p>
            <p className="socialpage__content--detail">5. Wechat: xxxxxxCats</p>
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default Social;