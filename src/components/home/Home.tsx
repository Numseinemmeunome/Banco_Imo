import React from "react"
import { useState } from "react";
import './Home.css'
import { Route, Router } from "react-router-dom";

const Home = () => {

    const handleClick = () => {
        Route
    }
    return(
    <div className="homer">  
        <div className="main">
            <div className="container">
                <div className="section">
                    <h1>Banco Imo</h1>
                    <h2>Batatatata</h2>
                </div>
            <button className="button" onClick={handleClick}>Acessar
                <div className="seta"></div>
            </button>
            </div>
        </div>
    </div>
    )
    
    
}
export default Home;