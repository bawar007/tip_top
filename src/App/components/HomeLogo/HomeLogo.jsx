import "./HomeLogo.scss";

const HomeLogo = () => {
  return (
    <div className="HomeInfo">
      <div
        className="box-flip"
        style={{ backgroundColor: "rgba(247, 94, 178, 0.9)" }}
      ></div>

      <div className="box-flip">
        <img src="/icons/tiling.svg" alt="exp" width={200} height={200} />
        <span>TIP - TOP</span>
      </div>

      <div
        className="box-flip"
        style={{ backgroundColor: "rgba(247, 94, 178, 0.9)" }}
      >
        <img src="/icons/experience.svg" alt="exp" width={200} height={200} />
        <span>Doświadczenie</span>
      </div>

      <div
        className="box-flip"
        style={{ backgroundColor: "rgba(174, 203, 31, 0.9)" }}
      >
        <img src="/icons/priority.svg" alt="exp" width={200} height={200} />
        <span>Priorytety</span>
      </div>
    </div>
  );
};

export default HomeLogo;
