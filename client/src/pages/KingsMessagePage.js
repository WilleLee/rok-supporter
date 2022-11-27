import { useNavigate } from "react-router-dom";
import API from "../api";
import { H2 } from "../components/styled";
import { useLangModeStore } from "../store";
import styles from "../styles/pages/kingsMessage.module.scss";

const KingsMessagePage = () => {
  const navigate = useNavigate();
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const onSubmit = async (event) => {
    event.preventDefault();
    const {
      kingsMessage: { value },
    } = event.target;
    value.length < 4 || typeof value !== "string"
      ? console.log("invalid")
      : console.log(value);
    const fetchOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ kingsMessage: value }),
    };
    const { success } = await API.createKingsMessage(fetchOpt);
    console.log(success);
    navigate("/");
  };
  return (
    <section>
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
