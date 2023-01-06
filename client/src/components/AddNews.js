import { useOutsideClick } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import styles from "../styles/components/addNews.module.scss";

const Options = {
  blank: "",
  notice: "notice",
  interview: "interview",
  event: "event",
};

const AddNews = ({ langMode }) => {
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => {
      ref.current.blur();
    },
  });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className={styles.form}
    >
      {/*새로운 news를 POST 하는 textarea*/}
      <div className={`${styles.form__wrapper} ${styles.form__wrapper_1}`}>
        <input
          type={"text"}
          placeholder={langMode === "en" ? "Title" : "제목"}
        />
        <div className={styles.select_box}>
          <select ref={ref}>
            <option value={""}>
              --{langMode === "en" ? "CATEGORY" : "카테고리"}--
            </option>
            <option value={Options.notice}>
              {langMode === "en" ? "Notice" : "공지"}
            </option>
            <option value={Options.interview}>
              {langMode === "en" ? "Interview" : "인터뷰"}
            </option>
            <option value={Options.event}>
              {langMode === "en" ? "Event" : "이벤트"}
            </option>
          </select>
          <span>&darr;</span>
        </div>
      </div>
      <div className={`${styles.form__wrapper} ${styles.form__wrapper_2}`}>
        <textarea />
        <div className={styles.wrapper_2__controls}>
          <div className={styles.file_container}>
            <input type={"file"} />
            <div className={styles.file_icon}>
              <FontAwesomeIcon icon={faPaperclip} />
            </div>
          </div>
          <input type={"submit"} value={"Confirm"} />
        </div>
      </div>
    </form>
  );
};

export default AddNews;
