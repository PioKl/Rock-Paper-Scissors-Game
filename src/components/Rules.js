import React, { Component } from 'react';
import '../style/Rules.scss';
import rulesImg from '../images/image-rules.svg';
import iconClose from '../images/icon-close.svg';

class Rules extends Component {

    blackBody = {
        backgroundColor: 'black',
    }
    state = {
        rules: false,
    }

    handleRules = (e) => {
        e.preventDefault();
        this.setState({
            rules: !this.state.rules,
        })
        this.props.handleCloseRulesOnAppClick(this.state.rules);//przekazanie stanu rules do metody w App
    }

    displayRules = () => { //wyświetlenie zasad jesli rules sa true, czyli kliknieto na przycisk
        if (this.state.rules) {
            return (
                <>
                    <div className='rulesMenu'>
                        <div className='rulesTitle'>
                            <h1>Rules</h1>
                            <button className="rulesCloseButton" onClick={this.handleCloseRules} value='x'><img src={iconClose} alt="iconClose" /></button>
                        </div>
                        <div className='rulesImgContainer'>
                            <img className='rulesImg' src={rulesImg} alt="rulesImg" />
                        </div>

                    </div>
                </>
            )
        }
    }

    handleCloseGlobal = () => { // to bedzie wynikalo z handleCloseRulesOnAppClick w App, pobiera stan rules w App poprzez props, zadaniem tego jest ustawienie rules w Rules na false, czyli zamkniecia okna Rules, jesli kliknie sie na div o klasie App
        if (this.props.rulesApp === true) {
            this.setState({
                rules: false,
            })
        }
    }

    handleCloseRules = () => {
        if (this.state.rules === true) { //jesli jest otworzone okno rules, to wtedy jak klikne w odpowiednie miejsce to zamknij okno z rules, czyli zmien na false
            this.setState({
                rules: false,
            })
        }
    }

    render() {
        return (
            <>

                {this.state.rules ? document.addEventListener('click', this.handleCloseGlobal) : null}
                <button className="rulesOpenButton" onClick={this.handleRules} style={{ backgroundColor: (this.state.rules ? 'white' : null), color: (this.state.rules ? 'hsl(229, 25%, 31%)' : null) }} value='rules'>Rules</button>
                {this.displayRules()}
                {this.state.rules ? <style>{'body { background-color: background-color: rgba(0, 0, 0, .3) } .App {opacity: .3}'}</style> : null}
            </>

        );
    }
}

export default Rules;