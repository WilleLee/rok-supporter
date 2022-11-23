import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLangModeStore, useLoggedIn } from "../store";
import shallow from "zustand/shallow";

const Root = () => {
  const { loggedIn, logout } = useLoggedIn(
    (state) => ({
      loggedIn: state.loggedIn,
      logout: state.logout,
    }),
    shallow
  );
  const { langMode, changeLangMode } = useLangModeStore(
    (state) => ({
      langMode: state.langMode,
      changeLangMode: state.changeLangMode,
    }),
    shallow
  );
  return (
    <>
      <Header langMode={langMode} loggedIn={loggedIn} logout={logout} />
      <Outlet />
      <button onClick={changeLangMode} className="ct_langmode_btn">
        En / 한글
      </button>
    </>
  );
};

export default Root;
