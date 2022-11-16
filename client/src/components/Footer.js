import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../styles/components/footer.scss";
import useWindowSize from "../hooks/useWindowSize";

const Footer = () => {
  const { innerWidth } = useWindowSize();
  return (
    <>
      <footer className="footer__container">
        <div className="footer__title_wrapper">
          <h4 className="footer__title">
            desinged and developed by <span>N70 Orange 🍊</span>
          </h4>
        </div>
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
            in-game.
          </span>
        </div>
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
