import styles from "../styles/components/skillDescription.module.scss";

const SkillDescription = ({ description }) => {
  const descriptions = description.split(/#\d/gi);
  console.log(descriptions);
  console.log(description.match(/#\d/gi));
  const indexes = description.match(/#\d/gi);
  return (
    <p className={styles.description}>
      {descriptions.length === 1 ? (
        <span>{descriptions[0]}</span>
      ) : (
        <span>
          {descriptions.map((a, idx) => {
            if (idx === 0) {
              return <span key={idx}>{a}</span>;
            } else {
              return (
                <span key={idx}>
                  <strong>{indexes[idx - 1]}</strong>
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
