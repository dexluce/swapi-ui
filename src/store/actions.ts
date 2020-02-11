import axios from 'axios';
import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { People, Film, Planet, Species, Starship, Vehicle, SearchResult, Filters } from './types';
import { AppState } from './state';

export type AppActions = SearchAction | SearchErrorAction | SearchSuccessAction | SearchChanged | FiltersChanged;

export interface SearchChanged extends Action<"SEARCH_CHANGED"> {
  search: string
}
export interface FiltersChanged extends Action<"FILTERS_CHANGED"> {
  filters: Filters
}
export interface SearchAction extends Action<"SEARCH"> {}
export interface SearchErrorAction extends Action<"SEARCH_ERROR"> {}
export interface SearchSuccessAction extends Action<"SEARCH_SUCCESS"> {
  result: SearchResult,
}

export const searchActionCreator: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched
  Promise<SearchSuccessAction | SearchErrorAction>,
  // The type for the data within the last action
  AppState,
  // The type of the parameter for the nested function
  void,
  // The type of the last action to be dispatched
  SearchSuccessAction | SearchErrorAction
>> = () => {
  return async (dispatch: Dispatch, getState) => {
    dispatch({ type: "SEARCH" });

    const state = getState();

    try {
      const axiosPromises: Array<Promise<SearchResult>> = []; 

      // Generate request taking filters into account
      // We do a lot, for each type of star wars ressource, we create a axios promise, we take the result and add the type to each results
      // We store each axios promis in a array of promise to trigger them all at once
      if (state.filters.people) axiosPromises.push(axios.get(`https://swapi.co/api/people/?search=${state.search}`).then((result) => {
        return result.data.results.map((result: People) => {return {...result, type: "People"}});
      }));
      if (state.filters.film) axiosPromises.push(axios.get(`https://swapi.co/api/films/?search=${state.search}`).then((result) => {
        return result.data.results.map((result: Film) => {return {...result, type: "Film"}});
      }));
      if (state.filters.planet) axiosPromises.push(axios.get(`https://swapi.co/api/planets/?search=${state.search}`).then((result) => {
        return result.data.results.map((result: Planet) => {return {...result, type: "Planet"}});
      }));
      if (state.filters.species) axiosPromises.push(axios.get(`https://swapi.co/api/species/?search=${state.search}`).then((result) => {
        return result.data.results.map((result: Species) => {return {...result, type: "Species"}});
      }));
      if (state.filters.starship) axiosPromises.push(axios.get(`https://swapi.co/api/starships/?search=${state.search}`).then((result) => {
        return result.data.results.map((result: Starship) => {return {...result, type: "Starship"}});
      }));
      if (state.filters.vehicle) axiosPromises.push(axios.get(`https://swapi.co/api/vehicles/?search=${state.search}`).then((result) => {
        return result.data.results.map((result: Vehicle) => {return {...result, type: "Vehicle"}});
      }));

      // Wait for API calls results
      const result: SearchResult = (await Promise.all(axiosPromises)).flat();

      // Populate de store with api data
      const searchSuccessAction: SearchSuccessAction = {
        type: "SEARCH_SUCCESS",
        result: result
      };
      return dispatch(searchSuccessAction);
    } catch(e) {
      const searchErrorAction: SearchErrorAction = {
        type: "SEARCH_ERROR"
      }

      return dispatch(searchErrorAction);
    }
  };
};