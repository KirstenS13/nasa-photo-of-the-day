import React from "react";
import "./styles.css"

function PhotoCard(props) {
    return (
        <div className="photoCard">
            <h2>{props.title}</h2>
            <img src={props.url}></img>
            <div className="textContent">
                <p>Date: {props.date}</p>
                <p>{props.explanation}</p>
            </div>
        </div>
    );
};

export default PhotoCard;