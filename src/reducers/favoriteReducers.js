import {
  FAVORITE_ADD_ITEM,
  FAVORITE_REMOVE_ITEM,
} from '../constants/favoriteConstants';

export const favoriteReducer = (state = { favoriteItems: [] }, action) => {
  if (action.type === FAVORITE_ADD_ITEM) {
    const item = action.payload;

    return { ...state, favoriteItems: [...state.favoriteItems, item] };
  }

  if (action.type === FAVORITE_REMOVE_ITEM) {
    return {
      ...state,
      favoriteItems: state.favoriteItems.filter(
        (el) => el.id !== action.payload
      ),
    };
  }

  return state;
};
