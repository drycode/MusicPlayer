import { combineReducers } from "redux";

export const reduceArtists = (prevState, action) => {
  console.log(prevState);
  if (prevState === undefined) {
    return { artists: [] };
  }
  return [...action.payload.artists];
};

export const reducePagination = (prevState, action) => {
  if (prevState === undefined) {
    return { page: 6, limit: 10 };
  }
  return action.payload.pagination;
};

export const rootReducer = combineReducers({
  artists: reduceArtists,
  pagination: reducePagination,
});
