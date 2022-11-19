const HpCalculatorPage = () => {
  return (
    <section>
      <h1>Honor Point Calculator</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="ct_form resource hp"
      >
        <div className="ct_form__hp_input_grid">
          {/* inputs */}
          <div className="ct_from__input_wrapper">
            {/* patrols, resource */}
            <div className="ct_form__input_container">
              <label htmlFor={`hi`}>lvl 41-45 Barbarian Petrol</label>
              <input id={`hi`} type={"number"} />
            </div>
          </div>
          <div className="ct_from__input_wrapper">
            {/* forts */}
            <div className="ct_form__input_container">
              <label htmlFor={`hi`}>lvl 11 Barbarian Fort</label>
              <input id={`hi`} type={"number"} />
            </div>
          </div>
        </div>
        <div className="ct_cal_result">{/* result */}</div>
      </form>
    </section>
  );
};

export default HpCalculatorPage;
