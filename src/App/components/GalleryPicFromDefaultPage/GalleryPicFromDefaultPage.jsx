import "./GalleryPicFromDefaultPage.scss";

const GalleryPicFromDefaultPage = ({ image, onClick, HOST }) => {
  return (
    <div className="GalleryPicOnPage_content">
      <img
        src={`${HOST}/images${image.first}`}
        alt={image.id}
        className="GalleryPicOnPage_content--img"
        onClick={onClick}
        width="250"
        height="250"
      />
    </div>
  );
};

export default GalleryPicFromDefaultPage;
