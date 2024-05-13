import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import "./Navbar.css"

const Navbar = () => {
    const [menuRight, setMenuRight] = useState('-200px'); // Initial state is '-200px'

    const toggleMenu = () => {
        setMenuRight(menuRight === '-200px' ? '0' : '-200px');
    }

    return(
        
            <nav className="nav">
                <div className="nav-logo">
                    <p>Banco Imo.</p>
                </div>
                
                <div className="nav-menu" id="navMenu" style={{ right: menuRight }}>
                    <IoMdClose className="closeIcon"  onClick={toggleMenu}/>
                    <ul>
                    <li><Link to="/" className="link active">Home</Link></li>
                    <li><Link to="Profile" className="link">Profile</Link></li>
                    <li><Link to="Rules" className="link">Rules</Link></li>
                    <li><Link to="Cards" className="link">Cards</Link></li>
                    <li><Link to="Pedro" className="link">Pedro</Link></li>
                    </ul>
                </div>  
                <FaBars className="openIcon" onClick={toggleMenu}/>
                
            </nav>  

    )
}
export default Navbar