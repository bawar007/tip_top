import { useContext } from "react";
import useGetAllPics from "../../../../hooks/useGetAllPics";
import { AppContext } from "../../../../AppPageProvider/AppPageProvider";

const API_KEY = process.env.REACT_APP_API_KEY;

const Slider = () => {
  const { HOST, windowW } = useContext(AppContext);

  const { data, loading } = useGetAllPics(HOST, API_KEY);

  if (loading) return;

  const imagesEl = data.filter((el, index) => index < 6);

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
        src={`${HOST}/images/${el.first}`}
        alt={el.id}
        loading={index > 0 ? "lazy" : ""}
        width={100}
        height={100}
      />
      {windowW && (
        <img
          src={`${HOST}/images/${el.all[el.all.length - 1]}`}
          alt={el.id}
          loading={index > 0 ? "lazy" : ""}
          width={100}
          height={100}
        />
      )}
    </div>
  ));

  return (
    <div className="slider">
      <div className="slideshow-container">{sliderItems}</div>
    </div>
  );
};

export default Slider;
