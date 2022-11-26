import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const usePublicOnly = (loggedIn) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (loggedIn) navigate("/");
  }, [loggedIn, navigate]);
};

export default usePublicOnly;
