import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Footer from "../components/Footer";
import HomeGallery from "../components/HomeGallery";
import { useLangModeStore, useLoggedInStore } from "../store";
import styles from "../styles/pages/home.module.scss";

const HomePage = () => {
  const { loggedIn } = useLoggedInStore((state) => ({
    loggedIn: state.loggedIn,
  }));
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const [kingsMessage, setKingsMessage] = useState("");
  const navigate = useNavigate();
  const onClickKingsEmoji = () => {
    if (!loggedIn) return;
    navigate("/kings-message");
  };

  useEffect(() => {
    const getKingsMessage = async () => {
      const result = await API.readKingsMessage();
      const { success, kingsMessage } = result;
      if (!success) return;
      if (success && kingsMessage && typeof kingsMessage === "string") {
        return setKingsMessage(kingsMessage);
      }
      return;
    };
    getKingsMessage();
  }, []);
  return (
    <section>
      <div style={{ minHeight: "70vh" }}>
        {kingsMessage ? (
          <div className={styles.kings_message}>
            <p className={styles.kings_message__container}>
              <span
                onClick={onClickKingsEmoji}
                className={`${styles.kings_message__emoji} ${
                  loggedIn ? styles.admin : ""
                }`}
              >
                👸🏻
              </span>

              <span className={styles.kings_message__txt}>{kingsMessage}</span>
            </p>
          </div>
        ) : null}
        <HomeGallery />
      </div>
      <Footer langMode={langMode} />
    </section>
  );
};

export default HomePage;
