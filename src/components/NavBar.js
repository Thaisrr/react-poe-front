import { NavLink } from "react-router-dom";
import '../style/NavBar.css';
import {useSelector} from "react-redux";
const NavBar = () => {
    const counter = useSelector(state =>state?.panier?.counter);


return (
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
            <li>
                <NavLink to="/http">Requêtes HTTP</NavLink>
            </li>
            <li>
                <NavLink to="/forms">Formulaires</NavLink>
            </li>
            <li>
                <NavLink to="/users">Users</NavLink>
            </li>
            <li>
                <NavLink to="/redux">Redux : {counter}</NavLink>  
            </li>
        </ul>
    </nav>
)
}
export default NavBar;