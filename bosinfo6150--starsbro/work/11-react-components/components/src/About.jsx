import Button from "./Button";

function About() {
    return (
        <div>
            <h2>About Cat Family</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, aperiam.</p>
            <p>At eos cumque soluta deleniti aliquid commodi voluptates ab asperiores!</p>
            <p>Ipsum culpa eligendi placeat recusandae id ut excepturi dolorum cumque?</p>
            <p>Provident libero optio, similique maiores repellendus dolorum laudantium ullam voluptatibus!</p>
            <p>Saepe aut pariatur animi voluptas! Animi aliquid cupiditate at dolorum.</p>
            <p>Soluta ipsum architecto iusto aliquid deleniti corporis culpa ea necessitatibus.</p>
            <p>Nam dolores unde modi, mollitia natus dignissimos consequuntur ipsum vero!</p>
            <p>Quis, saepe ut! Quia blanditiis quos architecto incidunt tempora quaerat.</p>
            <p>Necessitatibus vero eum quasi eaque, aut architecto molestiae omnis commodi!</p>
            <p>Maxime omnis ut, a libero qui dolorum reiciendis soluta maiores.</p>
            <Button className="my-button" onClick={() => { 
                console.log('Button clicked!'); 
                window.location.href = "/";
                }}
                visual="link">ReturnToHome
            </Button>
        </div>
    );
}

export default About;
