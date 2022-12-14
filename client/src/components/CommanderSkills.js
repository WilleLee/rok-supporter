import styles from "../styles/components/commanderSkills.module.scss";
import { H4 } from "./styled";

const CommanderSkills = ({ skills }) => {
  return (
    <div className={styles.container}>
      {skills.map((skill, idx) => (
        <div className={styles.skill} key={idx}>
          <H4 className={styles.title}>
            {skill.title} (
            {String(skill.type)
              .split("")
              .map((a, i) => {
                if (i === 0) {
                  return a.toUpperCase();
                } else {
                  return a;
                }
              })
              .join("")}
            )
          </H4>
          {skill.expertise ? <p className={styles.note}>{skill.note}</p> : null}
          <p className={styles.description}>{skill.description}</p>
          {skill.expertise ? null : (
            <div className={styles.details}>
              {skill.details.map((detail, idx) => (
                <p key={idx}>
                  <strong>#{idx + 1}</strong> {detail.join(", ")}
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommanderSkills;
