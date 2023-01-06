import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../api";
import { H1 } from "../../components/styled";
import useAdminOnly from "../../hooks/useAdminOnly";
import { useLangModeStore, useLoggedInStore } from "../../store";

const AddNewsPage = () => {
  const navigate = useNavigate();
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const { loggedIn } = useLoggedInStore((state) => ({
    loggedIn: state.loggedIn,
  }));
  useAdminOnly(loggedIn);
  const onSubmit = async (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    const imageFile = event.target.imageFile.files[0];
    console.log(`title: ${title}`);
    console.log(`description: ${description}`);
    console.log(`file: ${imageFile}`);
    const imgSrc = imageFile.name;
    const category = event.target.category.value;
    const fetchOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ title, description, imgSrc, category }),
    };
    const { success } = await API.postNews(fetchOpt);
    if (!success) {
      console.log("failed");
      return;
    } else {
      console.log("succeeded");
      navigate("/news");
    }
  };
  const [currImgFile, setCurrImgFile] = useState("");
  const [fileName, setFileName] = useState("");
  const onFileChange = (event) => {
    if (!event.target.files.length) return;
    const {
      target: { files },
    } = event;
    console.log(files[0]);
    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onloadend = () => {
      setCurrImgFile(reader.result);
    };
    const newFileName = files[0].name;
    setFileName(newFileName);
  };
  return (
    <section>
      <H1>Add News Here</H1>
      {!currImgFile.length ? null : (
        <img width={120} src={currImgFile} alt="current file uploaded" />
      )}
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
          <label htmlFor="category">Category</label>
          <input
            id="category"
            name="category"
            type={"text"}
            maxLength={15}
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
