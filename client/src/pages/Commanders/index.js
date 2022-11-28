import { useState } from "react";
import CommandersList from "../../components/CommandersList";
import styles from "../../styles/pages/commanders.module.scss";

const troopTypes = {
  $ARC: "archer",
  $INF: "infantry",
  $CAV: "cavalry",
};

const CommandersPage = () => {
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
      <h1>hi</h1>
      <CommandersList troopType={troopType} />
    </section>
  );
};

export default CommandersPage;
