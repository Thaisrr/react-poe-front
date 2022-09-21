import { useEffect, useState } from "react";

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



    return (
        <main>
            <h1>La Réactivité dans React</h1>

            <h2>Présentation</h2>
            <p>Compteur : <b>{counter}</b></p>
            <p>Compteur 2 ( useState ) <b>{counter2}</b></p>
            <p>Compteur 3: <b>{counter3}</b></p>
            <p>
                <button onClick={() => increment()}>Incrémenter</button>
            </p>

            <h2>Use State</h2>

            <p>En React, le DOM ne se met pas automatiquement à jour lorsque les variables affichées sont modifiées.</p>
            <p>Si on souhaite que certaines variables soient Réactives, et donc que le DOM affiche en temps réel sa valeur, il
                faut passer par le hook d'effet, ou hook d'état : <code>useState</code>.
            </p>

            <p>UseState est une fonction, importée de 'react', et qui attend 1 paramétre, et retourne un tableau.</p>
            <p><code> useState(initial_value: any) : Array[any, function] </code></p>

            <p>Le paramétre correspond à la valeur intiale, par défaut de notre donnée.</p>
            <p>La premier élément du tableau retourné, correspond à l'état actuel de la donnée ( sa valeur précise )</p>
            <p>Cette valeur s'enregistre dans une constante, on ne peut pas la modifier directement. Elle est en lecture seule.</p>
            <div><code>const state = useState(0) // On intialise l'état</code></div>
            <div><code>const compteur = state[0] // On enregistre la valeur dans une variable compteur</code></div>
            <div>Il est interdit de faire <code>compteur = [nouvelle valeur]</code>, ni <code>compteur++</code></div>

            <p>Le deuxième élément retourné par useState est une fonction, qui permet de modifier la valeur de la donnée.</p>
            <div><code>const setCompteur = state[1]</code></div>
            <p>Par convention on nomme la fonction par le nom de la valeur ( ici, compteur ), préfixé par le verbe "set", en camelCase : setCompteur.</p>

            <p>Cette fonction attend 1 paramétre : la nouvelle valeur à assigner à la donnée.</p>

            <p><code>compteur</code> : permet d'accéder à tout moment à la valeur de la donnée</p>
            <p><code>setCompteur( [nouvelle valeur] )</code> : permet de modifier la donnée</p>

            <p>On utilise la destructuration pour créer les variables : </p>
            <p><code>const [compteur, setCompteur] = useState(0)</code></p>
        </main>
    )
}
export default Reactivity;