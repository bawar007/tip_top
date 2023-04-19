import AOS from "aos";
import "aos/dist/aos.css";

import Slider from "./subcomponents/Slider/Slider";
import HomeInfo from "./subcomponents/HomeInfo/HomeInfo";

AOS.init();

const HomePage = () => {
  return (
    <section className="homePage" id="home">
      <div className="homePage_content">
        <Slider />
        <HomeInfo />
      </div>
    </section>
  );
};

export default HomePage;
