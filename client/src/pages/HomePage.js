import useScroll from "../hooks/useScroll";
import "../styles/pages/home.scss";

const HomePage = () => {
  const reached = useScroll("point");
  return (
    <section>
      <div className="home__kings_message">
        <p>
          <span className="kings_message__emoji">👸🏻</span>
          <span className="kings_message__txt">야도가 미래다</span>
        </p>
      </div>
      <div
        style={{
          marginTop: "15px",
          marginBottom: "30px",
          width: "100%",
          padding: "0 20px",
        }}
      >
        <img style={{ width: "100%" }} src="/main.png" alt="main" />
      </div>
      <p id="point" className={`${reached ? "reached" : ""}`}>
        hi
      </p>
    </section>
  );
};

export default HomePage;
