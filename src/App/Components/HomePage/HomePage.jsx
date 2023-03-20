import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { observerHome } from "./helpers/observer/observer";

import Slider from "./subcomponents/Slider/Slider";
import HomeInfo from "./subcomponents/HomeInfo/HomeInfo";
import TitlePageLogo from "./subcomponents/TitlePageLogo/TitlePageLogo";

AOS.init();

const HomePage = () => {
  useEffect(() => {
    const homeEl = document.querySelector(".homePage");
    observerHome.observe(homeEl);
  });

  return (
    <section className="homePage" id="home">
      <TitlePageLogo />
      <div className="homePage_content">
        <Slider />
        <HomeInfo />
      </div>
    </section>
  );
};

export default HomePage;
