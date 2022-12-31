import { useEffect, useState } from "react";
import commanderSkills from "../data/commanderSkills";
import CommanderImage from "./CommanderImage";
import { H1, H2 } from "./styled";
import styles from "../styles/components/commanderDetail.module.scss";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import CommanderSkills from "./CommanderSkills";

const CommanderDetail = ({ commander }) => {
  const { innerWidth } = useWindowSize();
  const { cmdSrc, cmdName, troopType, attackType, targetType } = commander;
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const { id, troopType } = commander;
    const data = commanderSkills(troopType, id);
    if (data) setSkills([...data]);
  }, [commander]);
  return (
    <>
      <div className={styles.title_container}>
        <div>
          <Link to={`/commanders`}>
            <div>
              <p>&larr;</p>
            </div>
          </Link>
        </div>
        <div>
          {!commander.cmdName ? (
            <H1>Loading...</H1>
          ) : innerWidth > 680 ? (
            <H1>
              {String(commander.cmdName).split("_").join(" ").toUpperCase()}
            </H1>
          ) : (
            <H2>
              {String(commander.cmdName).split("_").join(" ").toUpperCase()}
            </H2>
          )}
        </div>
        <div></div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ position: "relative" }}>
          <CommanderImage cmdSrc={cmdSrc} cmdName={cmdName} />
          <div style={{ position: "absolute", top: "100%", left: 0 }}>
            <div>
              <img
                width={30}
                src={`/assets/talent_icons/talent_icon_${troopType}.webp`}
                alt={troopType}
              />
              <span>{troopType}</span>
            </div>
            <div>
              <img
                width={30}
                src={`/assets/talent_icons/talent_icon_${targetType}.webp`}
                alt={targetType}
              />
              <span>{targetType}</span>
            </div>
            <div>
              <img
                width={30}
                src={`/assets/talent_icons/talent_icon_${attackType}.webp`}
                alt={attackType}
              />
              <span>{attackType}</span>
            </div>
          </div>
        </div>
        {!skills.length ? null : <CommanderSkills skills={skills} />}
      </div>
    </>
  );
};

export default CommanderDetail;
