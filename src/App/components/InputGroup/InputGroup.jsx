import "./InputGroup.scss";

const InputGroup = ({
  value,
  onChange,
  name,
  children,
  type,
  placeholder,
  onFocus,
  disabled,
}) => {
  return (
    <div className="omrs-input-group">
      <label className="omrs-input-underlined">
        <input
          type={type}
          value={value}
          className={`${name}_form`}
          name={name}
          required
          onChange={(e) => onChange(e)}
          onFocus={onFocus}
          disabled={disabled}
        />
        {placeholder && <span className="omrs-input-label">{placeholder}</span>}
        {children}
      </label>
    </div>
  );
};

export default InputGroup;
