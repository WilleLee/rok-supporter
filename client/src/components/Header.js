import "../styles/components/header.scss";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";

const Header = () => {
  const { innerWidth } = useWindowSize();
  const [tools, setTools] = useState(false);
  const onClickToolsToogle = () => {
    setTools((prev) => !prev);
  };
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
          <div className="header__bs__tools_container">
            <span onClick={onClickToolsToogle}>
              Tools {tools ? "👇🏻" : "👈🏻"}
            </span>
            {!tools ? null : (
              <div className="header__bs__tools_toggled">
                <ul>
                  <li>
                    <Link to={`/tools/troop-power`}>Troop Power</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>Events</div>
        </nav>
        <div>
          <button className="ct_btn">
            <Link to={`/admin-login`}>Admin</Link>
          </button>
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
