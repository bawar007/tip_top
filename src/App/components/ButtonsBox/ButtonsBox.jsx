import "./ButtonsBox.scss";

const ButtonsBox = ({ onClick, textOne, textTwo, children }) => {
  return (
    <div className="btnBox">
      <button type="submit" className="btn_send">
        {textOne}
      </button>
      <button onClick={onClick} className="btn_send" type="button">
        {textTwo ? textTwo : "Odrzuć"}
      </button>
      {children}
    </div>
  );
};

export default ButtonsBox;
