import React from 'react';
import '../style/ExtendedVersion.scss';

import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import spock from '../images/icon-spock.svg';
import lizard from '../images/icon-lizard.svg';
const ExtendedVersion = (props) => {
    return (
        <>
            <div className='chooseOption extendedVersionContainer'>
                <div className='scissorsElement scissorsElementExtended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='scissors'><img className='scissorsImg' src={scissors} alt="icon-scissors" /></button>
                </div>
                <div className='spockElement spockElementExtended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='spock'><img className='spockImg' src={spock} alt="icon-spock" /></button>
                </div>
                <div className='paperElement paperElementExtended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='paper'><img className='paperImg' src={paper} alt="icon-paper" /></button>
                </div>

                <div className='lizardElement lizardElementExtended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='lizard'><img className='lizardImg' src={lizard} alt="icon-lizard" /></button>
                </div>

                <div className='rockElement rockElementExtended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='rock'><img className='rockImg' src={rock} alt="icon-rock" /></button>
                </div>
            </div>
        </>
    );
}

export default ExtendedVersion;