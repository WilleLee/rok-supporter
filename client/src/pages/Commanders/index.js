import { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import API from "../../api";
import CommandersList from "../../components/CommandersList";
import { H2 } from "../../components/styled";
import { useLoadedCommandersStore } from "../../store";
import styles from "../../styles/pages/commanders.module.scss";

const troopTypes = {
  $ARC: "archer",
  $INF: "infantry",
  $CAV: "cavalry",
  $LEA: "leadership",
};
const CommandersPage = () => {
  const { loadedCommanders, loadCommanders } = useLoadedCommandersStore(
    (state) => ({
      loadedCommanders: state.loadedCommanders,
      loadCommanders: state.loadCommanders,
    }),
    shallow
  );
  const [commanders, setCommanders] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllCommanders = async () => {
      if (loadedCommanders.length) {
        setCommanders(loadedCommanders);
        setLoading(false);
        return;
      }
      const { json, success } = await API.readAllCommanders();
      if (!success) return;
      setCommanders(json);
      loadCommanders(json);
      setLoading(false);
    };
    getAllCommanders();
  }, [loadedCommanders, loadCommanders]);
  const [troopType, setTroopType] = useState(troopTypes.$ARC);
  return (
    <section>
      <div className={styles.troop_type_btns}>
        <button
          className={`${troopType === troopTypes.$ARC ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$ARC)}
        >
          {troopTypes.$ARC.toUpperCase()}
        </button>
        <button
          className={`${troopType === troopTypes.$INF ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$INF)}
        >
          {troopTypes.$INF.toUpperCase()}
        </button>
        <button
          className={`${troopType === troopTypes.$CAV ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$CAV)}
        >
          {troopTypes.$CAV.toUpperCase()}
        </button>
        <button
          className={`${troopType === troopTypes.$LEA ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$LEA)}
        >
          {troopTypes.$LEA.toUpperCase()}
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
