import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"
import HabitsScreen from "./HabitsScreen"
import TodayScreen from "./TodayScreen"
import HistoryScreen from "./HistoryScreen"

export default function App(){
const [userInfo,setUserInfo] = useState({})
return(
    <>

    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<LoginScreen setUserInfo={setUserInfo} userInfo={userInfo}/>}></Route>
            <Route path="/cadastro" element={<RegisterScreen/>}></Route>
            <Route path="/habitos" element={<HabitsScreen userInfo={userInfo} image={userInfo.image} />}></Route>
            <Route path="/hoje"  element={<TodayScreen image={userInfo.image} userInfo={userInfo}/>}></Route>
            <Route path="/historico"  element={<HistoryScreen image={userInfo.image}/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
)
}