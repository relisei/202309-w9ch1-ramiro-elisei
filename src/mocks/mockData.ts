import { MovieStructure } from "../store/features/movies/types";

const mockMovies: MovieStructure[] = [
  {
    id: 1,
    name: "Eternal Sunshine of the Spotless Mind",
    year: 2004,
    description:
      "A man tries to erase the memories of his failed relationship with a groundbreaking procedure.",
    picture:
      "https://i.ibb.co/PcTntw8/Eternal-Sunshine-Of-The-Spotless-Mind.webp",
    isSeen: false,
  },
  {
    id: 2,
    name: "The Science of Sleep",
    year: 2006,
    description:
      "A man's dream world blends with reality, blurring the lines between the two.",
    picture: "https://i.ibb.co/2yY6dZb/The-Science-Of-Sleep.webp",
    isSeen: false,
  },
];

export default mockMovies;
