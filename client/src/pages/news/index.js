import { useNavigate } from "react-router-dom";
import { H1, H2, H3 } from "../../components/styled";
import useWindowSize from "../../hooks/useWindowSize";
import { useLangModeStore, useLoggedInStore } from "../../store";
import styles from "../../styles/pages/news.module.scss";

const NewsPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const $APPOLOGY =
    langMode === "en"
      ? "This page is not supported yet."
      : "서비스 예정인 페이지입니다.";
  const { innerWidth } = useWindowSize();
  const navigate = useNavigate();
  const { loggedIn } = useLoggedInStore((state) => ({
    loggedIn: state.loggedIn,
  }));
  const onClickAddEvent = () => {
    if (loggedIn) navigate("/news/add-news");
  };
  return (
    <section>
      {loggedIn ? (
        <div className={styles.logged_in_box}>
          <button onClick={onClickAddEvent} className={styles.add_event_btn}>
            Add +
          </button>
        </div>
      ) : null}
      {/*api로부터 저장된 이벤트들을 불러와 페이지에 뿌리는 컴포넌트 렌더링*/}
      <div style={{ marginTop: "40px" }}>
        {innerWidth > 720 ? (
          <H1>🛠 {$APPOLOGY} 🙇🏻‍♂️</H1>
        ) : innerWidth > 500 ? (
          <H2>🛠 {$APPOLOGY} 🙇🏻‍♂️</H2>
        ) : (
          <H3>🛠 {$APPOLOGY} 🙇🏻‍♂️</H3>
        )}
      </div>
    </section>
  );
};

export default NewsPage;
