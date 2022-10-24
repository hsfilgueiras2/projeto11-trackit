import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
export default function Footer(){


    
    return(
        <FooterStyled>
            <footer>
            <Link to={'/habitos'}><h3>Habitos</h3></Link>
            <Link to={'/hoje'}></Link><div><p>Hoje</p></div>
            <Link to={'/historico'}><h3>Historico</h3></Link>
            </footer>

        </FooterStyled>
    )
}
const FooterStyled = styled.div`
footer{
    width:80%;
    display:flex;
    justify-content:space-between;
}
div{
    display:flex;
    justify-content:center;
    align-items:center;
    position:fixed;
    bottom:10%;
    left:45%;
    height:91px;
    width:91px;
    border-radius:45px;
    background: #52B6FF;
}
div p {

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: #FFFFFF;


}
a:link { text-decoration: none; }

a:visited { text-decoration: none; }

a:hover { text-decoration: none; }

a:active { text-decoration: none; }
h3{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
text-decoration:none;
color: #52B6FF;
}
display:flex;
justify-content:center;
padding:35px;
position:fixed;
bottom:0px;
left:0px;
z-index:10;
width:100%;
background: #FFFFFF;
height: 70px;
`
