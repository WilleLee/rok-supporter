import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLangModeStore, useLoggedInStore } from "../store";
import shallow from "zustand/shallow";
import { useEffect } from "react";

const Root = () => {
  const { loggedIn, logout } = useLoggedInStore(
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
  useEffect(() => {
    const onBeforeUnload = (event) => {
      event.preventDefault();
      if (loggedIn) logout();
    };
    window.addEventListener("beforeunload", onBeforeUnload);
  }, [loggedIn, logout]);
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
