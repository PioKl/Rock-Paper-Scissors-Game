import React from 'react';
import '../style/Header.scss';
import logo from '../images/logo.svg';
import logoExtended from '../images/logo-bonus.svg';

const Header = (props) => {
    return (
        <div className="header">
            <div className='title'>
                <a href="#mainMenu"><img className="logoImg" src={props.extendedVersion ? logoExtended : logo} alt={logo} /></a>
            </div>
            <div className='pointsContainer'>
                <p className='points-title'>SCORE</p>
                <p className='points-count'>{props.points}</p>
            </div>
        </div>
    );
}

export default Header;