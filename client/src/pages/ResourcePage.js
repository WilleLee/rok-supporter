import ResourceForm from "../components/ResourceForm";
import "../styles/pages/resource.scss";
import { H1 } from "../components/styled.js";

const ResourcePage = () => {
  return (
    <section>
      <H1>Resource Calculator</H1>
      <div className="resource__grid_container">
        <div /*옥수수*/ className="resource__grid_item">
          <ResourceForm type={"corn"} />
        </div>
        <div /*나무*/ className="resource__grid_item">
          <ResourceForm type={"wood"} />
        </div>
        <div /*돌*/ className="resource__grid_item">
          <ResourceForm type={"stone"} />
        </div>
        <div /*금*/ className="resource__grid_item">
          <ResourceForm type={"gold"} />
        </div>
      </div>
    </section>
  );
};

export default ResourcePage;
