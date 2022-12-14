import { H1 } from "../../components/styled";
import useAdminOnly from "../../hooks/useAdminOnly";
import { useLangModeStore, useLoggedInStore } from "../../store";

const AddNewsPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const { loggedIn } = useLoggedInStore((state) => ({
    loggedIn: state.loggedIn,
  }));
  useAdminOnly(loggedIn);
  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section>
      <H1>Add Event Here</H1>
      <form onSubmit={onSubmit} className="ct_form add_event">
        <div className="ct_form__input_container">
          <label htmlFor="title">Title</label>
          <input id="title" type={"text"} />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="eventimage">Image</label>
          <input id="eventimage" type={"file"} />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="description">Description</label>
          <input id="description" type={"text"} />
        </div>
        <input type={"submit"} value={langMode === "en" ? "Confirm" : "확인"} />
      </form>
    </section>
  );
};

export default AddNewsPage;
