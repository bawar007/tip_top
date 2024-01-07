const HomeInfo = () => {
  return (
    <div className="HomeInfo">
      <div
        className="box-flip--slider "
        style={{ backgroundColor: "rgba(247, 94, 178, 0.8)" }}
        onClick={() => document.querySelector(".galleryPage").scrollIntoView()}
      >
        {/* <Slider /> */}
      </div>

      <div className="box-flip">
        <div className="flip-content">
          <div className="front" style={{ backgroundColor: "white" }}>
            <img src="/icons/tiling.svg" alt="exp" width={200} height={200} />
            <span>TIP - TOP</span>
          </div>
          <div className="back">
            <p>
              TIP-TOP to firma, która jest zwięczeniem 15-letniego doświadczenia
              w glazurnictwie oraz wykończeniach wnętrz.
            </p>
          </div>
        </div>
      </div>

      <div className="box-flip">
        <div className="flip-content">
          <div
            className="front"
            style={{ backgroundColor: "rgba(247, 94, 178, 0.8)" }}
          >
            <img
              src="/icons/experience.svg"
              alt="exp"
              width={200}
              height={200}
            />
            <span>Doświadczenie</span>
          </div>
          <div className="back">
            <p>
              Dzięki dużemu doświadczeniu nasze usługi są wykonywane
              profesjonalnie, szybko i solidnie.
            </p>
          </div>
        </div>
      </div>

      <div className="box-flip">
        <div className="flip-content">
          <div className="front" style={{ backgroundColor: "#afcb1f" }}>
            <img src="/icons/priority.svg" alt="exp" width={200} height={200} />
            <span>Priorytety</span>
          </div>
          <div className="back">
            <p>
              Priorytetem dla nas jest dobry kontakt z klientem, dzięki czemu
              współpraca na tej linii przebiega bez najmniejszych komplikacji.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
