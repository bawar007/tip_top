import "./BackGroundForModals.scss";

const BackGroundForModals = ({ children, style }) => {
  return (
    <div className="bgForModals" style={style}>
      {children}
    </div>
  );
};

export default BackGroundForModals;
