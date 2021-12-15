import bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../css/navbar.css";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="contain">
        <div className="left">
          <Link to="/">TikaramAc</Link>
        </div>

        <div className="right">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
