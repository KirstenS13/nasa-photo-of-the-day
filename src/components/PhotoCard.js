import React from "react";
import "./styles.css"

import styled from 'styled-components';

const BlackH2 = styled.h2`
    padding: 40px 0 20px 0;
`

const SpacedText = styled.div`
    text-align: left;
    width: 90%;
    margin: auto;
    padding: 20px 0 40px 0;
`

function PhotoCard(props) {
    return (
        <div className="photoCard">
            <BlackH2>{props.title}</BlackH2>
            <img src={props.url}></img>
            <SpacedText className="textContent">
                <p>Date: {props.date}</p>
                <p>{props.explanation}</p>
            </SpacedText>
        </div>
    );
};

export default PhotoCard;