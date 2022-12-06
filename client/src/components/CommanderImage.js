import styles from "../styles/components/commanderImage.module.scss";

const CommanderImage = ({ cmdSrc, cmdName }) => {
  return (
    <div className={styles.img_container}>
      <img src={`${cmdSrc}`} alt={`${cmdName}`} />
      <p>{String(cmdName).split("_")[0].toUpperCase()}</p>
    </div>
  );
};

export default CommanderImage;
