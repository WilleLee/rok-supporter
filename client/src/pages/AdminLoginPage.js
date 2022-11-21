import { H2 } from "../components/styled";
import { useLangModeStore } from "../store";
import "../styles/pages/adminLogin.scss";

const AdminLoginPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  return (
    <section>
      <H2>
        {langMode === "en" ? `Sign in as Administrator` : `관리자로 접속`}
      </H2>
      <form className="admin_login__form">
        <input type={`password`} placeholder={`Admin Password`} />
        <input type={`submit`} value={`Confirm`} />
      </form>
    </section>
  );
};

export default AdminLoginPage;
