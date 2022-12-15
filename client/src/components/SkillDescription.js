import styles from "../styles/components/skillDescription.module.scss";

const SkillDescription = ({ description }) => {
  const descriptions = description.split(/#\d/gi);
  return (
    <p className={styles.description}>
      {descriptions.length === 1 ? (
        <span>{descriptions[0]}</span>
      ) : (
        <span>
          {descriptions.map((a, idx) => {
            if (idx === 0) {
              return <span>{a}</span>;
            } else {
              return (
                <span>
                  <strong>#{idx}</strong>
                  {a}
                </span>
              );
            }
          })}
        </span>
      )}
    </p>
  );
};

export default SkillDescription;
