import { useEffect, useState } from "react";
import commanderSkills from "../data/commanderSkills";
import CommanderImage from "./CommanderImage";
import { H1, H2 } from "./styled";
import styles from "../styles/components/commanderDetail.module.scss";
import { Link } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const CommanderDetail = ({ commander }) => {
  const { innerWidth } = useWindowSize();
  const { cmdSrc, cmdName } = commander;
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
        <CommanderImage cmdSrc={cmdSrc} cmdName={cmdName} />
        {!skills.length
          ? null
          : skills.map((skill, idx) => (
              <div key={idx}>
                <h3>{skill.title}</h3>
                {skill.expertise ? <p>{skill.note}</p> : null}
                <p>{skill.description}</p>
              </div>
            ))}
      </div>
    </>
  );
};

export default CommanderDetail;
