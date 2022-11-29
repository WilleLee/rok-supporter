import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/components/footer.scss";
import useWindowSize from "../hooks/useWindowSize";

const Footer = ({ langMode }) => {
  const { innerWidth } = useWindowSize();
  return (
    <>
      <footer className={`footer__container ${innerWidth < 540 ? "sc" : ""}`}>
        <div className="footer__title_wrapper">
          <h4 className="footer__title">
            desinged and developed by <span>N70 Orange 🍊</span>
          </h4>
        </div>
        {langMode === "en" ? (
          <div className="footer__front_message">
            <span>
              If you're interested in migrating to the kingdom 1770,
              {innerWidth > 870 ? " " : <br />}contact us through{" "}
              <a
                href="https://open.kakao.com/o/gTcrAlge"
                target={"_blank"}
                rel="noopener noreferrer"
                className="footer__link"
              >
                <strong>Kakao Talk open chats</strong>
              </a>{" "}
              for Korean speakers.
            </span>
            <span>
              Otherwise, you may simply message <strong>ADINAVO of N70D</strong>{" "}
              or{innerWidth > 870 ? " " : <br />}{" "}
              <strong>
                <span style={{ color: "orange" }}>N70 Orange</span> of N70s
              </strong>{" "}
              in-game.
            </span>
          </div>
        ) : (
          <div className="footer__front_message">
            <span>
              1770 왕국에 관심이 있으신가요?{innerWidth > 870 ? " " : <br />}
              한국어 능통자라면{" "}
              <a
                href="https://open.kakao.com/o/gTcrAlge"
                target={"_blank"}
                rel="noopener noreferrer"
                className="footer__link"
              >
                <strong>카카오톡 오픈채팅</strong>
              </a>{" "}
              을 통해 연락주세요.
            </span>
            <span>
              그렇지 않은 경우 서버 내 다국적 연맹인{" "}
              <strong>N70D의 ADINAVO</strong> 또는
              {innerWidth > 870 ? " " : <br />}
              <strong>
                N70s의 <span style={{ color: "orange" }}>N70 Orange</span>
              </strong>
              에게 인게임 채팅하시기 바랍니다.
            </span>
          </div>
        )}
        <hr />
        <div className="footer__copyrights">
          <span>Copyright &copy; 2022 Wille Lee</span>
          <span>
            <FontAwesomeIcon icon={faGithub} /> Click{" "}
            <a
              href="https://github.com/WilleLee/rok-supporter"
              target={"_blank"}
              rel="noopener noreferrer"
              className="footer__link"
            >
              here
            </a>{" "}
            to visit the GitHub repository.
          </span>
        </div>
        {/*https://open.kakao.com/o/gTcrAlge*/}
      </footer>
    </>
  );
};

export default Footer;
