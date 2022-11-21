import create from "zustand";

export const useMessageStore = create((set) => ({
  message: "",
  addMessage: (str) => set({ message: str }),
  resetMessage: () => set({ message: "" }),
}));

export const useKingsMessage = create((set) => ({
  kingsMessage: "야도가 미래다",
}));

export const useLangModeStore = create((set) => ({
  langMode: "en",
  changeLangMode: () =>
    set((state) => {
      if (state.langMode === "en") return { langMode: "ko" };
      if (state.langMode === "ko") return { langMode: "en" };
    }),
}));

export const useLoggedIn = create((set) => ({
  loggedIn: false,
  login: () => set({ loggedIn: true }),
}));
