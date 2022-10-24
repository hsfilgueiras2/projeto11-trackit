import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function Header({image}){
    return(
        <HeaderStyled>
            <h1>TrackIt</h1>
            <img src={image}></img>
        </HeaderStyled>
    )
}
const HeaderStyled = styled.div`
position:fixed;
top:0px;
left:0px;
width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content:space-between;
align-items:center;
padding-left:18px;
padding-right:18px;
box-sizing:border-box;
h1{
    font-family: 'Playball';
font-style: normal;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: #FFFFFF;
}
img{
    width: 51px;
    height: 51px;
    border-radius: 25px;
}
`
