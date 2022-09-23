import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Error from "../components/Error";
import { handleError } from "../services/errorHandler";

const UserDetails = function() {
    
    const {id} = useParams();
    const url = 'http://localhost:8080/users';
    const [user, setUser] = useState();
    const [error, setError] = useState();
    const navigate = useNavigate();
    
    useEffect(() => {

    

        axios.get(`${url}/${id}`)
            .then( ({data}) => setUser(data) )
            .catch(err => handleError(err, setError))
    }, [id, url]);

    async function deleteUser() {
        const confirm = window.confirm(`Êtes vous sûr.e de vouloir supprimer ${user.username}`)
        if(confirm) {
            await axios.delete(`${url}/${id}`);
            navigate('/users');
        }
 
    }

    const UserCard = () => (
        <div>
            <h2>{user.title} {user.username}</h2>
            <ul>
                <li>Email : {user.email}</li>
                <li>Pronoms: {user.pronouns}</li>
            </ul>
            <p>
                <button onClick={() => deleteUser()}>Supprimer</button>
            </p>
        </div>
    )
    

    return (
        <main>
            <h1>Détails</h1>
            { user && <UserCard/> }
            { (!user && !error) && <p>Chargement en court</p>}
            { error && <Error>{error}</Error>}
            <p>
                <button onClick={() => navigate(-1)}>Back</button>
            </p>
        </main>
    )
}
export default UserDetails;