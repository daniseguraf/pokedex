import axios from 'axios';
import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from '../constants/favoriteConstants';

export const addToFavorite = (id) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );

      dispatch({
        type: FAVORITE_ADD_ITEM,
        payload: {
          id: data.id,
          name: data.name,
          image: data.sprites.other.home.front_default,
        },
      });

      localStorage.setItem(
        'favoriteItems',
        JSON.stringify(getState().favorite.favoriteItems)
      );
    } catch (error) {}
  };
};

export const removeFromFavorite = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: FAVORITE_REMOVE_ITEM, payload: id });

    localStorage.setItem(
      'favoriteItems',
      JSON.stringify(getState().favorite.favoriteItems)
    );
  };
};
