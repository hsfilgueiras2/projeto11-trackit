import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"

export default function RegisterScreen() {
    function submitRegistration(){
        
    }
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    return (
        <RegisterStyled>
            <input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input placeholder='senha' value={password} onChange={(e)=>setPassword(e.target.value)}>
            </input>
            <input placeholder='nome' value={name} onChange={(e)=>setName(e.target.value)}>
            </input>
            <input placeholder='foto' value={image} onChange={(e)=>setImage(e.target.value)}>
            </input>
            <button onClick={()=>submitRegistration()}>Cadastrar</button>
            <Link to={"/"}>
            <p>Já tem uma conta? Faça login!</p>
            </Link>
        </RegisterStyled>
    )
}
const RegisterStyled = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
input{
    box-sizing: border-box;
    width: 303px;
height: 45px;
left: 36px;
top: 330px;

background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
}
input::-webkit-input-placeholder{
    margin-left:11px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}
input:-moz-placeholder {
    margin-left:11px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
}

button{
width: 303px;
height: 45px;
left: 36px;
top: 381px;
border-width:0px;
background: #52B6FF;
border-radius: 4.63636px;
}

p{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13.976px;
line-height: 17px;
text-align: center;
text-decoration-line: underline;

color: #52B6FF;


}
button:hover{
    cursor:pointer;
}
p:hover{
    cursor:pointer;
}
`