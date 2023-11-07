export interface MovieStructure {
  id: number;
  neme: string;
  year: number;
  description: string;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
