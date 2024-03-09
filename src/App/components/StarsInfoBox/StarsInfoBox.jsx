const StarsInfoBox = ({ rate }) => {
  return (
    <div className="starInfoBox">
      <span className="info">{rate !== null && `Twoja ocena: ${rate}/5`}</span>
    </div>
  );
};

export default StarsInfoBox;
