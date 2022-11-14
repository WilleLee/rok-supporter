import "../styles/components/header.scss";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const { innerWidth } = useWindowSize();
  const [tools, setTools] = useState(false);
  const onClickToolsToogle = () => {
    setTools((prev) => !prev);
  };
  const [toggle, setToggle] = useState(false);
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <header>
      <div
        /*big screen header*/ className={`header__big_screen ${
          innerWidth < 540 ? "hidden" : ""
        }`}
      >
        <div className="header__logo_block">
          <div className="header__logo_container">
            <Link to={`/`}>
              <img className="" src="/logo.png" alt="project logo" />
            </Link>
          </div>
        </div>
        <nav>
          <div>
            <Link className="header__link" to={`/about`}>
              About 1770
            </Link>
          </div>
          <div className="header__bs__tools_container">
            <span className="header__link" onClick={onClickToolsToogle}>
              Tools {tools ? "👇🏻" : "👈🏻"}
            </span>
            {!tools ? null : (
              <div className="header__bs__tools_toggled">
                <ul>
                  <li>
                    <Link to={`/tools/troop-power`}>Troop Power</Link>
                  </li>
                  <li>
                    <Link to={`/tools/resource`}>Resource Calculator</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div>
            <Link className="header__link" to={`/events`}>
              Events
            </Link>
          </div>
        </nav>
        <div className="header__bs__admin_btn">
          <button className="ct_btn">
            <Link to={`/admin-login`}>Admin</Link>
          </button>
        </div>
      </div>
      <div
        className={`header__small_screen ${innerWidth <= 540 ? "" : "hidden"} ${
          toggle ? "expanded" : ""
        }`} /*small screen header*/
      >
        <div className="header__sc__main">
          <div className="header__sc__toggle_container header__sc__part">
            <button onClick={onClickToggle} className="header__sc__toggle">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className="header__sc__logo_container header__sc__part">
            <Link to={`/`}>
              <img className="" src="/logo.png" alt="project logo" />
            </Link>
          </div>
          <div className="header__sc__part"></div>
        </div>
        <div className="header__sc__list"></div>
      </div>
    </header>
  );
};

export default Header;
