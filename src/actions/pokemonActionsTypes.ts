import { PokemonItemType } from './../types/pokemonTypes';
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

export interface PokemonListRequest {
  type: typeof POKEMON_LIST_REQUEST;
}

export interface PokemonListFail {
  type: typeof POKEMON_LIST_FAIL;
}

export interface PokemonListSuccess {
  type: typeof POKEMON_LIST_SUCCESS;
  payload: {
    pokemonList: PokemonItemType[];
  };
}

// INTERFACES
export interface PokemonItemRequest {
  type: typeof POKEMON_ITEM_REQUEST;
}

export interface PokemonItemFail {
  type: typeof POKEMON_ITEM_FAIL;
  payload: {
    error: unknown;
  };
}

export interface PokemonItemSuccess {
  type: typeof POKEMON_ITEM_SUCCESS;
  payload: PokemonItemType | unknown;
}

export type PokemonItemDispatchTypes =
  | PokemonItemRequest
  | PokemonItemFail
  | PokemonItemSuccess;

export type PokemonListDispatchTypes =
  | PokemonListRequest
  | PokemonListFail
  | PokemonListSuccess;
