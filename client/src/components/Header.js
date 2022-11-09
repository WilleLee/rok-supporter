import "../styles/components/header.scss";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const Header = () => {
  const { innerWidth } = useWindowSize();
  return (
    <header>
      <div
        /*big screen header*/ className={`header__big_screen ${
          innerWidth < 540 ? "hidden" : ""
        }`}
      >
        <div className="header__logo_container">
          <Link to={`/`}>
            <img className="" src="/logo.png" alt="project logo" />
          </Link>
        </div>
        <nav>
          <div>
            <Link to={`/about`}>About 1770</Link>
          </div>
          <div style={{ position: "relative" }}>
            <span>Tools</span>
            <div
              style={{
                position: "absolute",
                top: "100%",
                backgroundColor: "beige",
              }}
            >
              blah
            </div>
          </div>
          <div>Events</div>
        </nav>
        <div>
          <button className="ct_btn">Admin</button>
        </div>
      </div>
      <div style={{ display: "none" }} /*small screen header*/>
        {/*logo*/}
        <button>toggle button</button>
      </div>
    </header>
  );
};

export default Header;
