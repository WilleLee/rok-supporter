import { useOutsideClick } from "@chakra-ui/react";
import { useRef } from "react";
import { useLangModeStore } from "../store";
import styles from "../styles/components/addNews.module.scss";

const Options = {
  blank: "",
  notice: "notice",
  interview: "interview",
  event: "event",
};

const AddNews = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const ref = useRef();
  useOutsideClick({
    ref: ref,
    handler: () => {
      ref.current.blur();
    },
  });
  return (
    <form className={styles.form}>
      {/*새로운 news를 POST 하는 textarea*/}
      <div className={`${styles.form__wrapper} ${styles.form__wrapper_1}`}>
        <input
          type={"text"}
          placeholder={langMode === "en" ? "Title" : "제목"}
        />
        <div className={styles.select_box}>
          <select ref={ref}>
            <option value={""}>
              --{langMode === "en" ? "카테고리" : "CATEGORY"}--
            </option>
            <option value={Options.notice}>
              {langMode === "en" ? "공지" : "Notice"}
            </option>
            <option value={Options.interview}>
              {langMode === "en" ? "인터뷰" : "Interview"}
            </option>
            <option value={Options.event}>
              {langMode === "en" ? "이벤트" : "Event"}
            </option>
          </select>
          <span>&darr;</span>
        </div>
      </div>
      <div className={`${styles.form__wrapper} ${styles.form__wrapper_2}`}>
        <textarea />
        <div className={styles.wrapper_2__controls}>
          <input type={"file"} />
          <input type={"submit"} value={"Confirm"} />
        </div>
      </div>
    </form>
  );
};

export default AddNews;
