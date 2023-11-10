import { NavLink } from "react-router-dom";

const Navigation = (): React.ReactElement => {
  return (
    <ul className="navigation">
      <li>
        <NavLink className="navigation__element" to="/movies">
          Movies
        </NavLink>
      </li>
      <li>
        <NavLink className="navigation__element" to="/create">
          Create movie
        </NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
