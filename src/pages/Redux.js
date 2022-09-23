import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement, incrementByAmount } from '../store/panier';

const Redux = function() {
    const counter = useSelector(state => state?.panier.counter);
    const dispatch = useDispatch(); // Donne accès aux actions


    return (
        <main>
            <h1>Redux</h1>
            <p>Compteur : {counter}</p>
            <p>
                <button onClick={() => dispatch(increment())}>++</button>
                <button onClick={() => dispatch(decrement())}>--</button>
                <button onClick={() => dispatch(incrementByAmount(10))}>+10</button>
            </p>
        </main>
    )
}

export default Redux;