import { useState } from "react";
import { MovieStructure } from "../../store/features/movies/types";

interface MovieFormProps {
  actionOnSubmit: (movie: MovieStructure) => void;
}

const MovieForm = ({ actionOnSubmit }: MovieFormProps): React.ReactElement => {
  const coreMovie: MovieStructure = {
    id: 0,
    name: "",
    picture: "",
    year: 0,
    description: "",
    isSeen: false,
  };

  const [newMovie, setNewMovie] = useState(coreMovie);

  const onChangeData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setNewMovie((newMovie) => ({
      ...newMovie,
      [event.target.id]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    actionOnSubmit(newMovie);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form__control">
        <label className="form__label" htmlFor="name">
          Movie name:
        </label>
        <input
          id="name"
          name="movieName"
          type="string"
          onChange={onChangeData}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="year">
          Movie release:
        </label>
        <input
          id="year"
          name="movieRelease"
          type="number"
          onChange={onChangeData}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="picture">
          Enter a picture:
        </label>
        <input
          id="picture"
          name="moviePicture"
          type="string"
          onChange={onChangeData}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="description">
          Add a description:
        </label>
        <textarea
          id="description"
          name="movieDescription"
          rows={4}
          cols={40}
          onChange={onChangeData}
        />
      </div>
      <div className="form__control">
        <label className="form__label" htmlFor="isSeen">
          is watched?
        </label>
        <input
          className="card__checkbox"
          type="checkbox"
          id="isSeen"
          name="movieIsWatched"
          onChange={onChangeData}
        ></input>
      </div>
      <button type="submit" className="button">
        Add Movie
      </button>
    </form>
  );
};

export default MovieForm;
