import './Header.css'

import GlobalNav from './GlobalNav';
import CatLogo from './cedric-vt-IuJc2qh2TcA-unsplash.jpg'

function Header({ setPage}) {
    function changePage(e){
        e.preventDefault();
        console.log(e.target.pathname);
        window.history.pushState(null,'', e.target.pathname);
        setPage(e.target.pathname);
    }
    return (
        <header className="header">
            <img
            src={CatLogo}
            className="header__logo"
            alt="Cats logo" width="100" height="100"
           />
            <h1 className="header__title">Welcome to Our Cats Family</h1>
           <a className="pageName" href='/' onClick={ changePage } >Home</a>
           <a className="pageName" href='/about' onClick={ changePage }>About</a>
           <a className="pageName" href='/cats' onClick={ changePage }>Cats</a>
           <GlobalNav className="header__nav"/>
            
        </header>
    );
}

export default Header;