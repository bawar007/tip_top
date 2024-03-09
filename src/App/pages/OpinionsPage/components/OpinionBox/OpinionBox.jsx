import "./OpinionBox.scss";

const OpinionBox = ({ children, className, id }) => {
  return (
    <div className={`opinionBox ${className}`} id={id}>
      {children}
    </div>
  );
};

export default OpinionBox;
