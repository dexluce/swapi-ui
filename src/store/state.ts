import { SearchResult } from "./types";

export interface AppState {
  searchResult: SearchResult,
  searching: boolean,
  searchError: boolean
}

export const initialState: AppState = {
  searchResult: [],
  searching: false,
  searchError: false
}
