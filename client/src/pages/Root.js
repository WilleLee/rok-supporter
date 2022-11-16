import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import { useLangModeStore } from "../store";
import shallow from "zustand/shallow";

const Root = () => {
  const { changeLangMode } = useLangModeStore(
    (state) => ({
      changeLangMode: state.changeLangMode,
    }),
    shallow
  );
  return (
    <>
      <Header />
      <Outlet />
      <button onClick={changeLangMode} className="ct_langmode_btn">
        En / 한글
      </button>
    </>
  );
};

export default Root;
