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
                <div className='scissorsElement scissorsElement--extended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='scissors'><img className='scissorsImg iconImg' src={scissors} alt="icon-scissors" /></button>
                </div>
                <div className='spockElement spockElement--extended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='spock'><img className='spockImg iconImg' src={spock} alt="icon-spock" /></button>
                </div>
                <div className='paperElement paperElement--extended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='paper'><img className='paperImg iconImg' src={paper} alt="icon-paper" /></button>
                </div>

                <div className='lizardElement lizardElement--extended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='lizard'><img className='lizardImg iconImg' src={lizard} alt="icon-lizard" /></button>
                </div>

                <div className='rockElement rockElement--extended'>
                    <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='rock'><img className='rockImg iconImg' src={rock} alt="icon-rock" /></button>
                </div>
            </div>
        </>
    );
}

export default ExtendedVersion;