import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyle from "./assets/styles/GlobalStyle"
import LoginScreen from "./LoginScreen"
import RegisterScreen from "./RegisterScreen"

export default function App(){

return(
    <>

    <BrowserRouter>
        <GlobalStyle/>
        <div>AAAAAAAAAAAAAA</div>
        <Routes>
            <Route path="/" element={<LoginScreen/>}></Route>
            <Route path="/cadastro" element={<RegisterScreen/>}></Route>
        </Routes>
    </BrowserRouter>
    </>
)
}