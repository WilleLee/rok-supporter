import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import shallow from "zustand/shallow";
import API from "../../api";
import CommanderDetail from "../../components/CommanderDetail";
import { H1 } from "../../components/styled";
import { useLangModeStore, useMessageStore } from "../../store";

let timeoutId = null;
const enMsg = "This page supports English only yet.";
const koMsg = "영어만 지원 중인 페이지입니다.";

const CommanderPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const { message, addMessage, resetMessage } = useMessageStore(
    (state) => ({
      message: state.message,
      addMessage: state.addMessage,
      resetMessage: state.resetMessage,
    }),
    shallow
  );
  useEffect(() => {
    const $optMessage = langMode === "en" ? enMsg : koMsg;
    addMessage($optMessage);
    timeoutId = setTimeout(() => {
      resetMessage();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
      resetMessage();
    };
  }, []);
  const { id } = useParams();
  const [commander, setCommander] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    };
    const readCommander = async () => {
      const { json, success } = await API.readCommander(fetchOpt);
      if (!success) {
        navigate("/commanders");
      } else {
        setCommander(...json);
      }
    };
    readCommander();
  }, [id, navigate]);
  return (
    <section>
      {!message.length ? null : <p className="message_box">{message}</p>}
      {!commander ? (
        <H1>Loading...</H1>
      ) : (
        <CommanderDetail commander={commander} />
      )}
    </section>
  );
};

export default CommanderPage;
