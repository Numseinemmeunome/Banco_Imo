import React from "react"
import { useState } from "react";
import './Pedro.css'
import { useNavigate } from "react-router-dom";
import { PlayerProfile } from "../../@types/Profile";

const Pedro = () => {
    const [playerProfile, setPlayerProfile] = useState([]);
    

    return( 
        <div className="container">
            <div className="container-gamble">
                <ul>
                    <li id="fifthfifth"> </li>
                </ul>
            </div>

        </div>
    );
}

export default Pedro;