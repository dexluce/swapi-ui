import { SearchResult, Filters } from "./types";

export interface AppState {
  searchResult: SearchResult,
  searching: boolean,
  searchError: boolean,
  filters: Filters,
  search: string
}

export const initialState: AppState = {
  searchResult: [],
  searching: false,
  searchError: false,
  filters: { people: true, film: true, planet: true, species: true, starship: true, vehicle: true },
  search: ""
}
