import "./BoxFlip.scss";

const BoxFlip = ({ style, srcPic, text }) => {
  return (
    <div className="box-flip" style={style}>
      {srcPic && (
        <>
          <img src={`/icons/${srcPic}`} alt="exp" width={200} height={200} />
          <span>{text}</span>
        </>
      )}
    </div>
  );
};

export default BoxFlip;
