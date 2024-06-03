import React from "react";
import {Router,Routes, Route, Switch } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ChatPage from "../Pages/ChatPage";

function Routing() {    
    return (
            <Routes>
                <Route path="/" element={<HomePage/>} />  
                <Route path="/chat" element={<ChatPage />} />  
            </Routes>           
        
    );
}

export default Routing