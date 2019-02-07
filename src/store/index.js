import { createStore, combineReducers } from 'redux';
import {landingReducer, loginReducer} from '../reducers/landingReducer.js';

export const store = createStore(
    combineReducers({
        landingReducer,
        loginReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

