import React from "react";

const PlayerCard = (props) => {
    return (
        <React.Fragment>
            <div className="playerCard-Box">
                {props.name}
            </div>
        </React.Fragment>
    );
}

export default PlayerCard;