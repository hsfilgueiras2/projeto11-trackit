import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function TodayScreen({image,userInfo}){
    const [habitsList, setHabitsList] =useState([])
    const [daysOfWeek, setDaysOfWeek] = useState(["D","S","T","Q","Q","S","S"])
    const [formsVisible, setFormsVisible] = useState(false);
    const [inputName, setInputName] = useState("");
    const [inputDays,setInputDays] = useState([]);
    const [inputHabit,setInputHabit] = useState({name:"",days:[]})
    const [requestHabits,setRequestHabits] =useState(true);
    const config = {
        headers:{
          Authorization: `Bearer ${userInfo.token}`
        }
      };
    useEffect(() => {
        if(requestHabits==false){}
        else{
        const getHabits = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config)
        getHabits.then(promessa=>{console.log(promessa.data);setHabitsList(...[promessa.data])})
        getHabits.catch(error=>{console.log(error);})
        setRequestHabits(false);}
    },[requestHabits]);


    function toggleForms(){
        if(formsVisible ==true){setFormsVisible(false)}
        else{setFormsVisible(true)}
    }
    function handleInputDays(e){
        if(inputDays.includes(e.target.value)){
            const tempArray = []
            inputDays.forEach(element => {
                if(element!=e.target.value)
                tempArray.push(element)
            });
            tempArray.sort(function(a, b){return a-b});
            setInputDays(...[tempArray]) 
        }
        else{
            const tempArray = []
            inputDays.forEach(element => {
                tempArray.push(element)
            });
            tempArray.push(e.target.value)
            tempArray.sort(function(a, b){return a-b});
            setInputDays(...[tempArray]) 
        }
    }
    function saveHabit(){
        const tempObj=
        {
            name:inputName,
            days:inputDays
        }
        setInputHabit(tempObj);
        const postInput = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",tempObj,config);
        postInput.then(promessa => console.log(promessa))
        postInput.catch(erro => console.log(erro))
        setRequestHabits(true);

    }

return(
    <TodayStyled>
        <header>
            <h1>TrackIt</h1>
            <img src={image}></img>
        </header>
        <main>
        <nav>
            <h2>Meus habitos</h2>
            <button onClick={toggleForms}>+</button>
        </nav>
        {formsVisible && (
        <section className='forms'>
          <input type='text' placeholder='nome do habito' onChange={(e)=>setInputName(e.target.value)}></input>
          <div className='container'>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="0">D</button>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="1">S</button>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="2">T</button>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="3">Q</button>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="4">Q</button>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="5">S</button>
          <button className='dia' onClick={(e)=>handleInputDays(e)} value="6">S</button>
          </div>
          <div className='buttonsInput'>
          <button onClick={toggleForms}>Cancelar</button>
          <button onClick={saveHabit} >Salvar</button>
          </div>
        </section>
        )}        
        {habitsList.map((habit,index) => (
            <div key={index}>
                <h4>{habit.name}</h4>
            </div>

        ))}
        {habitsList.length ==0?<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>:<></>}
        </main>
        
        <footer>

        </footer>
    </TodayStyled>
)
}

const TodayStyled = styled.div`
main{
    width:100%;
    padding:40px;
    display:flex;
    flex-direction:column;
    align-items:center;
}
background: #E5E5E5;
display:flex;
flex-direction:column;
align-items:center;
.container{
    display:flex;
    justify-content:left;
    margin-bottom:30px;
}
.container > button{
    margin-right:4px;
    box-sizing:border-box;
    width: 30px;
height: 30px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
}
section{
    box-sizing:border-box;
    display:flex;
    flex-direction:column;
    padding:17px;
    background: #FFFFFF;
border-radius: 5px;
width: 80%;
height: 180px;
}
nav {
    height:70px;
    width:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:17px;
}
nav > h2{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 22.976px;
line-height: 29px;
color: #126BA5;
}
nav > button:hover{
    cursor: pointer;
}
section > input{
    box-sizing: border-box;
    width: 90%;
height: 45px;
margin-bottom:6px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
padding-left:11px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
color: #DBDBDB;
margin-bottom:8px;
}

nav > button{
    display:flex;
    justify-content:center;
    align-items:center;
width: 40px;
height: 35px;
left: 317px;
top: 92px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 26.976px;
line-height: 34px;
text-align: center;
color: #FFFFFF;
background: #52B6FF;
border-radius: 5px;
border-width:0px;
}
.dia:hover{
    cursor:pointer;
}
.buttonsInput{
    display:flex;
    justify-content:right;
}
.buttonsInput > button:hover{
    cursor: pointer;
}
.buttonsInput button{
    border-width:0px;
    margin-right:5px;
    width: 84px;
height: 35px;
background: #52B6FF;
border-radius: 4.63636px;
}
.disabled{
    display:none;
}
header{width: 100%;
height: 70px;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content:space-between;
align-items:center;
padding-left:18px;
padding-right:18px;
box-sizing:border-box;}
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
p{
    margin-top:30px;
    width:90%;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;

color: #666666;


}



`