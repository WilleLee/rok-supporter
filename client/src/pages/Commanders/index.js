import { useState } from "react";
import CommandersList from "../../components/CommandersList";

const troopTypes = {
  $ARC: "archer",
  $INF: "infantry",
  $CAV: "cavalry",
};

const CommandersPage = () => {
  const [troopType, setTroopType] = useState(troopTypes.$ARC);
  return (
    <section>
      <div>
        <button onClick={() => setTroopType(troopTypes.$ARC)}>archer</button>
        <button onClick={() => setTroopType(troopTypes.$INF)}>infantry</button>
        <button onClick={() => setTroopType(troopTypes.$CAV)}>cavalry</button>
      </div>
      <h1>hi</h1>
      <CommandersList troopType={troopType} />
    </section>
  );
};

export default CommandersPage;
