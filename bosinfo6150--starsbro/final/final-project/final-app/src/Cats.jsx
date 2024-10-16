import Card from './Card';
import Button from "./Button";
import GlobalNav from './GlobalNav';

import CatShow1 from './image/the-lucky-neko-tUTlUel_Nvs-unsplash.jpg';
import CatShow2 from './image/kabo-bg9jOHUtmBs-unsplash.jpg';
import CatShow3 from './image/kabo-BHJs5TZ-Nt0-unsplash.jpg';
import CatShow4 from './image/jan-kopriva-IZ7W626JoQs-unsplash.jpg';
import CatShow5 from './image/kabo-OouGoqQuf64-unsplash.jpg';
import CatShow6 from './image/sabina-sturzu-sHtJeNIzPe8-unsplash.jpg';

import './Cats.css';

function Cats() {
    const onReadMore = () => {
        console.log("Read more clicked!");
    }
    
    return (
        <>
        <h2 className='page-title'>Cats Show</h2>
        <GlobalNav className="header__nav"/>
        
        <div className="cards">
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Jorts"
                pic={CatShow1}
                alt="a small kitten (Jorts) is sitting on a soft blanket near a window."
                text="This image features a small kitten (Jorts) sitting on a soft blanket near a window, creating a warm and cozy scene."
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Maru"
                pic={CatShow2}
                alt="A fluffy orange and white cat is sitting against a plain pink background."
                text="This image features a fluffy orange and white cat sitting against a plain pink background."
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Jean"
                pic={CatShow3}
                alt="A cute cat is gazing at the camera and sticking out its tongue."
                text="This image shows that a cute cat is gazing at the camera and sticking out its tongue."
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Nyancat"
                pic={CatShow4}
                alt="A huge cat is gazing at the capturer, it looks angry."
                text="This image shows that a huge cat is gazing at the capturer, it looks angry."
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Grumpy Cat"
                pic={CatShow5}
                alt="A fluffy cat is eating its food, it looks very delicious."
                text="This image displays a fluffy cat eating its food, it looks very delicious."
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="LiI Bub"
                pic={CatShow6}
                alt="A cute cat is sitting on a windowsill and staring at the flower in a vase."
                text="This image shows a cute cat sitting on a windowsill and staring at the flower in a vase."
                linkText="Read More"
                />
        </div>
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">Back to homepage
            </Button>
    </>
    );
}

export default Cats;