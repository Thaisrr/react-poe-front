const Conditionnel = function() {
    const is_logged = true;
    const has_error = true;
    const age = undefined;

    return (
        <main>
            <h1>Affichage Conditionnel</h1>

            <p>Pour faire l'affichage conditionnel, on peut passer par une fonction ou un composant qui retourne
                du JSX en fonction d'une condition, à l'aide d'un if, ou d'un switch.
            </p>

            <h2>Si... Sinon</h2>

            <p>Dans une syntaxe "si vrai alors... sinon ....", on peut utiliser du ternaire.</p>
            {/* WTF */}
            <p>Vous êtes : {(is_logged)? <span>Connecté.e</span> : <span>Hors Ligne</span>}</p>

            <h2>Si... alors ( sinon rien )</h2>

            <h3>Rappels : </h3>

            <p>Valeurs falsy: <i>undefined, "", '', ``, null, 0, false, NaN,</i> qui, quand elles sont testées, retournent false.</p>


            <p>Si has_error est vrai, on affiche le message d'erreur : 
                { has_error && <i style={{color: 'red'}}>Oh No ! Il y a une erreur !</i>}
            </p>

            <p>Si is_logged est faux, on affiche un message</p>

            {is_logged || <p>Connectez-vous pour profiter de toutes les fonctionnalités</p>}

            { !is_logged && <p>Connectez-vous pour profiter de toutes les fonctionnalités</p>}

            <p>Age : 
                { age ?? 'Aucun age n\'a été fournit'} 
            </p>
            <p>La syntaxe <code>{"age ?? 'Aucun age n'a été fournit'"}</code> permet d'afficher
            l'age si il existe, et le message d'erreur si age est null ou undefined.
            </p>

            <p>Pour afficher le message d'erreur uniquement, si l'age est undefined :
                <code>{" { age === undefined && <p>Aucun âge n'a été fournit</p>}"}</code>
             </p>
            { age === undefined && <p>Aucun âge n'a été fournit</p>}
            { (age || age === 0) || <p>Aucun âge n'a été fournit</p>}
           


        </main>
    )
}
export default Conditionnel;