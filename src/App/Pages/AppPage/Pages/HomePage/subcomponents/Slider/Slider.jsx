import useGetAllPics from "../../../../hooks/useGetAllPics";

const API_KEY = process.env.REACT_APP_API_KEY;
const HOST = "http://localhost:5000";

const Slider = () => {
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
