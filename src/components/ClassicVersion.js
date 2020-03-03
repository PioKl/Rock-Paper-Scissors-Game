import React from 'react';
import '../style/ClassicVersion.scss';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
const ClassicVersion = (props) => {
    return (
        <div className='chooseOption classicVersionContainer'>
            <div className='paperElement paperElement--classic'>
                <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='paper'><img className='paperImg iconImg' src={paper} alt="icon-paper" /></button>
            </div>
            <div className='scissorsElement scissorsElement--classic'>
                <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='scissors'><img className='scissorsImg iconImg' src={scissors} alt="icon-scissors" /></button>
            </div>
            <div className='rockElement rockElement--classic'>
                <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='rock'><img className='rockImg iconImg' src={rock} alt="icon-rock" /></button>
            </div>
        </div>
    );
}

export default ClassicVersion;