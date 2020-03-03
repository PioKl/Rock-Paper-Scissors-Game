import React from 'react';
import "../style/ChooseVersionOfGame.scss";

const ChooseVersionOfGame = (props) => {
    return (
        <div className="chooseVersionOfGame">
            <span className="chooseVersionOfGame__choosedVersion chooseVersionOfGame__choosedVersion--classic">Classic Version</span>
            <label className="chooseVersionOfGame__versionSwitch">
                {/* w input w checked jest warunek, aby byl slajder ciagle przesuniety w prawo, czyli zaznaczony jesli wybralem rozszerzona wersje, bo inaczej po restarcie wracalby do wersji podstawowej */}
                <input type="checkbox" name="" id="" checked={`${props.extendedVersion ? 'checked' : ''}`} onChange={props.handleSlider} />
                <span className="chooseVersionOfGame__slider"></span>
            </label>
            <span className="chooseVersionOfGame__choosedVersion chooseVersionOfGame__choosedVersion--extended">Extended Version</span>
        </div>
    );
}

export default ChooseVersionOfGame;