import useAdminOnly from "../../hooks/useAdminOnly";
import { useLoggedIn } from "../../store";

const AddEventPage = () => {
  const { loggedIn } = useLoggedIn((state) => ({
    loggedIn: state.loggedIn,
  }));
  useAdminOnly(loggedIn);
  return (
    <section>
      <h1>add event here</h1>
    </section>
  );
};

export default AddEventPage;
