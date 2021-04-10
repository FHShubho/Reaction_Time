import github_logo from './images/github.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Reaction Time</h1>

            <div className="links">
                <Link to="./">Home</Link>
                <Link to="./Scoreboard">History</Link>
            </div>

            <div className="footer">
                <a href="https://fhshubho.netlify.app/">Fahimul Hoque</a> | Soure Code <a href="https://github.com/FHShubho/Reaction_Time"><img src={github_logo} alt=""/></a>
            </div>
        </nav>
    );
}
 
export default Navbar;