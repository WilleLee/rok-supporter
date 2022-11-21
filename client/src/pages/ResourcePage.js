import ResourceForm from "../components/ResourceForm";
import "../styles/pages/resource.scss";
import { H2 } from "../components/styled.js";
import { useLangModeStore } from "../store";

const ResourcePage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  return (
    <section>
      <H2>
        {langMode === "en" ? "Resource Calculator" : "자원 보유량 계산기"}
      </H2>
      <div className="resource__grid_container">
        <div /*옥수수*/ className="resource__grid_item">
          <ResourceForm type={"corn"} langMode={langMode} />
        </div>
        <div /*나무*/ className="resource__grid_item">
          <ResourceForm type={"wood"} langMode={langMode} />
        </div>
        <div /*돌*/ className="resource__grid_item">
          <ResourceForm type={"stone"} langMode={langMode} />
        </div>
        <div /*금*/ className="resource__grid_item">
          <ResourceForm type={"gold"} langMode={langMode} />
        </div>
      </div>
    </section>
  );
};

export default ResourcePage;
