import { useEffect, useState } from "react";
import API from "../../api";
import CommandersList from "../../components/CommandersList";
import styles from "../../styles/pages/commanders.module.scss";

const troopTypes = {
  $ARC: "archer",
  $INF: "infantry",
  $CAV: "cavalry",
};
const CommandersPage = () => {
  const [commanders, setCommanders] = useState([]);
  useEffect(() => {
    const getAllCommanders = async () => {
      const { json, success } = await API.readAllCommanders();
      if (!success) return;
      setCommanders(json);
    };
    getAllCommanders();
  }, []);
  const [troopType, setTroopType] = useState(troopTypes.$ARC);
  return (
    <section>
      <div className={styles.troop_type_btns}>
        <button
          className={`${troopType === troopTypes.$ARC ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$ARC)}
        >
          archer
        </button>
        <button
          className={`${troopType === troopTypes.$INF ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$INF)}
        >
          infantry
        </button>
        <button
          className={`${troopType === troopTypes.$CAV ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$CAV)}
        >
          cavalry
        </button>
      </div>
      {commanders.length
        ? commanders.map((a, i) => (
            <div key={i}>
              <img src={`${a.cmdSrc}`} alt="commander" />
              <h1>{a.cmdName}</h1>
            </div>
          ))
        : null}
      <h1>hi</h1>
      <CommandersList troopType={troopType} />
    </section>
  );
};

export default CommandersPage;
