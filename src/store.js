import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  getPokemonsReducer,
  getPokemonDetailReducer,
  getPokemonByName,
} from './reducers/pokemonReducers';

import { favoriteReducer } from './reducers/favoriteReducers';

const reducer = combineReducers({
  pokemonList: getPokemonsReducer,
  pokemonDetail: getPokemonDetailReducer,
  pokemonSearch: getPokemonByName,
  favorite: favoriteReducer,
});

const favoriteItemsFromStorage = localStorage.getItem('favoriteItems')
  ? JSON.parse(localStorage.getItem('favoriteItems'))
  : [];

const initialState = {
  favorite: {
    favoriteItems: favoriteItemsFromStorage,
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
