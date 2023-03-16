import React from "react";
import logoHeader from '../images/logo.svg';

function Header() {
    return (
        <header className="header">
            <img
                src={logoHeader}
                className="header__logo"
                alt="Логотип Место Россия"
            />
        </header>
    );
}


export default Header;