import create from "zustand";

const $LOCAL_LOGGEDIN_KEY = "rok_logged_in";
const $LOCAL_LANGMODE_KEY = "rok_lang_mode";

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
