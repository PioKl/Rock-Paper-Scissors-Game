import React, { Component } from 'react';
import '../style/App.scss';
import Rules from './Rules';
import Result from './Result';

import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import logo from '../images/logo.svg';

class App extends Component {



  gridTemplateAreasChooseOption = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'header''chooseOption''rulesContainer'",
  };
  gridTemplateAreasResult = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'header''result''rulesContainer'",
  }
  choicesForComputer = ['paper', 'rock', 'scissors'];
  time = 3000;
  points = 0;
  playerChoice = '';
  state = {
    computerChoice: '',
    currency: '',
    gameOn: false,
    restart: false,
    rules: false,
  }


  handlePlayerChoice = (e) => {
    e.preventDefault();
    let computerChoice = this.choicesForComputer[Math.floor(Math.random() * this.choicesForComputer.length)];

    //e.currentTarget.value zamiast e.target.value, ponieważ w buttonie mam zamieszczony img i chce, zeby takze przekazal value=paper/rock/scissors jak na niego klikne
    this.playerChoice = e.currentTarget.value;
    if (e.currentTarget.value === computerChoice) {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.setState({
          currency: 'DRAW',
          computerChoice: this.playerChoice,
        })
      }, this.time);
    } else if (e.currentTarget.value === 'paper' && computerChoice === 'rock') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'rock',
        })
      }, this.time);

    } else if (e.currentTarget.value === 'rock' && computerChoice === 'paper') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'paper',
        })
      }, this.time)
    } else if (e.currentTarget.value === 'paper' && computerChoice === 'scissors') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'scissors',
        })
      }, this.time)
    } else if (e.currentTarget.value === 'scissors' && computerChoice === 'paper') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'paper',
        })
      }, this.time);

    } else if (e.currentTarget.value === 'scissors' && computerChoice === 'rock') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'rock',
        })
      }, this.time);

    } else if (e.currentTarget.value === 'rock' && computerChoice === 'scissors') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'scissors',
        })
      }, this.time);

    }
  }


  handleRestart = (e) => {
    e.preventDefault();
    if (this.state.restart === false) {
      this.setState({
        gameOn: false,
        computerChoice: '',
        currency: '',
      })
    }
  }

  handleCloseRulesOnAppClick = (rulesFromRulesState) => { //musze miec wartosc rules z Rules
    this.setState({
      rules: !this.state.rules,
    })
    if (rulesFromRulesState === false) { //jesli sa wylaczone rules z Rules to i tu wylacz, zeby jak zapamieta klikniecie na true, zmienil na false, bo inaczej dwa razy klikac bede musial, zeby wejsc
      this.setState({
        rules: false,
      })
    }

  }


  render() {

    return (
      <>
        {/* <div id='container'> */}
        <div id="mainMenu" className="App" onClick={this.handleCloseRulesOnAppClick} style={this.state.gameOn ? this.gridTemplateAreasResult : this.gridTemplateAreasChooseOption} > {/* zamykanie poprzez klikniecie w dowolne miejsce na stronie, postaram sie zrobic, zeby jak w okienko z zasadami klikne to sie nie zamykalo, czyli bede musial ten display w inny mdivie umiescic */}
          <div className="header">
            <div className='title'>
              <a href="mainMenu"><img className="logoImg" src={logo} alt={logo} /></a>
            </div>
            <div className='pointsContainer'>
              <p className='points-title'>SCORE</p>
              <p className='points-count'>{this.points}</p>
            </div>
          </div>

          {this.state.gameOn ?
            <>
              <Result playerChoice={this.playerChoice} computerChoice={this.state.computerChoice} currency={this.state.currency} handleRestart={this.handleRestart} />
            </>
            :
            <>
              <div className='chooseOption'>
                <div className='paperElement'>
                  <button className='chooseElementButton' onClick={this.handlePlayerChoice} value='paper'><img className='paperImg' src={paper} alt="icon-paper" /></button>
                </div>
                <div className='scissorsElement'>
                  <button className='chooseElementButton' onClick={this.handlePlayerChoice} value='scissors'><img className='scissorsImg' src={scissors} alt="icon-scissors" /></button>
                </div>
                <div className='rockElement'>
                  <button className='chooseElementButton' onClick={this.handlePlayerChoice} value='rock'><img className='rockImg' src={rock} alt="icon-rock" /></button>
                </div>
              </div>
            </>
          }
          <br />
        </div>
        <div className='rulesContainer'>
          <Rules rulesApp={this.state.rules} handleCloseRulesOnAppClick={this.handleCloseRulesOnAppClick} />
        </div>
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>.
          Coded by <a href="https://github.com/PioKl" target="_blank" rel="noopener noreferrer">Piotr Kłosowski</a>.
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default App;
