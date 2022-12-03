import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import shallow from "zustand/shallow";
import API from "../api";
import { H2 } from "../components/styled";
import useAdminOnly from "../hooks/useAdminOnly";
import { useLangModeStore, useLoggedInStore, useMessageStore } from "../store";
import styles from "../styles/pages/kingsMessage.module.scss";

let timeoutId = null;
const ErrMsg = {
  inputError: {
    $KO: "유효하지 않은 입력값입니다.",
    $EN: "Invalid inputs have been caught.",
  },
};

const KingsMessagePage = () => {
  const { loggedIn } = useLoggedInStore((state) => ({
    loggedIn: state.loggedIn,
  }));
  useAdminOnly(loggedIn);
  const { message, addMessage, resetMessage } = useMessageStore(
    (state) => ({
      message: state.message,
      addMessage: state.addMessage,
      resetMessage: state.resetMessage,
    }),
    shallow
  );
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  });
  const navigate = useNavigate();
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      kingsMessage: { value },
    } = event.target;
    if (value.length < 4 || typeof value !== "string") {
      const $OptMessage =
        langMode === "en" ? ErrMsg.inputError.$EN : ErrMsg.inputError.$KO;
      addMessage($OptMessage);
      timeoutId = setTimeout(() => {
        resetMessage();
      }, 3000);
      return;
    }
    const fetchOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ kingsMessage: value }),
    };
    const { success } = await API.createKingsMessage(fetchOpt);
    if (!success) return;
    navigate("/");
  };
  return (
    <section>
      {!message.length ? null : <p className="message_box">{message}</p>}
      <H2>
        {langMode === "en" ? "Change King's Message" : "국왕 메세지 수정"}
      </H2>
      <form onSubmit={onSubmit} className={styles.single_form}>
        <input
          name="kingsMessage"
          type="text"
          minLength={4}
          maxLength={20}
          placeholder={
            langMode === "en"
              ? "Type new king's messages."
              : "국왕 메세지를 입력하세요."
          }
        />
        <input type="submit" value={langMode === "en" ? "Confirm" : "확인"} />
      </form>
    </section>
  );
};

export default KingsMessagePage;
