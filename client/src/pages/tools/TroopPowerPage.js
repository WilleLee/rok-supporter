import { useState } from "react";
import { H2 } from "../../components/styled";
import troopPowerData from "../../data/troopPowerData";
import { useLangModeStore, useMessageStore } from "../../store";
import shallow from "zustand/shallow";

const TroopPowerPage = () => {
  const { langMode } = useLangModeStore((state) => ({
    langMode: state.langMode,
  }));

  const { message, addMessage, resetMessage } = useMessageStore(
    (state) => ({
      message: state.message,
      addMessage: state.addMessage,
      resetMessage: state.resetMessage,
    }),
    shallow
  );

  const [troopPower, setTroopPower] = useState(0);
  const onSubmit = (event) => {
    event.preventDefault();
    const troopNums = [];
    for (let i = 0; i < 5; i++) {
      const num = Number(event.target[i].value);
      if (Number.isNaN(num)) {
        addMessage("All inputs must be number.");
        setTimeout(() => {
          resetMessage();
        }, 3000);
        return;
      }
      troopNums.push(num);
    }
    const currPower =
      troopPowerData.t5 * troopNums[0] +
      troopPowerData.t4 * troopNums[1] +
      troopPowerData.t3 * troopNums[2] +
      troopPowerData.t2 * troopNums[3] +
      troopPowerData.t1 * troopNums[4];
    setTroopPower(currPower);
  };
  return (
    <section>
      {!message.length ? null : <p className="message_box">{message}</p>}
      <H2>
        {langMode === "en" ? "Troop Power Calculator" : "부대 전투력 계산기"}
      </H2>
      <form onSubmit={onSubmit} className="ct_form troop_power">
        <div className="ct_form__input_container">
          <label htmlFor="t5">T5</label>
          <input id="t5" type={"number"} />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="t4">T4</label>
          <input id="t4" type={"number"} />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="t3">T3</label>
          <input id="t3" type={"number"} />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="t2">T2</label>
          <input id="t2" type={"number"} />
        </div>
        <div className="ct_form__input_container">
          <label htmlFor="t1">T1</label>
          <input id="t1" type={"number"} />
        </div>
        <input
          type={"submit"}
          value={langMode === "en" ? "Calculate" : "계산"}
        />
      </form>
      <div className="ct_cal_result">
        {langMode === "en" ? (
          <p>
            These are summed up to <span>{troopPower}</span> troop power.
          </p>
        ) : (
          <p>
            총 부대 전투력은 <span>{troopPower}</span>입니다.
          </p>
        )}
      </div>
    </section>
  );
};

export default TroopPowerPage;
