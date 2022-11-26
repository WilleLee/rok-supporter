import { Link } from "react-router-dom";
import styles from "../styles/components/commandersList.module.scss";

const CommandersList = ({ troopType }) => {
  // api를 통해 server로부터 troopType에 해당하는 list를 불러옴
  // 각 commander data는 img file의 path와 고유 id를 가짐

  return (
    <div>
      <Link to={`/commanders/id`}>
        <div className={styles.img_container}>
          <img
            src="/assets/commanders/sm_amanitore.png"
            alt="commander amanitore"
          />
          <p>Amanitore</p>
        </div>
      </Link>
      {/* ... */}
    </div>
  );
};

export default CommandersList;
