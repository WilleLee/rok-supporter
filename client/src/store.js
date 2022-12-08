import create from "zustand";
import troopTypes from "./data/troopTypes";

const $LOCAL_LOGGEDIN_KEY = "rok_logged_in";
const $LOCAL_LANGMODE_KEY = "rok_lang_mode";
const $LOCAL_TROOPTYPE_KEY = "rok_troop_type";

export const useMessageStore = create((set) => ({
  message: "",
  addMessage: (str) => set({ message: str }),
  resetMessage: () => set({ message: "" }),
}));

export const useKingsMessageStore = create((set) => ({
  kingsMessage: "야도가 미래다.",
  changeKingsMessage: (str) =>
    set((state) => {
      return str.length > 0 && str.length <= 25
        ? { kingsMessage: str }
        : { kingsMessage: state.kingsMessage };
    }),
}));

const getInitialLangMode = () => {
  const langMode = localStorage.getItem($LOCAL_LANGMODE_KEY) || "en";
  return langMode;
};

export const useLangModeStore = create((set) => ({
  langMode: getInitialLangMode(),
  changeLangMode: () =>
    set((state) => {
      if (state.langMode === "en") {
        localStorage.setItem($LOCAL_LANGMODE_KEY, "ko");
        return { langMode: "ko" };
      }
      if (state.langMode === "ko") {
        localStorage.setItem($LOCAL_LANGMODE_KEY, "en");
        return { langMode: "en" };
      }
    }),
}));

const getInitialLoggedIn = () => {
  const loggedIn = localStorage.getItem($LOCAL_LOGGEDIN_KEY) || false;
  return loggedIn;
};

export const useLoggedInStore = create((set) => ({
  loggedIn: getInitialLoggedIn(),
  login: () =>
    set(() => {
      localStorage.setItem($LOCAL_LOGGEDIN_KEY, true);
      return {
        loggedIn: true,
      };
    }),
  logout: () =>
    set(() => {
      localStorage.removeItem($LOCAL_LOGGEDIN_KEY);
      return {
        loggedIn: false,
      };
    }),
}));

export const useLoadedCommandersStore = create((set) => ({
  loadedCommanders: [],
  loadCommanders: (arr) =>
    set(() => ({
      loadedCommanders: [...arr],
    })),
}));

const getInitialTroopType = () => {
  const troopType =
    localStorage.getItem($LOCAL_TROOPTYPE_KEY) || troopTypes.$ARC;
  return troopType;
};

export const useTroopTypeStore = create((set) => ({
  troopType: getInitialTroopType(),
  setTroopType: (str) =>
    set((state) => {
      if (
        ![
          troopTypes.$ARC,
          troopTypes.$CAV,
          troopTypes.$INF,
          troopTypes.$LEA,
        ].includes(str)
      ) {
        return { troopType: state.troopType };
      } else {
        localStorage.setItem($LOCAL_TROOPTYPE_KEY, str);
        return { troopType: str };
      }
    }),
}));
