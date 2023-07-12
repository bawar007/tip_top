import { useContext } from "react";
import { AppContext } from "../../../../AppPageProvider/AppPageProvider";

const Slider = () => {
  const { picsFromBG } = useContext(AppContext);

  const imagesEl = picsFromBG.filter((el, index) => index < 6);

  const sliderItems = imagesEl.map((el, index) => (
    <div
      className="mySlides"
      key={Math.random(20)}
      style={
        index === 0
          ? { display: "flex", justifyContent: "center" }
          : { display: "none" }
      }
    >
      <img
        src={`http://localhost:5000/images/${el.first}`}
        alt={el.id}
        loading={index > 0 ? "lazy" : undefined}
      />
    </div>
  ));

  return (
    <div className="slider">
      <div className="slideshow-container">{sliderItems}</div>
    </div>
  );
};

export default Slider;
