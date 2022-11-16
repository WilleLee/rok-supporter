import create from "zustand";

export const useMessageStore = create((set) => ({
  message: "",
  addMessage: (str) => set({ message: str }),
  resetMessage: () => set({ message: "" }),
}));

export const useKingsMessage = create((set) => ({
  kingsMessage: "야도가 미래다",
}));

export const useLanguageStore = create((set) => ({
  langMode: "en",
  changeLangMode: () => set((state) => (state.langMode === "en" ? "ko" : "en")),
}));
