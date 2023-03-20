const StaticElements = ({ imie, nazwisko }) => {
  return (
    <>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            value={imie}
            className="imie_form"
            name="imie"
            required
            disabled
          />
          <span className="omrs-input-helper">Imię</span>
        </label>
      </div>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            value={nazwisko}
            className="nazwisko_form"
            name="nazwisko"
            required
            disabled
          />
          <span className="omrs-input-helper">Nazwisko</span>
        </label>
      </div>
    </>
  );
};

export default StaticElements;
