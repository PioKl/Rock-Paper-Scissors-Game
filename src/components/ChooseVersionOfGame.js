import React from 'react';
import "../style/ChooseVersionOfGame.scss";

const ChooseVersionOfGame = (props) => {
    return (
        <div className="chooseVersionOfGame">
            <span className="choosedVersion classicVersion">Classic Version</span>
            <label className="versionSwitch">
                {/* w input w checked jest warunek, aby byl slajder ciagle przesuniety w prawo, czyli zaznaczony jesli wybralem rozszerzona wersje, bo inaczej po restarcie wracalby do wersji podstawowej */}
                <input type="checkbox" name="" id="" checked={`${props.extendedVersion ? 'checked' : ''}`} onChange={props.handleSlider} />
                <span className="slider round"></span>
            </label>
            <span className="choosedVersion extendedVersion">Extended Version</span>
        </div>
    );
}

export default ChooseVersionOfGame;