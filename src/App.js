import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"
import TodayScreen from "./TodayScreen"

export default function App(){
const [userInfo,setUserInfo] = useState({})
return(
    <>

    <BrowserRouter>
        <GlobalStyle/>
        <Routes>
            <Route path="/" element={<LoginScreen setUserInfo={setUserInfo} userInfo={userInfo}/>}></Route>
            <Route path="/cadastro" element={<RegisterScreen/>}></Route>
            <Route path="/hoje" element={<TodayScreen userInfo={userInfo} image={userInfo.image} />}></Route>
        </Routes>
    </BrowserRouter>
    </>
)
}