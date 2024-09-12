import React from "react";
import './Header.css';

const Header: React.FC = () => {
    return(
        <header className="header">
            <h1>Contador - LinkTou</h1>
            <a href="https://github.com/BiancaCancian" target="blank" rel="noopener noreferrer" className="github-link">
                <img src="/git-icon.png" alt="GitHub" className="git-icon"/>
            </a>
        </header>
    );
}

export default Header;