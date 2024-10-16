import Button from "./Button";
import GlobalNav from './GlobalNav';
import './About.css'

function About() {
    return (
        <div>
            <h2>About Cats Family</h2>
            <GlobalNav className="header__nav"/>
            <p className="aboutpage__content">Our website focus on sharing ideas for fun and interactive activities that cat families can enjoy together, such as DIY cat toys, enrichment games, and outdoor adventures. Include safety tips and guidelines to ensure a positive experience for both cats and humans.</p>
            <p className="aboutpage__content--others">Then our website educates cat owners about feline behavior and communication cues, helping them understand their cats' needs and strengthen their bond. Include tips for addressing common behavior issues and creating a harmonious home environment.</p>
            <p className="aboutpage__content--others">And then our website Offer practical advice on creating a cat-friendly home environment, including tips for cat-proofing, litter box placement, vertical space enrichment, and creating designated cat zones.</p>
            <p className="aboutpage__content--others">At last, our website create a public space where cat owners can connect with one another, share stories, ask questions, and offer support. Foster a supportive and inclusive community where members can seek advice and celebrate their shared love for cats.</p>
           
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">Back to homepage
            </Button>
        </div>
    );
}

export default About;
