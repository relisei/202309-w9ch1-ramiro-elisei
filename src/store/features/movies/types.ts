export interface MovieStructure {
  id: number;
  name: string;
  picture: string;
  year: number;
  director: string;
  description: string;
  isSeen: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
