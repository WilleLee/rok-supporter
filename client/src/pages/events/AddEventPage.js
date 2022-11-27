import useAdminOnly from "../../hooks/useAdminOnly";
import { useLoggedInStore } from "../../store";

const AddEventPage = () => {
  const { loggedIn } = useLoggedInStore((state) => ({
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
