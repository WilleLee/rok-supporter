import create from "zustand";

export const useMessageStore = create((set) => ({
  message: "",
  addMessage: (str) => set({ message: str }),
  resetMessage: () => set({ message: "" }),
}));

export const useKingsMessage = create((set) => ({
  kingsMessage: "야도가 미래다.",
  changeKingsMessage: (str) =>
    set((state) => {
      return str.length > 0 && str.length <= 25
        ? { kingsMessage: str }
        : { kingsMessage: state.kingsMessage };
    }),
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
  // admin-login page에서 클라이언트는 비밀번호를 입력하여 controller에서 request
  // controller는 db model에 저장된 정보와 입력된 비밀번호가 일치하는지 확인하여 statusCode를 보냄
  // response.status === 200 이면 login dispatch 발동하고 홈으로
  // response.status === 400 이면 message와 함께 홈으로
  loggedIn: false,
  login: () => set({ loggedIn: true }),
  logout: () => set({ loggedIn: false }),
}));
