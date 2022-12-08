import { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import API from "../../api";
import CommandersList from "../../components/CommandersList";
import { H2 } from "../../components/styled";
import troopTypes from "../../data/troopTypes";
import {
  useLangModeStore,
  useLoadedCommandersStore,
  useTroopTypeStore,
} from "../../store";
import styles from "../../styles/pages/commanders.module.scss";

const CommandersPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const { troopType, setTroopType } = useTroopTypeStore(
    (state) => ({
      troopType: state.troopType,
      setTroopType: state.setTroopType,
    }),
    shallow
  );
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
  return (
    <section>
      <div className={styles.troop_type_btns}>
        <button
          className={`${troopType === troopTypes.$ARC ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$ARC)}
        >
          {langMode === "en" ? "ARCHER" : "궁병"}
        </button>
        <button
          className={`${troopType === troopTypes.$INF ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$INF)}
        >
          {langMode === "en" ? "INFANTRY" : "보병"}
        </button>
        <button
          className={`${troopType === troopTypes.$CAV ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$CAV)}
        >
          {langMode === "en" ? "CAVALRY" : "기마병"}
        </button>
        <button
          className={`${troopType === troopTypes.$LEA ? styles.active : ""}`}
          onClick={() => setTroopType(troopTypes.$LEA)}
        >
          {langMode === "en" ? "LEADERSHIP" : "리더십"}
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
