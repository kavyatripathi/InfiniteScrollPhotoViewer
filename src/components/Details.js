import React from 'react';
import styled from 'styled-components';

const DetStyle = styled.div`
    background: white;
    width: 100%;
    height: 100%
    font-family: sans-serif;
    color: #000;
    font-weight: bold;
    margin: auto;
    z-index: 10
`;

const details = (props) => 
{
    return(
        <DetStyle>
            <h2>Details of the photo {props.id}</h2>
            <p>
                Author: {props.name}
            </p>
            <p>Likes: {props.likes}</p>
            <p>Downloads: {props.downloads}</p>
        </DetStyle>
    )
}
export default details;