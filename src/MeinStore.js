import {createStore} from 'redux';
import { reducer } from './MeinReducer';


 


export const initialState = {
    farbe: 'green'
};

export const store = createStore(reducer, initialState);



