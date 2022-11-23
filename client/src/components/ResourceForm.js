import { useEffect, useState } from "react";
import resourcePackage from "../data/resourcePackage";
import { H3 } from "./styled";

const ResourceForm = ({ type, langMode }) => {
  // prop.type = "corn"??
  const pack = resourcePackage[type];
  const [sums, setSums] = useState([0, 0, 0, 0, 0, 0, 0]);
  class onChange {
    static zero(event) {
      const copy = [...sums];
      copy[0] = event.target.value * pack[0];
      setSums(copy);
    }
    static one(event) {
      const copy = [...sums];
      copy[1] = event.target.value * pack[1];
      setSums(copy);
    }
    static two(event) {
      const copy = [...sums];
      copy[2] = event.target.value * pack[2];
      setSums(copy);
    }
    static three(event) {
      const copy = [...sums];
      copy[3] = event.target.value * pack[3];
      setSums(copy);
    }
    static four(event) {
      const copy = [...sums];
      copy[4] = event.target.value * pack[4];
      setSums(copy);
    }
    static five(event) {
      const copy = [...sums];
      copy[5] = event.target.value * pack[5];
      setSums(copy);
    }
    static six(event) {
      const copy = [...sums];
      copy[6] = event.target.value * pack[6];
      setSums(copy);
    }
  }
  const [resourceName, setResourceName] = useState(type);
  useEffect(() => {
    const handleLangMode = () => {
      switch (type) {
        case "corn":
          langMode === "en" ? setResourceName(type) : setResourceName("옥수수");
          break;
        case "wood":
          langMode === "en" ? setResourceName(type) : setResourceName("나무");
          break;
        case "stone":
          langMode === "en" ? setResourceName(type) : setResourceName("돌");
          break;
        case "gold":
          langMode === "en" ? setResourceName(type) : setResourceName("금");
          break;
        default:
          break;
      }
    };
    handleLangMode();
  }, [langMode, type]);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
      className="ct_form resource"
    >
      <H3>{resourceName ? resourceName.toUpperCase() : null}</H3>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-0`}>{pack[0]}</label>
        <input id={`${type}-0`} type={"number"} onChange={onChange.zero} />
      </div>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-1`}>{pack[1]}</label>
        <input id={`${type}-1`} type={"number"} onChange={onChange.one} />
      </div>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-2`}>{pack[2]}</label>
        <input id={`${type}-2`} type={"number"} onChange={onChange.two} />
      </div>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-3`}>{pack[3]}</label>
        <input id={`${type}-3`} type={"number"} onChange={onChange.three} />
      </div>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-4`}>{pack[4]}</label>
        <input id={`${type}-4`} type={"number"} onChange={onChange.four} />
      </div>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-5`}>{pack[5]}</label>
        <input id={`${type}-5`} type={"number"} onChange={onChange.five} />
      </div>
      <div className="ct_form__input_container resource">
        <label htmlFor={`${type}-6`}>{pack[6]}</label>
        <input id={`${type}-6`} type={"number"} onChange={onChange.six} />
      </div>
      <div style={{ marginTop: "10px" }} className="ct_cal_result">
        {langMode === "en" ? (
          <p>
            You have <span>{sums.reduce((prev, curr) => prev + curr, 0)}</span>{" "}
            {resourceName}s.
          </p>
        ) : (
          <p>
            현재 {resourceName} 보유량은{" "}
            <span>{sums.reduce((prev, curr) => prev + curr, 0)}</span>입니다.
          </p>
        )}
      </div>
    </form>
  );
};

export default ResourceForm;
