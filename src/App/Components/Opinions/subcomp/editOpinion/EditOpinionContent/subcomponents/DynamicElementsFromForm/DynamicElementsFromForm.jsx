const DynamicElementsFromForm = ({ textO, handleChangeText, public_data }) => {
  return (
    <>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            value={textO}
            onChange={handleChangeText}
            className="opinion_form"
            required
          />
          <span className="omrs-input-label">Opinia</span>
          <span className="omrs-input-helper">
            Minimum 50 znaków. Ilość znaków {textO.length}
          </span>
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="date"
            value={public_data}
            className="date_form"
            min="2020-01-01"
            required
            disabled
          />
          <span className="omrs-input-helper">Data ukończenia projektu</span>
        </label>
      </div>
    </>
  );
};

export default DynamicElementsFromForm;
