import "../styles/components/header.scss";
import { Link, useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMouseover from "../hooks/useMouseover";
import useRouterLocation from "../hooks/useRouterLocation";

const Header = ({ langMode, loggedIn, logout }) => {
  const navigate = useNavigate();
  const { innerWidth } = useWindowSize();
  const [toggle, setToggle] = useState(false);
  useRouterLocation(setToggle, false);
  const onClickToggle = () => {
    setToggle((prev) => !prev);
  };

  const { state, mouseoverRef } = useMouseover();

  const onClickLogout = () => {
    logout();
    navigate("/admin-login");
  };

  return (
    <header>
      <div
        /*big screen header*/ className={`header__big_screen ${
          innerWidth <= 670 ? "hidden" : ""
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
              {langMode === "en" ? "About 1770" : "1770 소개"}
            </Link>
          </div>
          <div>
            <Link className="header__link" to={`/commanders`}>
              {langMode === "en" ? "Commanders" : "사령관 정보"}
            </Link>
          </div>
          <div
            ref={mouseoverRef}
            className={`header__bs__tools_container ${state ? "hovered" : ""}`}
          >
            <span className="header__link">
              {langMode === "en" ? "Tools" : "각종 도구"}
            </span>
            <ul>
              <li>
                <span>
                  <Link to={`/tools/troop-power`}>
                    {langMode === "en" ? "Troop Power" : "부대 전투력"}
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to={`/tools/resource`}>
                    {langMode === "en"
                      ? "Resource Calculator"
                      : "보유 자원량 계산"}
                  </Link>
                </span>
              </li>
              <li>
                <span>
                  <Link to={`/tools/hp-calculator`}>
                    {langMode === "en"
                      ? "KvK HP Calculator"
                      : "명예 포인트 계산기"}
                  </Link>
                </span>
              </li>
            </ul>
          </div>
          <div>
            <Link className="header__link" to={`/news`}>
              {langMode === "en" ? "News" : "뉴스"}
            </Link>
          </div>
        </nav>
        <div className="header__bs__admin_btn">
          {!loggedIn ? (
            <button className="ct_btn">
              <Link to={`/admin-login`}>
                {langMode === "en" ? "Admin" : "관리자"}
              </Link>
            </button>
          ) : (
            <button className="ct_btn" onClick={onClickLogout}>
              {langMode === "en" ? "Logout" : "로그아웃"}
            </button>
          )}
        </div>
      </div>
      {/*header for big screen 👆🏻*/}
      {/*header for small screen 👇🏻*/}
      <div
        className={`header__small_screen ${innerWidth <= 670 ? "" : "hidden"} ${
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
        <div className="header__sc__list">
          <nav>
            <div className="header__sc__link lg">
              <Link to={`/about`}>
                {langMode === "en" ? "About 1770" : "1770 소개"}
              </Link>
            </div>
            <div className="header__sc__link lg">
              <Link to={`/commanders`}>
                {langMode === "en" ? "Commanders" : "사령관 정보"}
              </Link>
            </div>
            <div className="header__sc__tools">
              <span className="header__sc__link lg">
                {langMode === "en" ? "Tools" : "각종 도구"}
              </span>
              <ul>
                <li>
                  <span className="header__sc__link sm">
                    <Link to={`/tools/troop-power`}>
                      {langMode === "en" ? "Troop Power" : "부대 전투력"}
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="header__sc__link sm">
                    <Link to={`/tools/resource`}>
                      {langMode === "en"
                        ? "Resource Calculator"
                        : "보유 자원량 계산"}
                    </Link>
                  </span>
                </li>
                <li>
                  <span className="header__sc__link sm">
                    <Link to={`/tools/hp-calculator`}>
                      {langMode === "en"
                        ? "KvK HP Calculator"
                        : "KvK 명예 포인트 계산기"}
                    </Link>
                  </span>
                </li>
              </ul>
            </div>
            <div className="header__sc__link lg">
              <Link to={`/news`}>{langMode === "en" ? "News" : "뉴스"}</Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
