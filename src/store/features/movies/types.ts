export interface MovieStructure {
  id: number;
  name: string;
  picture: string;
  year: number;
  description: string;
  isSeen: boolean;
}

export interface MoviesStateStructure {
  movies: MovieStructure[];
}
