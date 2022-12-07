import { useEffect } from "react";
import commanderSkills from "../data/commanderSkills";
import CommanderImage from "./CommanderImage";
import { H1 } from "./styled";

const CommanderDetail = ({ commander }) => {
  const { cmdSrc, cmdName } = commander;
  useEffect(() => {
    const { id, troopType } = commander;
    const skills = commanderSkills(troopType, id);
    if (skills) console.log(skills);
  }, [commander]);
  return (
    <>
      <H1>{String(commander.cmdName).split("_").join(" ").toUpperCase()}</H1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <CommanderImage cmdSrc={cmdSrc} cmdName={cmdName} />
      </div>
    </>
  );
};

export default CommanderDetail;
