import axios from "axios";
import { useState } from "react";
import Error from "../components/Error";
import { handleError } from "../services/errorHandler";

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
            handleError(err, setError);
        }
    }

    function getUsersBis() {
        axios.get(url + chemin)
        .then(res => setUsers(res.data))
        .catch(err => {
            setUsers();
            handleError(err, setError);
        })

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