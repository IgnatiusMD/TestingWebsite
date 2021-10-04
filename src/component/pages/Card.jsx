import React from "react";

export default class Card extends React.Component{
    render(){
        return <div className="card-box">
            <div className="card-head">
                {this.props.skills}
            </div>
            <div className="card-content">
                {this.props.content}
            </div>
        </div>
    }
}