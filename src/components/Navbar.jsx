import { Link } from "react-router-dom";
import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Navbar = () => {
  const { favourites } = useContext(StudentContext);

  return (
    <nav className="navbar">

      <div className="nav-container">

        <Link to="/" className="logo">
          Student App
        </Link>

        <div className="nav-links">

          <Link to="/">
            Students
          </Link>

          <Link to="/favourites">
            Favourites

            <span className="count">
              {favourites.length}
            </span>

          </Link>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;