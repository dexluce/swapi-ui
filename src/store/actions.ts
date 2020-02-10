import axios, { AxiosResponse } from 'axios';
import { ThunkAction } from "redux-thunk";
import { ActionCreator, Action, Dispatch } from "redux";
import { People, Film, Planet, Species, Starship, Vehicle, SearchResult } from './types';

export type AppActions = SearchAction | SearchErrorAction | SearchSuccessAction;

export interface SearchAction extends Action<"SEARCH"> {}
export interface SearchErrorAction extends Action<"SEARCH_ERROR"> {}
export interface SearchSuccessAction extends Action<"SEARCH_SUCCESS"> {
  result: SearchResult,
}

export const searchActionCreator: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched
  Promise<SearchSuccessAction | SearchErrorAction>,
  // The type for the data within the last action
  SearchResult | void,
  // The type of the parameter for the nested function
  string,
  // The type of the last action to be dispatched
  SearchSuccessAction | SearchErrorAction
>> = (search: string) => {
  return async (dispatch: Dispatch) => {
    dispatch({ type: "SEARCH" });

    try {
      const [
        resultPeople,
        resultFilm,
        resultPlanet,
        resultSpecies,
        resultStarship,
        resultVehicle
      ] = await Promise.all<AxiosResponse<any>>([
        axios.get(`https://swapi.co/api/people/?search=${search}`),
        axios.get(`https://swapi.co/api/films/?search=${search}`),
        axios.get(`https://swapi.co/api/planets/?search=${search}`),
        axios.get(`https://swapi.co/api/species/?search=${search}`),
        axios.get(`https://swapi.co/api/starships/?search=${search}`),
        axios.get(`https://swapi.co/api/vehicles/?search=${search}`)
      ])

      const searchSuccessAction: SearchSuccessAction = {
        type: "SEARCH_SUCCESS",
        result: [
          ...resultPeople.data.results.map((result: People) => {return {...result, type: "People"}}),
          ...resultFilm.data.results.map((result: Film) => {return {...result, type: "Film"}}),
          ...resultPlanet.data.results.map((result: Planet) => {return {...result, type: "Planet"}}),
          ...resultSpecies.data.results.map((result: Species) => {return {...result, type: "Species"}}),
          ...resultStarship.data.results.map((result: Starship) => {return {...result, type: "Starship"}}),
          ...resultVehicle.data.results.map((result: Vehicle) => {return {...result, type: "Vehicle"}}),
        ]
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