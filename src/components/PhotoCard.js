import React from "react";

function PhotoCard(props) {
    return (
        <div className="photoCard">
            <h2>{props.title}</h2>
            <img src={props.url}></img>
            <p>Date: {props.date}</p>
            <p>{props.explanation}</p>
        </div>
    );
};

export default PhotoCard;