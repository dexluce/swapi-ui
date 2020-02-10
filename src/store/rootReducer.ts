import { Reducer } from "react";
import { AppActions } from "./actions";
import { AppState } from "./state";

export const rootReducer: Reducer<AppState | any, AppActions> = (
  state,
  action
) => {
  switch (action.type) {
    case "SEARCH": {
      return {
        ...state,
        searchError: false,
        searching: true
      };
    }
    case "SEARCH_ERROR": {
      return {
        ...state,
        searchError: true,
        searching: false
      };
    }
    case "SEARCH_SUCCESS": {
      return {
        ...state,
        searchResult: action.result,
        searchError: false,
        searching: false
      };
    }
    default:
      neverReached(action); // when a new action is created, this helps us remember to handle it in the reducer
  }
  return state;
};

// tslint:disable-next-line:no-empty
const neverReached = (never: never) => {};
