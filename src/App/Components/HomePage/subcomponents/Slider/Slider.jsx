import { useContext } from "react";
import { images } from "../../../Gallery/data/image-data";
import { AppContext } from "../../../../Provider/Provider";

const Slider = () => {
  const { tip } = useContext(AppContext);

  const imagesEl = images.filter((el, index) => index < 6);

  const sliderItems = imagesEl.map((el, index) => (
    <div
      className="mySlides"
      key={Math.random(20)}
      style={index === 0 ? { display: "flex" } : { display: "none" }}
    >
      <img
        src={`${tip}${el.first}`}
        alt={el.id}
        loading={index > 0 ? "lazy" : undefined}
      />
    </div>
  ));

  const circle = imagesEl.map((el, index) => (
    <span className="dot" key={index}></span>
  ));

  return (
    <div className="slider">
      <div className="slideshow-container">{sliderItems}</div>
      <div className="circleItems">{circle}</div>
    </div>
  );
};

export default Slider;
