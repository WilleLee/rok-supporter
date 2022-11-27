import { useNavigate } from "react-router-dom";
import { useLoggedInStore } from "../../store";
import styles from "../../styles/pages/event.module.scss";

const EventPage = () => {
  const navigate = useNavigate();
  const { loggedIn } = useLoggedInStore((state) => ({
    loggedIn: state.loggedIn,
  }));
  const onClickAddEvent = () => {
    if (loggedIn) navigate("/events/add-event");
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
    </section>
  );
};

export default EventPage;
