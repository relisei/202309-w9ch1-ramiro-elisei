export interface MovieStructure {
  id: number;
  name: string;
  year: number;
  director: string;
  description: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
