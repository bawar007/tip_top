import InputGroup from "../InputGroup/InputGroup";
import { setDate } from "../../helpers/opinionsHelpers";

const Form = ({
  children,
  onSubmit,
  valueImie,
  valueImieCheck,
  onChange,
  valueEmail,
  valueEmailCheck,
  valueOpinionText,
  valueOpinionTextCheck,
  valueDate,
  valueDateCheck,
}) => {
  return (
    <form onSubmit={onSubmit} className="opinion_form ">
      {valueImieCheck && (
        <InputGroup
          value={valueImie}
          onChange={onChange}
          name="imie"
          type="text"
          placeholder="Imie"
        />
      )}
      {valueEmailCheck && (
        <InputGroup
          value={valueEmail}
          onChange={onChange}
          name="email"
          type="email"
          placeholder="Email"
        />
      )}
      {valueOpinionTextCheck && (
        <InputGroup
          value={valueOpinionText}
          onChange={onChange}
          name="opinion_text"
          type="text"
          placeholder="Opinia"
        >
          <span className="omrs-input-helper">
            Minimum 50 znaków. Ilość znaków:
            {valueOpinionText.length}
          </span>
        </InputGroup>
      )}
      {valueDateCheck && (
        <InputGroup
          value={valueDate}
          onChange={onChange}
          name="date"
          type="date"
          onFocus={() => setDate()}
        >
          <span className="omrs-input-helper">Data ukończenia projektu</span>
        </InputGroup>
      )}
      {children}
    </form>
  );
};

export default Form;
