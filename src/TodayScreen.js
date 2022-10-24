import Header from "./Header"
import Footer from "./Footer"
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";

export default function TodayScreen({image,userInfo}){
    const [habitsList, setHabitsList] =useState([])
    const config = {
        headers:{
          Authorization: `Bearer ${userInfo.token}`
        }
      };
      const [requestHabits,setRequestHabits] =useState(true);
      const [daysOfWeek, setDaysOfWeek] = useState(["D","S","T","Q","Q","S","S"])
    useEffect(() => {
        if(requestHabits==false){}
        else{
        const getHabits = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits",config)
        getHabits.then(promessa=>{console.log(promessa.data);setHabitsList(...[promessa.data])})
        getHabits.catch(error=>{console.log(error);})
        setRequestHabits(false);}
    },[requestHabits]);


    return(
        <>
        <Header image={image}/>
        <TodayStyled>
        <ul>   
        {
        habitsList.map((habit,index) => (
            <li key={index}>
                <h4>{habit.name}</h4>
            </li>

        ))}
        </ul> 
        </TodayStyled>
        <Footer/>
        </>
    )
}
const TodayStyled = styled.div`
display:flex;
justify-content:center;
li{
    display:flex;
    flex-wrap:wrap;
    width: 340px;
height: 91px;

background: #FFFFFF;
border-radius: 5px;
margin-bottom:10px;
padding:15px;
}
li h4{
    width:100%;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

/* identical to box height */

color: #666666;


}
li div{
    display:flex;
    justify-content:center;
    align-items:center;
    margin-right:5px;
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;

/* identical to box height */


    width: 30px;
height: 30px;

border: 1px solid #D5D5D5;
border-radius: 5px;
}
.white{
    background: #FFFFFF;
    color: #DBDBDB;
}
.Grey{
    background: #CFCFCF;

color: #FFFFFF;


}
width:100%;
height:800px;
margin-bottom:70px;
margin-top:70px;
background: #F2F2F2;
`