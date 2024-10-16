import './Value.css';
import Button from "./Button";

function Value() {
    return (
        <div>
            <h2>Our Values</h2>
            <p className="valuepage__content">We are committed to providing valuable information and resources to help cat owners better understand their pets' needs, behavior, and health, fostering responsible pet ownership.</p>
            <p className="valuepage__content--others">We are dedicated to delivering high-quality content, products, and services that meet the needs and expectations of our users, ensuring their satisfaction and trust in our brand.</p>
            <p className="valuepage__content--others">We are mindful of our environmental impact and strive to promote eco-friendly practices, including sustainable pet care products and initiatives to reduce waste and carbon footprint.</p>
            <p className="valuepage__content--others">We believe in celebrating the joy and companionship that cats bring into our lives, offering entertaining and engaging content that brings smiles to our users' faces.</p>
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default Value;