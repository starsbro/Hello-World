import './Header.css'
import CatLogo from './image/cedric-vt-IuJc2qh2TcA-unsplash.jpg'
import Modal from './Modal';
import Form from './Form';
function Header({setPage}) {
    function changePage(e){
        e.preventDefault();
        console.log(e.target.pathname);
        window.history.pushState(null,'', e.target.pathname);
        setPage(e.target.pathname);
    }

    function goToHomePage(e) {
        e.preventDefault();
        window.history.pushState(null, '', '/');
        setPage('/');
    }

    return (
        <>
        
        <header className="header">
            <a className="skip-to-content-link" href="#main">Skip to content</a>
            <img src={CatLogo} className="header__logo" href='/' onClick={ goToHomePage } alt="Logo: This is a cute cat gazing at the right of the image." width="80" height="80"/>
            <h1 className="header__title">Welcome to Cats Family</h1> 
            <Modal className="openModal">
                <Form id="12345"/>
            </Modal>  
        </header>
        
        <div className='header-middle-area'>
            <a className="pageName" href='/' onClick={ changePage } >Home</a>
            <a className="pageName" href='/about/' onClick={ changePage }>About</a>
            <a className="pageName" href='/cats/' onClick={ changePage }>Cats Show</a>
        </div>
   </>
    );
}

export default Header;