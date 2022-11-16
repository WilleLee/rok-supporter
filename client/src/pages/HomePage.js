import shallow from "zustand/shallow";
import Footer from "../components/Footer";
import useScroll from "../hooks/useScroll";
import { useKingsMessage } from "../store";
import "../styles/pages/home.scss";

const HomePage = () => {
  const { kingsMessage } = useKingsMessage(
    (state) => ({ kingsMessage: state.kingsMessage }),
    shallow
  );

  const reached = useScroll("point");
  return (
    <section>
      <div className="home__kings_message">
        <p>
          <span className="kings_message__emoji">👸🏻</span>
          <span className="kings_message__txt">{kingsMessage}</span>
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
        hiaskghksagih
      </p>
      <Footer />
    </section>
  );
};

export default HomePage;
