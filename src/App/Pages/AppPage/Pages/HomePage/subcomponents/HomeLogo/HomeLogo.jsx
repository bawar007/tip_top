const HomeLogo = () => {
  return (
    <div className="HomeInfo">
      <div
        className="box-flip"
        style={{ backgroundColor: "rgba(247, 94, 178, 0.8)" }}
        onClick={() => document.querySelector(".galleryPage").scrollIntoView()}
      >
        {/* <Slider /> */}
      </div>

      <div className="box-flip">
        <img src="/icons/tiling.svg" alt="exp" width={200} height={200} />
        <span>TIP - TOP</span>
      </div>

      <div
        className="box-flip"
        style={{ backgroundColor: "rgba(247, 94, 178, 0.8)" }}
      >
        <img src="/icons/experience.svg" alt="exp" width={200} height={200} />
        <span>Doświadczenie</span>
      </div>

      <div className="box-flip">
        <img src="/icons/priority.svg" alt="exp" width={200} height={200} />
        <span>Priorytety</span>
      </div>
    </div>
  );
};

export default HomeLogo;
