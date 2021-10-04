import React from "react";

const PlayerCard = (props) => {
    return (
        <React.Fragment>
            <div className="playerCard-Box">
                {props.name} is now {props.age} years old!
            </div>
        </React.Fragment>
    );
}

export default PlayerCard;