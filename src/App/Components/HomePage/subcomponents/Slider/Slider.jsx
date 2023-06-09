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
      style={
        index === 0
          ? { display: "flex", justifyContent: "center" }
          : { display: "none" }
      }
    >
      <img
        src={`${tip}${el.first}`}
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
