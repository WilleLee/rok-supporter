import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../../api";
import { H1 } from "../../components/styled";

const CommanderPage = () => {
  const { id } = useParams();
  const [commander, setCommander] = useState({});
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
      if (!success) return;
      setCommander(...json);
    };
    readCommander();
  }, [id]);
  return (
    <section>
      {!commander ? <H1>Loading...</H1> : <H1>{commander.cmdName}</H1>}
    </section>
  );
};

export default CommanderPage;
