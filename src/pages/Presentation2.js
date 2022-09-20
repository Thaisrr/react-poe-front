const Presentation2 = function() {

    const jsx = <span>Hello World</span>
    const is_logged = false;
    const paragraphs = [
        <p>Paragraphe 1</p>,
        <p>Paragraphe 2</p>,
        <p>Paragraphe 3</p>,
    ];

    const restos = ['Pitaya', 'Bali Bao'];
    const fastfoods = ['Burger King', 'McDo'];
    const sandwichs = ['Will Be', 'Subway'];



    // WTF  : What? true : false
    // let status = (is_logged)? 'Connecté' : 'Hors Ligne';
   

    function getMessage() {
        return (
            <>
                <p>Il est également possible d'utiliser des fonctions pour récupérer du JSX.</p>
                <p>Dans ce cas, la fonction doit retourner du JSX.</p>
                <p>On peut ensuite l'utiliser entre accolades: { "getMessage()" }</p>
            </>
        )
    }

    function MessageBis() {
        return (<>
            <p>On peut utiliser ces fonctions comme des composants : </p>
            <p>On utilise alors cette syntaxe: { " <MessageBis/> " }</p>
        </>);
    }

    function getStatus() {
        if(is_logged) {
            return <p>Vous êtes en ligne</p>
        } else {
            return <p>Veuillez vous connecter</p>
        }
    }

    function FoodTime() {
        const now = new Date();
        const hour = now.getHours();

        if(hour >= 6 && hour < 11) { 
            return <p>Breakfast Time !</p>
        } 
        if(hour >= 11 && hour < 12) {
            return <p>Brunch Time</p>
        }

        if(hour >= 12 && hour < 14 ) {
            return <p>Lunch Time</p>
        }

        if(hour >= 18 && hour < 21) {
            return <p>Diner time</p>
        }

        return <p>Gouter Time !</p> 
    }

    function getListe(arr) {
        const l_jsx = [];
        for(let item of arr) {
            const jsx = <li>{item}</li>;
            l_jsx.push(jsx);
        }
        return l_jsx;
    }

    function allUl(...arrays) {
        const uls = [];
        arrays.forEach( (arr) => {
            const ul = <ul>{arr.map(r => <li>{r}</li>)}</ul>
            uls.push(ul)
        })
        return uls;
    }
    

    return (
        <main id="Presentation2">
            <h1>Présentation, suite</h1>

            <h2>Interprétation du JSX</h2>
            <p>On peut interpréter du JSX avec les accolades : {jsx}</p>
            {getMessage()}
            <div>
                <MessageBis/>
            </div>

            <h2>Affichage Conditionnel</h2>

            <h3>Si... Sinon</h3>

            <p>Votre status : {(is_logged)? 'Connecté' : 'Hors Ligne'} </p>

            {getStatus()}

            <p>What time is it ?</p>
            <FoodTime/>


            <h2>Tableaux</h2>

            <p>Le JSX peut interpréter des tableaux ( Array ) de JSX : </p>
            {paragraphs}

            <h3>Créer un tableau de JSX avec un for</h3>
            <ul>
                {getListe(restos)}
            </ul>

            <h3>... avec un map</h3>

            <ul>
                {restos.map(item => <li>{item}</li>)}
            </ul>

            <h3>Création de ul pour plusieurs tableaux</h3>
            
            {allUl(restos, fastfoods, sandwichs)}


        </main>
    )
}

export default Presentation2;