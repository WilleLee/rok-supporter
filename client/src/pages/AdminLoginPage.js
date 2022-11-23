import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";
import { H2 } from "../components/styled";
import { useLangModeStore, useLoggedIn, useMessageStore } from "../store";
import "../styles/pages/adminLogin.scss";

let timeoutId = null;
const $apiUrl = "http://localhost:8080/api/login";

const AdminLoginPage = () => {
  const { login } = useLoggedIn((state) => ({
    login: state.login,
  }));
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);
  const navigate = useNavigate();
  const { message, addMessage, resetMessage } = useMessageStore(
    (state) => ({
      message: state.message,
      addMessage: state.addMessage,
      resetMessage: state.resetMessage,
    }),
    shallow
  );
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      password: { value },
    } = event.target;
    try {
      const res = await fetch($apiUrl, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ password: value }),
      }); // statusCode 200 400
      const json = await res.json(); // success: true / false
      console.log(json);
      // json.success === true -> store loggedIn = true -> home page
      // josn.success false -> store -> home page
      switch (json.checkPw) {
        case true:
          login();
          navigate("/");
          break;
        case false:
          {
            const $errMsg =
              langMode === "en"
                ? "Wrong password."
                : "옳지 않은 비밀번호입니다.";
            if (timeoutId) clearTimeout(timeoutId);
            addMessage($errMsg);
            timeoutId = setTimeout(() => {
              resetMessage();
            }, 3000);
          }
          break;
        default:
          break;
      }
    } catch (err) {
      const $errMsg =
        langMode === "en"
          ? "Unexpected errors happened."
          : "예상치 못한 에러 발생";
      if (timeoutId) clearTimeout(timeoutId);
      addMessage($errMsg);
      timeoutId = setTimeout(() => {
        resetMessage();
      }, 3000);
    }
  };
  return (
    <section>
      {!message.length ? null : <p className="message_box">{message}</p>}
      <H2>
        {langMode === "en" ? "Sign in as Administrator" : "관리자로 접속"}
      </H2>
      <form onSubmit={onSubmit} className="admin_login__form">
        <input
          name="password"
          type="password"
          placeholder={
            langMode === "en"
              ? "Admin password is required."
              : "관리자 비밀번호를 입력하세요."
          }
        />
        <input type="submit" value={langMode === "en" ? "Confirm" : "확인"} />
      </form>
    </section>
  );
};

export default AdminLoginPage;
