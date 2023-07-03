const StaticElementsFromForm = ({ editOpinion }) => {
  const { imie, nazwisko, email, phone } = editOpinion[0];
  return (
    <>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input type="text" value={imie} className="imie_form" disabled />
        </label>
      </div>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            value={nazwisko}
            className="nazwisko_form"
            disabled
          />
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input type="email" value={email} className="email_form" disabled />
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="number"
            value={phone}
            className="phone_form"
            required
            disabled
          />
        </label>
      </div>
    </>
  );
};

export default StaticElementsFromForm;
