import { H1, H2, H3 } from "../components/styled";
import useScroll from "../hooks/useScroll";
import useWindowSize from "../hooks/useWindowSize";
import { useLangModeStore } from "../store";
import styles from "../styles/pages/about.module.scss";

const $WELCOME_MESSAGE = "All Hail Captain and Kingdom 1770";

const AboutPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  const { innerWidth } = useWindowSize();
  const content1 = useScroll("content1");
  const content5 = useScroll("content5");
  return (
    <section>
      {innerWidth >= 720 ? (
        <H1>{$WELCOME_MESSAGE}</H1>
      ) : (
        <H2>{$WELCOME_MESSAGE}</H2>
      )}
      <div className={styles.iframe_container}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/38HFWgBfd7w"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.contents__container} /*container*/>
        <div
          id="content1"
          className={`${styles.content} ${
            content1 ? styles.show : ""
          }`} /*introduce the kingdom as an unity of two different main alliances*/
        >
          <H1>
            {langMode === "en"
              ? "The Kingdom on which the Sun Never Sets"
              : "해가 지지 않는 왕국"}
          </H1>
          <div className={styles.content__container}>
            <div className={styles.img_container}>
              <img src="/assets/about/alliances.png" alt="kingdom alliances" />
            </div>
            <div className={styles.content__txts}>
              <div className={styles.content__txt}>
                <H2 style={{ textAlign: "left" }}>
                  {langMode === "en" ? "Two Main Alliances" : "2 연맹 체제"}
                </H2>
                <p>
                  {langMode === "en"
                    ? "The kingdom consists of two main alliances, N70s and N70D, and their sub alliances."
                    : "1770 왕국은 N70s, N70D 두 개의 메인 연맹과 부연맹들로 이루어져 있습니다."}
                </p>
              </div>
              <div className={styles.content__txt}>
                <H3 style={{ textAlign: "left" }}>
                  <span className="n70s">N70s</span> for Korean speakers and
                  their families
                </H3>
                <p>
                  If you speak Korean and like to hunt barbarians as well as
                  enemies during KvK seasons,<></>contact{" "}
                  <strong>N70 Captain</strong> or <strong>N70 Orange</strong> of
                  N70s to register your immigration form.
                </p>
              </div>
              <div className={styles.content__txt}>
                <H3 style={{ textAlign: "left" }}>
                  <span className="n70d">N70D</span> welcomes everybody that
                  fights on battlefields
                </H3>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div /*introduce main officers of the kingdom*/></div>
        <div /*influential parties of the kingdom*/></div>
        <div /*brief KvK history of the kingdom*/></div>
        <div
          id="content5"
          className={`${
            content5 ? "show" : ""
          }`} /*systems of KvK contribution and server events*/
        ></div>
        왕국소개 페이지 fruit fruit fruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruit fruit fruit fruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruit fruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit fruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
        fruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit
        fruitfruit fruitfruit fruitfruit fruitfruit fruitfruit fruit
      </div>
    </section>
  );
};

export default AboutPage;
