import BoxFlip from "../BoxFlip/BoxFlip";
import "./Section.scss";

const Section = ({ children, className, id, title, boxFlip }) => {
  const pinkColor = "rgba(247, 94, 178, 0.9)";
  return (
    <section className={className} id={id}>
      {boxFlip && (
        <div className="customLogo">
          <BoxFlip srcPic="tiling.svg" text="TIP - TOP" />
          <div className="leftSide">
            <BoxFlip
              style={{ backgroundColor: pinkColor }}
              srcPic="experience.svg"
              text="Doświadczenie"
            />
            <BoxFlip
              style={{ backgroundColor: "rgba(174, 203, 31, 0.9)" }}
              srcPic="priority.svg"
              text="Priorytety"
            />
          </div>
        </div>
      )}
      {title && <h1 className="title_page">{title}</h1>}
      {children}
    </section>
  );
};

export default Section;
