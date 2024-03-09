import "./ContentInfoBox.scss";

const ContentInfoBox = ({ children }) => {
  return (
    <div className="content_info">
      <p>{children}</p>
    </div>
  );
};

export default ContentInfoBox;
