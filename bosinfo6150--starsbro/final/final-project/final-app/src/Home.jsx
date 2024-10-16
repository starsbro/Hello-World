
import Button from "./Button";

import CatCard1 from './image/sabina-sturzu-sHtJeNIzPe8-unsplash.jpg';
import CatCard2 from './image/jari-hytonen-YCPkW_r_6uA-unsplash.jpg';
import CatCard3 from './image/charl-durand-Sb7UlHaJGVk-unsplash.jpg';
import CatCard4 from './image/simon-infanger-2alcY6uTzl8-unsplash.jpg';
import './Home.css';

function Home() {
    return (
        <>
            <div className="container"> 
                <h2 className="homeTitle">Cats Family Introduction</h2>
            </div>
            <div className="homepage__cards">
                <div className="card">
                    <span className="card__title">What is cat？</span>
                    <p>The cat, also known as the domestic cat or house cat, is a small mammal that is the only domesticated species in the Felis family.</p>
                    <img src={CatCard1} className="Content__cat1" alt="This is a cute cat looking at a vase of flowers ." />
                    <Button className="my-button" onClick={() => { 
                            console.log('visualButton clicked!'); 
                            window.location.href = "/cats/";
                            }} type="button" visual="button">Read more</Button>
                </div>   
                <div className="card">
                    <span className="card__title">Types of Cats Family</span>
                    <p>
                        Cats are carnivores that weigh between 5–20 lbs and can grow to 28 in long. 
                        {' '} 
                        <Button className="my__visualLinkButton" onClick={() => { 
                            console.log('visualLink clicked!'); 
                            window.location.href = "/cats/";
                        }} visual="link">Cats
                        </Button> 
                        {' '} have thick, soft fur that comes in many colors. 
                    </p>
                <div className="Content__cat">
                    <img src={CatCard2} className="Content__cat2" alt="These are four cute cats."/>
                    <img src={CatCard3} className="Content__cat3" alt="This is a lion."/>
                    <img src={CatCard4} className="Content__cat3" alt="This is a tiger."/>
                </div>
                    
                    <p className="Last_content">Cats are the smallest member of the Felidae family, which also includes lions, and tigers.</p>
                </div>   
            </div>   
        </>   
    );
}

export default Home;
