import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const useAdminOnly = (loggedIn) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) navigate("/");
  }, [loggedIn, navigate]);
};

export default useAdminOnly;
