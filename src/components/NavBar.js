import { NavLink } from "react-router-dom";
import '../style/NavBar.css';
const NavBar = () => (
    <nav id="Nav">
        <ul>
            <li>
                <NavLink to="/" end>Présentation</NavLink>
            </li>
            <li>
                <NavLink to="/presentation">Présentation 2</NavLink>
            </li>
            <li>
                <NavLink to="/affichage-conditionnel">Affichage Conditionnel</NavLink>
            </li>
            <li>
                <NavLink to="/props">Props</NavLink>
            </li>
            <li>
                <NavLink to="/reactivity">Réactivité</NavLink>
            </li>


        </ul>
    </nav>
)
export default NavBar;