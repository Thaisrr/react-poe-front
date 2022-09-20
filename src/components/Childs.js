export const Child1 = function(props) {
    return (
        <article>
            <p><small>**** Début du composant enfant 1***</small></p>
            <h3>{props.children}</h3>
            <hr/>
        </article>
    )
}

export const Child2 = function(props) {
    return (
    <article>
        <h3>{props.nom}</h3>
        <p>{props.price} € TTC</p>
    </article>
    );
}

// On peut passer n'importe quel type de donnée en props
export const Child3 = function(props) {
   return( <article>
        <h3>{props.product.nom}</h3>
        <p>{props.product.price} € TTC</p>
    </article>
   )
}

export const Child4 = function(
    {nom, price, description = 'Pas de description disponible' }
    ) {
    //const nom = props.nom;
    //const description = props.description;
    //const price = props.price;
   // const {nom, description, price} = props;

    return (
    <article>
        <h3>{nom}</h3>
        <p>{description}</p>
        <p>{price} € TTC</p>
    </article>
    );
}

export const Child5 = function({produit, action}) {
   
    function sayHello(foo) {
        console.log(foo);
    }
    return(
    <article>
        <h3>{produit}</h3>
        <p>
            
            <button onClick={(e) => sayHello('Hello World')}>Say Hello</button>
            <button onClick={() => action(produit)}>Ajouter au panier</button>
        </p>
    </article>
    );
}