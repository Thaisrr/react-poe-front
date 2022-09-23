import {createSlice} from '@reduxjs/toolkit';

export const panierSlice = createSlice({
    name: 'panier',
    initialState: {
        counter: 0,
        content: [],
    },
    reducers: {
        increment: function(panier) {
            panier.counter++;
        },
        decrement: function(panier) {
            panier.counter--;
        },
        incrementByAmount(panier, action) {
            panier.counter += action.payload; // paramétre
        }
    }
});

export default panierSlice.reducer; // pour store/index.js
export const {increment, decrement, incrementByAmount} = panierSlice.actions; // composants
// export const increment = panierSlice.action.increment;

