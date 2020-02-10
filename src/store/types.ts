export type SearchResult = Array<Film | Species | People | Planet | Starship | Vehicle>;

export interface People {
  type: "People"
  id: number;
  edited: string;
  created: string;
  url: string;
  mass: string;
  films: Film[];
  homeworld: string;
  birth_year: string;
  gender: string;
  height: string;
  eye_color: string;
  skin_color: string;
  species: Species[];
  hair_color: string;
  starships: Starship[];
  name: string;
  vehicles: Vehicle[];
}
export interface Film {
  type: "Film"
  id: number;
  edited: string;
  created: string;
  url: string;
  director: string;
  opening_crawl: string;
  title: string;
  release_date: string;
  planets: Planet;
  characters: string;
  starships: Starship;
  vehicles: Vehicle;
  species: Species;
  producer: string;
  episode_id: string;
}
export interface Planet {
  type: "Planet"
  id: number;
  edited: string;
  created: string;
  url: string;
  films: Film[];
  rotation_period: string;
  terrain: string;
  gravity: string;
  population: string;
  surface_water: string;
  residents: string;
  orbital_period: string;
  diameter: string;
  name: string;
  climate: string;
}
export interface Species {
  type: "Species"
  id: number;
  edited: string;
  created: string;
  url: string;
  homeworld: string;
  films: Film[];
  designation: string;
  language: string;
  skin_colors: string;
  people: People;
  eye_colors: string;
  hair_colors: string;
  average_lifespan: string;
  name: string;
  classification: string;
  average_height: string;
}
export interface Starship {
  type: "Starship"
  id: number;
  edited: string;
  created: string;
  url: string;
  films: Film[],
  starship_class: string,
  crew: string,
  MGLT: string,
  hyperdrive_rating: string,
  passengers: string,
  model: string,
  manufacturer: string,
  length: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  consumables: string,
  cargo_capacity: string,
  name: string,
  pilots: string
}
export interface Vehicle {
  type: "Vehicle"
  id: number;
  edited: string;
  created: string;
  url: string;
  films: Film[],
  crew: string,
  vehicle_class: string,
  passengers: string,
  model: string,
  manufacturer: string,
  length: string,
  cost_in_credits: string,
  max_atmosphering_speed: string,
  consumables: string,
  cargo_capacity: string,
  name: string,
  pilots: string,
}