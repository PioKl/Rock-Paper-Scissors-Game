import React, { Component } from 'react';
import '../style/App.scss';
import Header from './Header';
import Rules from './Rules';
import Result from './Result';
import ExtendedVersion from './ExtendedVersion';

import paper from '../images/icon-paper.svg';
import rock from '../images/icon-rock.svg';
import scissors from '../images/icon-scissors.svg';
import ChooseVersionOfGame from './ChooseVersionOfGame';

class App extends Component {


  /* ====================================================
  Style Grid, ktore beda sie roznily dla Glownego Okna, 
  czyli wyboru r/p/s i result, czyli tego co uzytkownik 
  zobaczy po wyborze r/p/s 
  ========================================================*/
  gridTemplateAreasChooseOption = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'header''chooseVersionOfGame''chooseOption'",
  };
  gridTemplateAreasResult = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gridTemplateRows: "auto",
    gridTemplateAreas: "'header''result'",
  }

  choicesForComputer = ['paper', 'rock', 'scissors'];
  choicesForComputerExtended = ['paper', 'rock', 'scissors', 'spock', 'lizard'];
  time = 3000;
  points = 0;
  playerChoice = '';
  state = {
    computerChoice: '',
    currency: '',
    gameOn: false, //na poczatku jest false, po wyborze r/p/s zmienia sie na true zeby przejsc do widoku Result
    restart: false,
    rules: false,
    extendedVersion: false,
  }

  //zaraz przy zamontowaniu "nasłuchiwanie", czy klawisz został wciśnięty i wywołał metodę handleEnterStart
  componentDidMount() {
    document.addEventListener("keydown", this.handleEnterRestart, false);
  }


  //Po kliknieciu na divy z ikonkami rozpoczyna sie metoda, ktora sprawdzi wybor gracza z wyborem komputera, ktory zostanie wylosowany z tablicy. Warunki porownuja te wybory i na ich podstawie powstaje decyzja kto wygral. Ustawienie stanu currency i computerChoice jest opoznione o 3s w celu "wirtualizacji myslenia komputera", aby bylo ukazane, ze przez ten czas komputer zastanawia sie nad wyborem
  handlePlayerChoice = (e) => {
    e.preventDefault();
    let computerChoice = []; //inicjalizacja zmiennej, ktora na poczatku jest pusta
    if (this.state.extendedVersion === false) { //jesli jest wybrana podstawowa wersja to wybor komputera bedzie losowany z tablicy podstawowej
      computerChoice = this.choicesForComputer[Math.floor(Math.random() * this.choicesForComputer.length)];
    }
    //jesli jest wybrana rozszerzona wersja to wybor komputera bedzie losowany z tablicy rozszerzonej
    else {
      computerChoice = this.choicesForComputerExtended[Math.floor(Math.random() * this.choicesForComputerExtended.length)];
    }
    //let computerChoice = this.choicesForComputer[Math.floor(Math.random() * this.choicesForComputer.length)];

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
    /*========================================
    Instrukcje warunkowe dla extended version
    =========================================*/
    else if (e.currentTarget.value === 'rock' && computerChoice === 'lizard') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'lizard',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'lizard' && computerChoice === 'rock') {
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
    } else if (e.currentTarget.value === 'lizard' && computerChoice === 'spock') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'spock',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'spock' && computerChoice === 'lizard') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'lizard',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'spock' && computerChoice === 'scissors') {
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
    } else if (e.currentTarget.value === 'scissors' && computerChoice === 'spock') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'spock',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'scissors' && computerChoice === 'lizard') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'lizard',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'lizard' && computerChoice === 'scissors') {
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
      }, this.time);
    } else if (e.currentTarget.value === 'lizard' && computerChoice === 'paper') {
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
    } else if (e.currentTarget.value === 'paper' && computerChoice === 'lizard') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'lizard',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'paper' && computerChoice === 'spock') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        this.points += 1;
        this.setState({
          currency: 'YOU WIN',
          computerChoice: 'spock',
        })
      }, this.time);
    } else if (e.currentTarget.value === 'spock' && computerChoice === 'paper') {
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
      }, this.time);
    } else if (e.currentTarget.value === 'spock' && computerChoice === 'rock') {
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
    } else if (e.currentTarget.value === 'rock' && computerChoice === 'spock') {
      this.setState({
        gameOn: true,
      })
      setTimeout(() => {
        if (this.points > 0) {
          this.points -= 1;
        }
        this.setState({
          currency: 'YOU LOST',
          computerChoice: 'spock',
        })
      }, this.time);
    }
  }

  /*Przcysik restart, ktory po kliknieciu zmieni stany, zeby mozna bylo zaczac gre od poczatku  */
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

  handleEnterRestart = (e) => {
    //jesli wcisnieto enter, restart === false i dokonał się już jakiś wybór komputera, czyli wybór nie jest pusty, wtedy więc pojawi się przycisk Restart wtedy ustaw stan na poczatkowy
    if (e.keyCode === 13 && this.state.restart === false && this.state.computerChoice !== '') {
      this.setState({
        gameOn: false,
        computerChoice: '',
        currency: '',
      })
    }
  }


  /*Metoda uruchamiajaca sie jesli kliknie w obrebie diva App */
  handleCloseRulesOnAppClick = (rulesFromRulesState) => { //musze miec wartosc rules z Rules
    this.setState({
      rules: !this.state.rules, //zmiana na przeciwny stan
    })
    if (rulesFromRulesState === false) { //jesli sa wylaczone rules z Rules to i tu wylacz, zeby jak zapamieta klikniecie na true, zmienil na false, bo inaczej dwa razy klikac bede musial, zeby wejsc
      this.setState({
        rules: false,
      })
    }

  }

  //Obsluga slidera to zmiany wersji gry
  handleSlider = () => {
    this.setState({
      extendedVersion: !this.state.extendedVersion, //zmiana stanu na przeciwny z false na true, a jak jest true to na false
    })
  }

  render() {
    return (
      <>
        <div id="mainMenu" className="App" onClick={this.handleCloseRulesOnAppClick} style={this.state.gameOn ? this.gridTemplateAreasResult : this.gridTemplateAreasChooseOption} > {/* zamykanie poprzez klikniecie w dowolne miejsce na stronie, postaram sie zrobic, zeby jak w okienko z zasadami klikne to sie nie zamykalo, czyli bede musial ten display w inny mdivie umiescic */}
          <Header extendedVersion={this.state.extendedVersion} points={this.points} />

          {this.state.gameOn ?
            <>
              <Result playerChoice={this.playerChoice} computerChoice={this.state.computerChoice} currency={this.state.currency} handleRestart={this.handleRestart} handleEnter={this.handleEnter} />
            </>
            :
            <>
              <ChooseVersionOfGame extendedVersion={this.state.extendedVersion} handleSlider={this.handleSlider} />

              {this.state.extendedVersion ?

                <ExtendedVersion handlePlayerChoice={this.handlePlayerChoice} />
                :
                <div className='chooseOption classicVersionContainer'>
                  <div className='paperElement paperElementClassic'>
                    <button className='chooseElementButton' onClick={this.handlePlayerChoice} value='paper'><img className='paperImg' src={paper} alt="icon-paper" /></button>
                  </div>
                  <div className='scissorsElement scissorsElementClassic'>
                    <button className='chooseElementButton' onClick={this.handlePlayerChoice} value='scissors'><img className='scissorsImg' src={scissors} alt="icon-scissors" /></button>
                  </div>
                  <div className='rockElement rockElementClassic'>
                    <button className='chooseElementButton' onClick={this.handlePlayerChoice} value='rock'><img className='rockImg' src={rock} alt="icon-rock" /></button>
                  </div>
                </div>
              }


            </>
          }
          <br />
        </div>
        <div className='rulesContainer'>
          <Rules rulesApp={this.state.rules} handleCloseRulesOnAppClick={this.handleCloseRulesOnAppClick} extendedVersion={this.state.extendedVersion} />
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="attributionLink">Frontend Mentor</a>.
          Coded by <a href="https://github.com/PioKl" target="_blank" rel="noopener noreferrer" className="attributionLink">Piotr Kłosowski</a>.
        </div>
      </>
    );
  }
}

export default App;
