import React from "react";
import "./styles.css"

import styled from 'styled-components';

const BlackH2 = styled.h2`
    padding: 40px 0 20px 0;
`

const ImgContainer = styled.div`
    width: 100%;
    height: auto;
    margin: auto;
`

const SpaceImg = styled.img`
    width: 100%;
`

const SpacedText = styled.div`
    text-align: left;
    width: 90%;
    margin: auto;
    padding: 20px 0 40px 0;
`

const Paragraphs = styled.p`
    line-height: 1.5;
`

function PhotoCard(props) {
    return (
        <div className="photoCard">
            <BlackH2>{props.title}</BlackH2>
            <ImgContainer>
                <SpaceImg src={props.url} alt={props.title}></SpaceImg>
            </ImgContainer>
            <SpacedText className="textContent">
                <Paragraphs>Date: {props.date}</Paragraphs>
                <Paragraphs>{props.explanation}</Paragraphs>
                <Paragraphs>Photo by {props.copyright}</Paragraphs>
            </SpacedText>
        </div>
    );
};

export default PhotoCard;