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
            desinged and developed by <span>N70 Orange π</span>
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
              1770 μκ΅­μ κ΄μ¬μ΄ μμΌμ κ°μ?{innerWidth > 870 ? " " : <br />}
              νκ΅­μ΄ λ₯ν΅μλΌλ©΄{" "}
              <a
                href="https://open.kakao.com/o/gTcrAlge"
                target={"_blank"}
                rel="noopener noreferrer"
                className="footer__link"
              >
                <strong>μΉ΄μΉ΄μ€ν‘ μ€νμ±ν</strong>
              </a>{" "}
              μ ν΅ν΄ μ°λ½μ£ΌμΈμ.
            </span>
            <span>
              κ·Έλ μ§ μμ κ²½μ° μλ² λ΄ λ€κ΅­μ  μ°λ§ΉμΈ{" "}
              <strong>N70Dμ ADINAVO</strong> λλ
              {innerWidth > 870 ? " " : <br />}
              <strong>
                N70sμ <span style={{ color: "orange" }}>N70 Orange</span>
              </strong>
              μκ² μΈκ²μ μ±ννμκΈ° λ°λλλ€.
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
