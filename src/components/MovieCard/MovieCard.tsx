import { useCallback } from "react";
import { MovieStructure } from "../../store/features/movies/types";
import { useDispatch } from "react-redux";
import { toggleWatchedMoviesActionCreator } from "../../store/features/movies/moviesSlice";

interface MovieCardProps {
  movie: MovieStructure;
}

const MovieCard = ({
  movie: { name, year, description, picture, isSeen, id },
}: MovieCardProps): React.ReactElement => {
  const dispatch = useDispatch();

  const handleIsSeenStatus = useCallback(() => {
    dispatch(toggleWatchedMoviesActionCreator(id));
  }, [dispatch, id]);

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
      <label htmlFor="seen" className="card__label">
        Watched
        <input
          className="card__checkbox"
          type="checkbox"
          name="seen"
          onChange={handleIsSeenStatus}
        ></input>
      </label>
      <span className="card__watchedMessage">
        {isSeen ? "Not seen" : "Seen"}
      </span>
    </div>
  );
};

export default MovieCard;
