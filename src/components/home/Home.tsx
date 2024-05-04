import React from "react"
import { useState } from "react";
import './Home.css'

const Home = () => {

    return(
    <div className="homer">

        <img
        className="img-bg"
        src="./src\assets\Empresa.jpg"
        alt="Random image"/>

        <nav className="nav">
        <div className="nav-logo">
            <p>Banco Imo.</p>
        </div>
        <div className="nav-menu">
            <ul>
                <li><a href="#" className="link active">Home</a></li>
                <li><a href="#" className="link">Pedro</a></li>
                <li><a href="#" className="link">Rules</a></li>
                <li><a href="#" className="link">Cards</a></li>
                <li><a href="#" className="link">About</a></li>
            </ul>
        </div>
    </nav>    
        <div className="main">
            <div className="container">
                <div className="section">
                    <h1>Banco Imo</h1>
                    <h2>Batatatata</h2>
                </div>
            </div>
        </div>
    </div>
    )
    
    
}
export default Home;