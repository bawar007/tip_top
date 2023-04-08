import { useContext } from "react";
import { images } from "../../../Gallery/data/image-data";
import { AppContext } from "../../../../Provider/Provider";

const Slider = () => {
  const { tip } = useContext(AppContext);

  const sliderItems = images.map((el, index) => (
    <div className="mySlides" key={Math.random(20)}>
      <img src={`${tip}${el.first}`} alt={el.id} />
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
