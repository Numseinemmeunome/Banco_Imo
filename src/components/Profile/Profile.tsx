import React from "react"
import { useState } from "react";
import './Profile.css'
import { Link } from "react-router-dom";
import ProfilePage from "./ProfilePage";

const Profile = () => {


    return (
        <section className="character-window">

            
            <section className="profile">
                <ul>
                <li id="profile">profile</li>
                <li id="atributes">atributes</li>
                <li id="cards">cards</li>
                <li id="properties">properties</li>
                </ul>
            </section>
        </section>
        
    )
}

export default Profile