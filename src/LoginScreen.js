import React from 'react';
import styled from 'styled-components';
import { Link, Navigate } from "react-router-dom";
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function LoginScreen({setUserInfo}){
    const [sentRequest, setSentRequest] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate =useNavigate();
    useEffect(() => {
        console.log(sentRequest)
        if (sentRequest ===false){}
        else{
		const registration = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            {
                email: email,
                password:password
            })
            registration.then(promessa=>{handleResponse(promessa)})
            registration.catch((error)=>{console.log("PEGO NO CATCH");console.log(error.response.data);setSentRequest(false)})
	    }}, [sentRequest]);

    function handleResponse(response){
        setUserInfo({email:response.data.email,
        id:response.data.id,
        image:response.data.image,
        name:response.data.name,
        password:response.data.password,
        token:response.data.token})
        navigate(`/hoje`)
        
    }
    return(
    <LoginStyled>
        <input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}>
        </input>
        <input placeholder='senha' value={password} onChange={(e)=>setPassword(e.target.value)}>
        </input>
        <button onClick={()=>{setSentRequest(true)}}>Entrar</button>

        <Link to={`/cadastro`}>
        <p>Não tem uma conta? Cadastre-se!</p>
        </Link>
        
    </LoginStyled>)
}
const LoginStyled = styled.div`
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