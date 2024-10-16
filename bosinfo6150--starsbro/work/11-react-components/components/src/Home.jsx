import Modal from "./Modal";
import Form from "./Form";
import Button from "./Button";
import CatLogo from './cedric-vt-IuJc2qh2TcA-unsplash.jpg';
import './Home.css';

function Home() {
    return (
        <div className="container">
             
            <h2 className="homeTitle">Cats Family</h2>
            <Modal className="openModal">
                <Form id="12345"/>
            </Modal>
            
            <p>The cat, also known as the domestic cat or house cat, is a small mammal that is the only domesticated species in the Felis family.</p>
            <img
            src={CatLogo}
            className="Content__cat"
            alt="This is a cute cat." width="300" height="300"
           />

            <Button className="my-button" onClick={() => { 
                console.log('visualButton clicked!'); 
                window.location.href = "/cats";
                }}
                type="button" visual="button">visualButton</Button>
            <Button className="my__visualLinkButton" onClick={() => { 
                console.log('visualLink clicked!'); 
                window.location.href = "/cats";
                }}
                visual="link">visualLink
            </Button>

            <p>Cats are carnivores that weigh between 5–20 lbs and can grow to 28 in long. They have thick, soft fur that comes in many colors. </p>

            <img
            src={CatLogo}
            className="Content__cat"
            alt="This is a cute cat." width="300" height="300"
           />
            
            <p>Cats are the smallest member of the Felidae family, which also includes lions, tigers, and pumas.</p>
            
        
        </div>
        
    );
}

export default Home;
