import {configureStore} from '@reduxjs/toolkit';
import  panierSlice from './panier';

const stores = configureStore({
    reducer: {
        panier: panierSlice
    }
})
export default stores;