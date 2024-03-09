import "./Star.scss";

const Star = ({ className, onClick, onMouseOut, onMouseOver }) => {
  return (
    <img
      src="/icons/star.svg"
      alt="star"
      width="20"
      height="20"
      className={className}
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default Star;
