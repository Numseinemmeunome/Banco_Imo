import { Link } from "react-router-dom";
import "./Navbar.css"
const Navbar = () => {

    return(
        
            <nav className="nav">
                <div className="nav-logo">
                    <p>Banco Imo.</p>
                </div>
                <div className="nav-menu">
                    <ul>
                    <li><Link to="/" className="link active">Home</Link></li>
                    <li><Link to="Pedro" className="link">Pedro</Link></li>
                    <li><Link to="Rules" className="link">Rules</Link></li>
                    <li><Link to="Cards" className="link">Cards</Link></li>
                    <li><Link to="About" className="link">About</Link></li>
                    </ul>
                </div>  
            </nav>  

    )
}
export default Navbar