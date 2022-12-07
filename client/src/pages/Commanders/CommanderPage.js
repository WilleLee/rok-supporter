import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api";
import CommanderDetail from "../../components/CommanderDetail";
import { H1 } from "../../components/styled";

const CommanderPage = () => {
  const { id } = useParams();
  const [commander, setCommander] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const fetchOpt = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    };
    const readCommander = async () => {
      const { json, success } = await API.readCommander(fetchOpt);
      if (!success) {
        navigate("/commanders");
        return;
      }
      setCommander(...json);
    };
    readCommander();
  }, [id, navigate]);
  return (
    <section>
      {!commander ? (
        <H1>Loading...</H1>
      ) : (
        <CommanderDetail commander={commander} />
      )}
    </section>
  );
};

export default CommanderPage;
