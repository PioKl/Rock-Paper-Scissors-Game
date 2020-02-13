import React from 'react';
import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import '../style/Result.scss';

const Result = (props) => {
    const { playerChoice, computerChoice, currency, handleRestart } = props;
    return (
        <>
            <div className='result'>
                <div className="playerChoice">
                    <h1 className='pickedTitle'>You Picked</h1>
                    <div className={`${playerChoice}Element ${currency === "YOU WIN" ? 'winImpulse' : null}`/*te currency jest po to, zeby dodac klase winImpulse w razie przypadku gdy gracz wygra */}>
                        <div className="choosedElement">
                            <img className={`${playerChoice}Img`} src={playerChoice === 'paper' ? paper : playerChoice === 'rock' ? rock : playerChoice === 'scissors' ? scissors : null} alt={playerChoice} />
                        </div>
                    </div>

                </div>
                <div className="restartGame">
                    <h1 className="currencyOfGame">{currency}</h1>
                    {computerChoice && <button className="buttonRestart" onClick={handleRestart} value='restart'>Restart</button>} {/* jesli komputer juz dokonal wyboru, zebym restart ujrzal dopiero jak sie pojawi co wybral komputer, mozna tez zrobic jak currency nie jest puste */}
                </div>
                <div className="computerChoice">
                    <h1 className='pickedTitle'>Computer Picked</h1>
                    {computerChoice ?
                        <div className={`${computerChoice}Element ${currency === "YOU LOST" ? 'winImpulse' : null}` /* te currency jest po to, zeby dodac klase winImpulse w razie przypadku gdy komputer wygra */}>
                            <div className="choosedElement">
                                <img className={`${computerChoice}Img`} src={computerChoice === 'paper' ? paper : computerChoice === 'rock' ? rock : computerChoice === 'scissors' ? scissors : null} alt={computerChoice} />
                            </div>
                        </div>
                        :
                        <div className='loadingComputerChooseImpulse'>
                            <div className="loadingComputerChooseImpulse2">
                            </div>
                        </div>
                    }
                </div>


            </div>
        </>
    );
}

export default Result;