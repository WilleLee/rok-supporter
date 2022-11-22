import { H2 } from "../components/styled";
import { useLangModeStore } from "../store";
import "../styles/pages/adminLogin.scss";

const $apiUrl = "http://localhost:8080/api/login";

const AdminLoginPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const onSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch($apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(event.target),
    }); // statusCode 200 400
    const json = await res.json(); // success: true / false
    console.log(json);
    // json.success === true -> store loggedIn = true -> home page
    // josn.success false -> store -> home page
  };
  return (
    <section>
      <H2>
        {langMode === "en" ? "Sign in as Administrator" : "관리자로 접속"}
      </H2>
      <form onSubmit={onSubmit} className="admin_login__form">
        <input
          name="password"
          type="password"
          placeholder={
            langMode === "en"
              ? "Admin password is required."
              : "관리자 비밀번호를 입력하세요."
          }
        />
        <input type="submit" value={langMode === "en" ? "Confirm" : "확인"} />
      </form>
    </section>
  );
};

export default AdminLoginPage;
