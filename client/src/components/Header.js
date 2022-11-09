import "../styles/components/header.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * window resize event에 반응하여 x, y 값 반환
 * @returns {object}
 */
const useWindowSize = () => {
  const [state, setState] = useState({
    innerWidth: window.innerWidth,
    innerHeight: window.innerHeight,
  });
  const onResize = () => {
    setState({
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);
  return state;
};

const Header = () => {
  const { innerWidth } = useWindowSize();
  return (
    <header style={{ height: "120vh" }}>
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
          <div>Tools</div>
          <div>Events</div>
        </nav>
        <div>
          <div>Admin On</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
