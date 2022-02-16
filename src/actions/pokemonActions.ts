import { Dispatch } from 'redux';
import {
  PokemonItemDispatchTypes,
  PokemonListDispatchTypes,
} from './pokemonActionsTypes';
import axios from 'axios';
import {
  POKEMON_LIST_REQUEST,
  POKEMON_LIST_SUCCESS,
  POKEMON_LIST_FAIL,
  POKEMON_DETAIL_REQUEST,
  POKEMON_DETAIL_SUCCESS,
  POKEMON_DETAIL_FAIL,
  POKEMON_ITEM_REQUEST,
  POKEMON_ITEM_SUCCESS,
  POKEMON_ITEM_FAIL,
} from '../constants/pokemonConstants';

const getPokemons = (limit = 20, offset = 0) => {
  return async (dispatch: Dispatch<PokemonListDispatchTypes>) => {
    try {
      dispatch({ type: POKEMON_LIST_REQUEST });

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
      );

      const promises = data.results.map(async (el) => await axios.get(el.url));

      const results = await Promise.all(promises);

      const pokemonList = results.map((el) => el.data);

      dispatch({ type: POKEMON_LIST_SUCCESS, payload: { pokemonList, data } });
    } catch (error) {
      dispatch({
        type: POKEMON_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

const getPokemonDetail = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: POKEMON_DETAIL_REQUEST });

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      dispatch({ type: POKEMON_DETAIL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POKEMON_DETAIL_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

const getPokemonByName = (name: string) => {
  return async (dispatch: Dispatch<PokemonItemDispatchTypes>) => {
    try {
      dispatch({ type: POKEMON_ITEM_REQUEST });

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );

      dispatch({ type: POKEMON_ITEM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: POKEMON_ITEM_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
};

export { getPokemons, getPokemonDetail, getPokemonByName };
