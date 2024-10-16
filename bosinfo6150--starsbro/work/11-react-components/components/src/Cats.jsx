import Card from './Card';
import CatLogo from './cedric-vt-IuJc2qh2TcA-unsplash.jpg';
import './Cats.css';

function Cats() {
    const onReadMore = () => {
        console.log("Read more clicked!");
    }
    const jortsPic = CatLogo;
    
    return (
        <div className="cards">
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Jorts"
                pic={jortsPic}
                alt="a smug orange cat sitting with tail curled around front paws"
                text="It has been 0 days since a Trash Can mishap"
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Maru"
                pic={jortsPic}
                alt="a smug orange cat sitting with tail curled around front paws"
                text="It has been 0 days since a Trash Can mishap"
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Jean"
                pic={jortsPic}
                alt="a smug orange cat sitting with tail curled around front paws"
                text="It has been 0 days since a Trash Can mishap"
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Nyancat"
                pic={jortsPic}
                alt="a smug orange cat sitting with tail curled around front paws"
                text="It has been 0 days since a Trash Can mishap"
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="Grumpy Cat"
                pic={jortsPic}
                alt="a smug orange cat sitting with tail curled around front paws"
                text="It has been 0 days since a Trash Can mishap"
                linkText="Read More"
                />
            <Card
                className="card"
                onReadMore={onReadMore}
                title="LiI Bub"
                pic={jortsPic}
                alt="a smug orange cat sitting with tail curled around front paws"
                text="It has been 0 days since a Trash Can mishap"
                linkText="Read More"
                />
        </div>
    );
}

export default Cats;