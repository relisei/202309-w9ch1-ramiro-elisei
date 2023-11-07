import { MovieStructure } from "../../store/features/movies/types";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, year, description, picture },
}: MovieCardProps): React.ReactElement => {
  return (
    <div className="card">
      <img
        className="card__picture"
        src={picture}
        alt={name}
        width="271"
        height="400"
      />
      <h2 className="card__title">{name}</h2>
      <span className="card__year">Realease: {year}</span>
      <span className="card__description">Synopsis: {description}</span>
    </div>
  );
};

export default MovieCard;
