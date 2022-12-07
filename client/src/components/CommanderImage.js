import styles from "../styles/components/commanderImage.module.scss";

const CommanderImage = ({ cmdSrc, cmdName, link }) => {
  return (
    <div className={`${styles.img_container} ${link ? styles.link : ""}`}>
      <img src={`${cmdSrc}`} alt={`${cmdName}`} />
      <p>{String(cmdName).split("_")[0].toUpperCase()}</p>
    </div>
  );
};

export default CommanderImage;
