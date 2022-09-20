import { Child1, Child2, Child3, Child4, Child5 } from "../components/Childs";

const Props = () => {
    const message = "I'm a props";
    const jsx = <span>Mon titre</span>;
    const product = {title: 'Oranges Bleues', price: 32};
    const all_products = [
        {name: 'Tomates Carrées', price: 46},
        {name: 'Citrons sans acidité', price: 18},
        {name: 'Pomme violette salée', price: 52}
    ]

    function addToBasket(prod) {
        console.log(prod + " ajouté au panier !")
    }

    /*
    function displayProducts() {
        const arr_jsx = []
        for(let item of all_products) {
            const jsx = <Child2 nom={item.name} price={item.price}/>
            arr_jsx.push(jsx);
        }
        return arr_jsx;
    }
*/
    return (
        <main>
            <h1>Les Props</h1>

            <h2>Props children ( "slot" équivalent ) </h2>
            <Child1>Hello World</Child1>
            <Child1>Bonjour le monde</Child1>
            <Child1>{message}</Child1>
            <Child1>{jsx}</Child1>
            <Child1>
                <i>Bonjour</i>
                <b>Le monde</b>
            </Child1>

            <h2>Les props</h2>
            <p>Dans le composant enfant, les props reçues
                sont en lecture seule : on ne doit les modifier.
            </p>

            <Child2 nom="Patate en or" price="43"/>
            <Child2 nom={product.title} price={product.price}/>
            {all_products.map(item => <Child2 nom={item.name} price={item.price}/>)}
     

            <Child3 product={product} />

            <Child4 nom="Framboises en ruby" price="543" 
            description="C trè chér"/>
            <Child4 nom={product.title} price={product.price}/>

            <h2>Passer des fonctions</h2>

            <Child5 produit="Pokemon" action={addToBasket}/>

        </main>
    )
}
export default Props;