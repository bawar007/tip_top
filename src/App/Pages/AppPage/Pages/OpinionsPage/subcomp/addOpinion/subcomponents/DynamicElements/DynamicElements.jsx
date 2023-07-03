import { useContext } from "react";
import { FormAddOpinionContext } from "../../../../helpers/formHelper";

const DynamicElements = () => {
  const { handleChange, email, text, textLenght, public_data, phone } =
    useContext(FormAddOpinionContext);
  return (
    <>
      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="email"
            value={email}
            onChange={handleChange}
            className="email_form"
            name="email"
            required
          />
          <span className="omrs-input-label">Email</span>
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="number"
            value={phone}
            onChange={handleChange}
            className="phone_form"
            name="phone"
            required
          />
          <span className="omrs-input-label">Numer telefonu</span>
          <span className="omrs-input-helper"></span>
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="text"
            value={text}
            onChange={handleChange}
            className="opinion_form"
            name="text"
            required
          />
          <span className="omrs-input-label">Opinia</span>
          <span className="omrs-input-helper">
            Minimum 50 znaków. Ilość znaków {textLenght}
          </span>
        </label>
      </div>

      <div className="omrs-input-group">
        <label className="omrs-input-underlined">
          <input
            type="date"
            value={public_data}
            onChange={handleChange}
            className="date_form"
            min="2020-01-01"
            name="public_data"
            required
          />
          <span className="omrs-input-helper">Data ukończenia projektu</span>
        </label>
      </div>
    </>
  );
};

export default DynamicElements;
