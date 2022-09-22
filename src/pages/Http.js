import axios from "axios";
import { useState } from "react";
import Error from "../components/Error";

const Http = () => {

    const url = 'https://jsonplaceholder.typicode.com/';
    const chemin = 'usersdsqdsq';
    let [users, setUsers] = useState();
    let [error, setError] = useState();

    async function getUsers() {
        try {
            const response = await axios.get(url + chemin)
            setUsers(response.data);
        } catch (err) {
            setUsers();
            handleError(err);
        }
    }

    function getUsersBis() {
        axios.get(url + chemin)
        .then(res => setUsers(res.data))
        .catch(err => {
            setUsers();
            handleError(err);
        })

    }

    function handleError(error) {
        if(error.request && error.request.status === 404) {
            setError("La ressource n'a pas été trouvée");
        } 
        else {
            setError("Oups, quelque chose n'a pas fonctionné, rééssayez plus tard");
        }
        setTimeout(() => {
            setError();
        }, 40000)
    }

    return (
        <>
            <h1>Requêtes HTTP</h1>

            <h2>Users</h2>

            <p>
                <button onClick={() => getUsers()}>Récupérer les users</button>
            </p>
            <ul>
                { users && users.map(u => <li key={u.id}>{u.name}</li>) }
            </ul>

            {error && <Error>{error}</Error>}
        </>
    )
}
export default Http;