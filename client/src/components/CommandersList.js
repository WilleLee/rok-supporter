import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/components/commandersList.module.scss";

const CommandersList = ({ commander }) => {
  // api를 통해 server로부터 troopType에 해당하는 list를 불러옴
  // 각 commander data는 img file의 path와 고유 id를 가짐
  const [cmd, setCmd] = useState();
  useEffect(() => {
    if (commander) setCmd(commander);
  }, [commander]);
  return (
    <div className={styles.container}>
      {cmd ? (
        <Link to={`/commanders/${cmd.id}`}>
          <div className={styles.img_container}>
            <img src={`${cmd.cmdSrc}`} alt={`${cmd.cmdName}`} />
            <p>{String(cmd.cmdName).split("_")[0]}</p>
          </div>
        </Link>
      ) : null}
      {/* ... */}
    </div>
  );
};

export default CommandersList;
