import { useEffect, useState } from "react";
import shallow from "zustand/shallow";
import { H2 } from "../components/styled";
import hpCalculators from "../data/hpCalculators";
import { useLangModeStore, useMessageStore } from "../store";

let timeoutId = null;
const enMsg = "Optimized to HA and So8 KvK seasons.";
const koMsg = "영찬 및 치경에 최적화되어 있습니다.";

const HpCalculatorPage = () => {
  const { message, addMessage, resetMessage } = useMessageStore(
    (state) => ({
      message: state.message,
      addMessage: state.addMessage,
      resetMessage: state.resetMessage,
    }),
    shallow
  );
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));
  useEffect(() => {
    const $optMessage = langMode === "en" ? enMsg : koMsg;
    addMessage($optMessage);
    timeoutId = setTimeout(() => {
      resetMessage();
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
      resetMessage();
    };
  }, [addMessage, resetMessage, langMode]);
  const [totalHp, setTotalHp] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      const { id } = event.target[i];
      const count = Number(event.target[i].value);
      !count ? (sum += 0) : (sum += hpCalculators[id](count));
    }
    setTotalHp(sum);
  };
  return (
    <section>
      {!message.length ? null : <p className="message_box">{message}</p>}
      <H2>
        {langMode === "en" ? "Honor Point Calculator" : "명예 포인트 계산기"}
      </H2>
      <form onSubmit={onSubmit} className="ct_form hp">
        <div className="grid">
          {/* inputs */}
          <div className="ct_form__input_section">
            {/* patrols, resource */}
            <div className="ct_form__input_container">
              <label htmlFor={`petrol1`}>
                lvl 41-45{" "}
                {langMode === "en" ? "Barbarian Petrol" : "야만인 순찰자"}
              </label>
              <input id={`petrol1`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`petrol2`}>
                lvl 46-50{" "}
                {langMode === "en" ? "Barbarian Petrol" : "야만인 순찰자"}
              </label>
              <input id={`petrol2`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`petrol3`}>
                lvl 51-55{" "}
                {langMode === "en" ? "Barbarian Petrol" : "야만인 순찰자"}
              </label>
              <input id={`petrol3`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`resource`}>
                {langMode === "en"
                  ? "Finished Resource Point"
                  : "자원지 채집 완료"}
              </label>
              <input id={`resource`} type={"number"} />
            </div>
          </div>
          <div className="ct_form__input_section">
            {/* forts */}
            <div className="ct_form__input_container">
              <label htmlFor={`fort1`}>
                lvl 11 {langMode === "en" ? "Barbarian Fort" : "야만인 도시"}
              </label>
              <input id={`fort1`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`fort2`}>
                lvl 12 {langMode === "en" ? "Barbarian Fort" : "야만인 도시"}
              </label>
              <input id={`fort2`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`fort3`}>
                lvl 13 {langMode === "en" ? "Barbarian Fort" : "야만인 도시"}
              </label>
              <input id={`fort3`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`fort4`}>
                lvl 14 {langMode === "en" ? "Barbarian Fort" : "야만인 도시"}
              </label>
              <input id={`fort4`} type={"number"} />
            </div>
            <div className="ct_form__input_container">
              <label htmlFor={`fort5`}>
                lvl 15 {langMode === "en" ? "Barbarian Fort" : "야만인 도시"}
              </label>
              <input id={`fort5`} type={"number"} />
            </div>
          </div>
        </div>
        <input
          type={"submit"}
          value={langMode === "en" ? "Calculate" : "계산"}
        />
      </form>
      <div className="ct_cal_result">
        {/* result */}
        {langMode === "en" ? (
          <p>
            These are summed up to <span>{totalHp}</span> honor points.
          </p>
        ) : (
          <p>
            총 <span>{totalHp}</span>의 명예 포인트를 얻을 수 있습니다.
          </p>
        )}
      </div>
    </section>
  );
};

export default HpCalculatorPage;
