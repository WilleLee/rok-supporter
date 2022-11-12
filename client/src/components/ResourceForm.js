const ResourceForm = () => {
  return (
    <form className="ct_form">
      <div className="ct_form__input_container">
        <label htmlFor="t5">1k</label>
        <input id="t5" type={"number"} />
      </div>
      <div className="ct_form__input_container">
        <label htmlFor="t4">10k</label>
        <input id="t4" type={"number"} />
      </div>
      <div className="ct_form__input_container">
        <label htmlFor="t3">50k</label>
        <input id="t3" type={"number"} />
      </div>
      <div className="ct_form__input_container">
        <label htmlFor="t2">150k</label>
        <input id="t2" type={"number"} />
      </div>
      <div className="ct_form__input_container">
        <label htmlFor="t1">500k</label>
        <input id="t1" type={"number"} />
      </div>
      <input type={"submit"} value="calculate" />
    </form>
  );
};

export default ResourceForm;
