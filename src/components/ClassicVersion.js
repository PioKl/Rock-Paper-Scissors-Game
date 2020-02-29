import React from 'react';
import '../style/ClassicVersion.scss';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
const ClassicVersion = (props) => {
    return (
        <div className='chooseOption classicVersionContainer'>
            <div className='paperElement paperElementClassic'>
                <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='paper'><img className='paperImg' src={paper} alt="icon-paper" /></button>
            </div>
            <div className='scissorsElement scissorsElementClassic'>
                <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='scissors'><img className='scissorsImg' src={scissors} alt="icon-scissors" /></button>
            </div>
            <div className='rockElement rockElementClassic'>
                <button className='chooseElementButton' onClick={props.handlePlayerChoice} value='rock'><img className='rockImg' src={rock} alt="icon-rock" /></button>
            </div>
        </div>
    );
}

export default ClassicVersion;