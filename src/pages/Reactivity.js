import { useEffect, useState } from "react";
import Code from '../components/Code';

const Reactivity = function()  {
    
    let counter = 0;

    const state = useState(10);
    // Renvoit un tableau, qui contient 2 valeurs : 
    //      - La valeur actuelle de la donnée surveillée ( le state, l'état ) ( ici, 10 )
    //      - Une fonction qui permet de modifier la valeur surveillée ( le state, l'état )
    const counter2 = state[0];
    const setCounter2 = state[1];

    const [counter3, setCounter3] = useState(100); 

    function increment() {
        // Counter non reactif
        counter++;
        console.log(`Counter a été modifié : ${counter}`)

        // Counter reactif ( avec useState )
        setCounter2( counter2 + 1 );
        setCounter3(counter3 + 1);
    }

    /******* UseState avec les tableaux : *****/
   // const fruits = ['Pomme', 'Poire', 'Ananas', 'Abricot'];
    const [fruits, setFruits] = useState(['Pomme', 'Poire', 'Ananas', 'Abricot'])
   
    function addFruit(new_fruit) {    
    // Solution de Sofiane
        //const new_arr = fruits.concat([new_fruit]);
        //setFruits(new_arr);

    // Autre solution
        // const copy = Array.from(fruits); // Créé un nouveau tableau en mémoire
        //const copy = [...fruits];
        // copy.push(new_fruit);
        // setFruits(copy);

    // Destructuration level 100
       // const copy = [...fruits, new_fruit];
       // setFruits(copy);

    // Level faignasse
        setFruits([...fruits, new_fruit]);
      
    }

    function deleteFromFruits(index) {
        // splice -> méthode pour supprimer d'un tableau
        // index de l'élément à supprimer
        //const index = fruits.indexOf(fruit_to_delete);
         const copy = [...fruits];
        copy.splice(index, 1);
        setFruits(copy);

      //  setFruits([...fruits].splice(index, 1));

    }

    /*** Use State avec des objets  *****/
    const [book, setBook] = useState({id: 1, title: 'Franqueinechtégne', author: 'Mary Shelley'});

    function correct() {
        const correct_title = 'Frankenstein';

        // avec SetBook, enregistrer un objet qui reprend les données de book, mais en modifiant title
        // book.title = correct_title; -> non
        //const copy = Object.create(book); // créé une copie de l'objet
        const copy = {...book}; // créé une copie de l'objet book
        copy.title = correct_title;
        setBook(copy);

        // setBook({...book, title: correct_title})
    }

    /*********** Tableau d'objet *****/
    const [games, setGames] = useState([
        {id: 1, title: 'The Witcher'},
        {id: 2, title: 'The Last of Us'},
        {id: 3, title: 'Ori and the Child of Light'},
        {id: 4, title: 'Alice Madness Return'},
    ])

    function upperTitle(jeu) {
        // mettre le titre du jeu en majuscule, et sauvegarder les modifications pour les afficher : 
        // const modified_games = games.map((jeu) => ({...jeu, title: jeu.title.toUpperCase() }))
        /*
        const modified_jeu = {...jeu};
        modified_jeu.title = jeu.title.toUpperCase();

        const game_copy = [...games];
        const index = games.indexOf(jeu);
        game_copy.splice(index, 1, modified_jeu);

        setGames(game_copy);
        */

        /******* ****/
        const index = games.indexOf(jeu);
        const game_copy = [...games];
        game_copy[index].title = jeu.title.toUpperCase();
        setGames(game_copy);
        
    }

    return (
        <main>
            <h1>La Réactivité dans React</h1>
            <article>
                <h2>Présentation</h2>
                <p>Compteur : <b>{counter}</b></p>
                <p>Compteur 2 ( useState ) <b>{counter2}</b></p>
                <p>Compteur 3: <b>{counter3}</b></p>
                <p>
                    <button onClick={() => increment()}>Incrémenter</button>
                </p>
            </article>
            <article>

          
            <h2>Use State</h2>

            <p>En React, le DOM ne se met pas automatiquement à jour lorsque les variables affichées sont modifiées.</p>
            <p>Si on souhaite que certaines variables soient Réactives, et donc que le DOM affiche en temps réel sa valeur, il
                faut passer par le hook d'effet, ou hook d'état : <Code>useState</Code>.
            </p>

            <p>UseState est une fonction, importée de 'react', et qui attend 1 paramétre, et retourne un tableau.</p>
            <p><Code> useState(initial_value: any) : Array[any, function] </Code></p>

            <p>Le paramétre correspond à la valeur intiale, par défaut de notre donnée.</p>
            <p>La premier élément du tableau retourné, correspond à l'état actuel de la donnée ( sa valeur précise )</p>
            <p>Cette valeur s'enregistre dans une constante, on ne peut pas la modifier directement. Elle est en lecture seule.</p>
            <div><Code>const state = useState(0) // On intialise l'état</Code></div>
            <div><Code>const compteur = state[0] // On enregistre la valeur dans une variable compteur</Code></div>
            <div>Il est interdit de faire <Code>compteur = [nouvelle valeur]</Code>, ni <Code>compteur++</Code></div>

            <p>Le deuxième élément retourné par useState est une fonction, qui permet de modifier la valeur de la donnée.</p>
            <div><Code>const setCompteur = state[1]</Code></div>
            <p>Par convention on nomme la fonction par le nom de la valeur ( ici, compteur ), préfixé par le verbe "set", en camelCase : setCompteur.</p>

            <p>Cette fonction attend 1 paramétre : la nouvelle valeur à assigner à la donnée.</p>

            <p><Code>compteur</Code> : permet d'accéder à tout moment à la valeur de la donnée</p>
            <p><Code>setCompteur( [nouvelle valeur] )</Code> : permet de modifier la donnée</p>

            <p>On utilise la destructuration pour créer les variables : </p>
            <p><Code>const [compteur, setCompteur] = useState(0)</Code></p>
            
            </article>
            <article>
                <h2>Le cas des tableaux</h2>

                <h3>Mes fruits : </h3>
                <p>
                    <button onClick={() => addFruit('poire')}>🍐</button>
                    <button onClick={() => addFruit('raisin')}>🍇</button>
                    <button onClick={() => addFruit('ananas')}>🍍</button>
                    <button onClick={() => addFruit('pasteque')}>🍉</button>
                    <button onClick={() => addFruit('orange')}>🍊</button>
                    <button onClick={() => addFruit('citron')}>🍋</button>
                    <button onClick={() => addFruit('coing')}>🍈</button>
                    <button onClick={() => addFruit('fraise')}>🍓</button>
                    <button onClick={() => addFruit('noix de coco')}>🥥</button>
                    <button onClick={() => addFruit('cerise')}>🍒</button>
                    <button onClick={() => addFruit('tomate')}>🍅</button>
                    <button onClick={() => addFruit('kiwi')}>🥝</button>
                </p>
                <ul>
                    {fruits.map( (f, i) => <li key={f}>{f} <button onClick={() => deleteFromFruits(i)}>Supprimer</button></li>)}
                </ul>
            </article>
            <article>
                <h2>UseState avec des objets</h2>
                <div>
                    <h3>{book.title}</h3>
                    <p>--{book.author}</p>
                </div>
                <button onClick={() => correct()}>Corriger le titre</button>
            </article>
            <article>
                <h2>Use State avec un tableau d'objets</h2>
                <ul>
                    {games.map(jeu => <li key={jeu.id}>{jeu.title}  <button onClick={() => upperTitle(jeu)}>UpperCase</button></li>)}
                </ul>
            </article>
        </main>
    )
}
export default Reactivity;