import { useState } from "react";
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
    const title = event.target.title.value;
    const description = event.target.description.value;
    const imageFile = event.target.imageFile.files[0];
    console.log(`title: ${title}`);
    console.log(`description: ${description}`);
    console.log(`file: ${imageFile}`);
  };
  const [fileName, setFileName] = useState("");
  const onFileChange = (event) => {
    if (!event.target.files.length) return;
    const {
      target: { files },
    } = event;
    const newFileName = files[0].name;
    setFileName(newFileName);
  };
  return (
    <section>
      <H1>Add News Here</H1>
      <form
        onSubmit={onSubmit}
        className="ct_form add_event"
        encType="multipart/form-data"
      >
        <div className="ct_form__input_container">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            type={"text"}
            maxLength={30}
            minLength={2}
          />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="imageFile">Image</label>
          <div className="ct_form__file_container">
            <input
              onChange={onFileChange}
              name="imageFile"
              id="imageFile"
              type={"file"}
              accept="image/*"
              size={3000000}
            />
            <div className="file_container__fake_input">
              <button>Choose</button>
              {fileName.length ? <p>{fileName}</p> : null}
            </div>
          </div>
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="description">Description</label>
          <input id="description" name="description" type={"text"} />
        </div>
        <input type={"submit"} value={langMode === "en" ? "Confirm" : "확인"} />
      </form>
    </section>
  );
};

export default AddNewsPage;