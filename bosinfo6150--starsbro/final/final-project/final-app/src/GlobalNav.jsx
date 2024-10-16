import { useState } from 'react';

import './GlobalNav.css';

import menu from './menu';

function GlobalNav({className}) {

    const [showMenu, setShowMenu] = useState(false);

    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a className="global-nav__link" href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });
    
    const menuHtml = (
        <ul className="global-nav__list">
                { list }
            </ul>
    );
    
    
    return (
        <nav className={`global-nav ${className}`}>
            <button className="global-nav__toggle"
            onClick={ () => setShowMenu(!showMenu)}>
                {showMenu ? "Close Menu" : "Open Menu"}
            </button>
            { showMenu && menuHtml }
        </nav>
    );
}

export default GlobalNav;