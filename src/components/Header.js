import React from 'react';
import '../style/Header.scss';
import logo from '../images/logo.svg';
import logoExtended from '../images/logo-bonus.svg';

const Header = (props) => {
    return (
        <header className="header">
            <div className='header__title'>
                <a href="./"><img className="header__logoImg" src={props.extendedVersion ? logoExtended : logo} alt={logo} /></a>
            </div>
            <div className='header__pointsContainer'>
                <p className='header__points header__points--title'>SCORE</p>
                <p className='header__points header__points--count'>{props.points}</p>
            </div>
        </header>
    );
}

export default Header;