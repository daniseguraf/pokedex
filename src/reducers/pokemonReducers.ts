import {
  PokemonItemType,
  PokemonItemDispatchTypes,
} from './../actions/pokemonActionsTypes';

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

export const getPokemonsReducer = (state = { pokemons: [] }, action) => {
  if (action.type === POKEMON_LIST_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === POKEMON_LIST_SUCCESS) {
    return {
      loading: false,
      pokemons: action.payload.pokemonList,
      previous: action.payload.data.previous,
      next: action.payload.data.next,
      count: action.payload.data.count,
    };
  }
  if (action.type === POKEMON_LIST_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};

export const getPokemonDetailReducer = (state = { pokemon: {} }, action) => {
  if (action.type === POKEMON_DETAIL_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === POKEMON_DETAIL_SUCCESS) {
    return { loading: false, pokemon: action.payload };
  }
  if (action.type === POKEMON_DETAIL_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};

interface DefaultStateI {
  loading?: boolean;
  pokemon: PokemonItemType | {};
}

export const getPokemonByName = (
  state: DefaultStateI = { pokemon: {} },
  action: PokemonItemDispatchTypes
): DefaultStateI => {
  if (action.type === POKEMON_ITEM_REQUEST) {
    return { loading: true, ...state };
  }
  if (action.type === POKEMON_ITEM_SUCCESS) {
    return { loading: false, pokemon: action.payload };
  }
  if (action.type === POKEMON_ITEM_FAIL) {
    return { loading: false, error: action.payload };
  }

  return state;
};
