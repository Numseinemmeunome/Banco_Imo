import React from "react"
import { useState } from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    let navigate = useNavigate(); 
    const routeProfile = () =>{ 
        let path = 'Profile'; 
        navigate(path);
    }
    const routeRules = () =>{ 
        let path = 'Rules'; 
        navigate(path);
    }

    return(
    <div className="main">

            <section className="profile">
                <div className="container-profile">
                    <h1>Banco Imo</h1>
                    <h2>BaTATATATAT
                        TATATATATAT
                        TATATATATA
                        TATttatatata</h2>
                    <button className="btn" onClick={routeProfile}>Começar
                        <div className="seta"></div>
                    </button>  
                </div>
            </section>
            

            
            <section className="rules">
                <div className="container-rules">
                    <h1>Banco Imo</h1>
                    <h2>BaTATATATATTATATATATAT
                        TATATATATATATttatatata</h2>
                    <button className="btn" onClick={routeRules}>Acessar
                        <div className="seta"></div>
                    </button>  
                </div>    

             </section>
           
        
    </div>
    )
    
    
}
export default Home;