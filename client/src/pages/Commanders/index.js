import { useEffect, useState } from "react";
import API from "../../api";
import CommandersList from "../../components/CommandersList";
import { H2 } from "../../components/styled";
import styles from "../../styles/pages/commanders.module.scss";

const troopTypes = {
  $ARC: "archer",
  $INF: "infantry",
  $CAV: "cavalry",
};
const CommandersPage = () => {
  const [commanders, setCommanders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllCommanders = async () => {
      const { json, success } = await API.readAllCommanders();
      if (!success) return;
      setCommanders(json);
      setLoading(false);
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
      <div
        className={`${styles.commanders_list__container} ${
          loading ? "" : styles.loaded
        }`}
      >
        {commanders.length ? (
          commanders
            .filter((a) => a.troopType === troopType)
            .map((commander, i) => (
              <CommandersList commander={commander} key={i} />
            ))
        ) : (
          <H2>Loading...</H2>
        )}
      </div>
      <CommandersList troopType={troopType} />
    </section>
  );
};

export default CommandersPage;
