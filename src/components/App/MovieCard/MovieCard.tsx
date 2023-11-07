import { MovieStructure } from "../../../store/features/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, year, description, director },
}: MovieCardProps): React.ReactElement => {
  return (
    <div className="card">
      <h2 className="card__title">Title: {name}</h2>
      <h2 className="card__title">Director: {director}</h2>
      <span className="card__year">Realease: {year}</span>
      <span className="card__description">Synopsis: {description}</span>
    </div>
  );
};

export default MovieCard;
