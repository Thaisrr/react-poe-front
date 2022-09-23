import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Users = function() {
    const [users, setUsers] = useState();

   

    // S'appelle une première fois au premier rendu du DOM, pour jouer la fonction passée en callback
    // Puis, à chaque fois que les données qu'il surveille sont modifiées
    // Les données à surveiller sont passées dans le tableau, en 2eme paramètre de fonction

    // Ici, il n'y a pas de données à surveiller, donc ne s'appelle qu'une fois au chargement de la page
    // Sert pour effectuer une action une seule fois au chargement de la page
    useEffect(() => {
        async function getUsers() {
            const url = 'http://localhost:8080/users';
            // axios.get retourne un objet response HTTP qui contient des champs status, data,...
            // pour ne récupérer que data, on peut décomposer l'objet de réponse {data} => équivalent de response.data
            const {data} = await axios.get(url);
            console.log("in get users")
            setUsers(data);
        }
        getUsers();
        
    }, []);
    // On ne peut pas utiliser de fonction déclarées dans le composant à l'intérieur de useEffect : 
    // On peut déclarer par contre la fonction directement dans useEffect ( pour fait du async await par exemple)
    // Attention, useEffect ne peut pas être directement async, 
    useEffect(() => {
        const url = 'http://localhost:8080/users';
        axios.get(url)
        .then(({data}) => setUsers(data));
    }, []);

    
    useEffect(() => {
        console.log('Users à été modifié')
    }, [users]);

    useEffect(() => {
        console.log('Le DOM à été modifié');
        // Ne surtout pas modifier le dom ici !
    })
    
    /* 
    useEffect sert à la création du composant, => []  en 2éme paramétre
    lors de modifications d'une donnée surveillée => [données à surveiller] en 2éme param
    lors de mise à jour du DOM => pas de 2éme paramètre 
    à la destruction du composant => return () => action à faire

    ATTENTION : 
    =>  si le useEffect surveille une donnée a, il ne doit pas ( jamais, never ) la modifier (=> boucle infinie)
    => si le useEffect n'a pas de [] en deuxième paramétre ( parce qu'il se déclanche à chaque mise à jour du DOM)
        il doit pas modifier le DOM -> boucle infinie
    => le useEffect ne doit pas utiliser de données déclarées dans composant, si il ne les surveille pas ( passée dans le [])       



    pour les composants en class, on utilisait les méthodes  : 
    componentDidMount, componentDidUpdate, componentWillUnmount

    */

    useEffect(() => {
        let counter = 0;
        const interval = setInterval(() => {
            counter++;
            console.log('counter : ', counter)
        }, 1000);
        return () => {
            // Fonction qui s'exécute à la destruction du composant ( par exemple : changement de page )
            clearInterval(interval); // Ici, on coupe les souscriptions aux flux ( webSocket, observables, ... )
            console.warn('Destruction du composant')
        }
    }, [])
    /*
    Pour faire une action à la destruction du composant, il faut passer une fonction qui fait cette action
    en retour du useEffect.
    Automatiquement, la fonction retournée par le useEffect se lancera au changement de page, ou destruction du composant
    */




    return (
        <main>
            <h1>Utilisateurs.trices</h1>

            <ul>
                {users && users.map(u => (
                    <li key={u.id}>
                       <NavLink to={`/user/${u.id}`}>{u.username}</NavLink> 
                    </li>
                ))}
            </ul>

        </main>
    )
}
export default Users;