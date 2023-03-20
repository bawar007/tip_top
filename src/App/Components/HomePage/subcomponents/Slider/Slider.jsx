import { useContext } from "react";
import { images } from "../../../Gallery/data/image-data";
import { AppContext } from "../../../../Provider/Provider";

const Slider = () => {
  const { tip } = useContext(AppContext);

  const sliderItems = images.map((el, index) => (
    <div className="mySlides fade" key={index + el.id}>
      <img
        src={`${tip}${el.first}`}
        style={{ maxWidth: "25%", minHeight: "100%" }}
        alt={el.id}
      />
    </div>
  ));

  const circle = images.map((el, index) => (
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
