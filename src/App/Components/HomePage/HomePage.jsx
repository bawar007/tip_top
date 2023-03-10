import { useContext, useEffect } from "react";
import { AppContext } from "../../Provider/Provider";
import AOS from "aos";
import "aos/dist/aos.css";
import { images } from "../Gallery/data/image-data";

AOS.init();

const HomePage = () => {
  const { tip } = useContext(AppContext);

  useEffect(() => {
    const observerHome = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const arrowUpMobile = document.querySelector(".ArrowUpTestLink");
        const arrowUpPC = document.querySelector(".ArrowUpPC");
        const menu = document.querySelector(".menu");
        if (entry.isIntersecting) {
          if (arrowUpMobile) {
            arrowUpMobile.style.display = "none";
            menu.style.bottom = "10px";
          }

          if (arrowUpPC) {
            arrowUpPC.style.display = "none";
          }
        } else {
          if (arrowUpMobile) {
            arrowUpMobile.style.display = "block";
            menu.style.bottom = "90px";
          }
          if (arrowUpPC) {
            arrowUpPC.style.display = "block";
          }
        }
      });
    });

    const homeEl = document.querySelector(".homePage");
    observerHome.observe(homeEl);
  });

  const sliderItems = images.map((el, index) => (
    <div className="mySlides fade" key={index + el.id}>
      <img
        src={`${tip}${el.first}`}
        style={{ maxWidth: "25%", minHeight: "100%" }}
        alt={el.id}
      />
      <img
        src={`${tip}/gallery/pic_${index + 2}.jpg`}
        style={{ maxWidth: "25%", minHeight: "100%" }}
        alt={el.id}
      />
      <img
        src={`${tip}/gallery/pic_${index + 3}.jpg`}
        style={{ maxWidth: "25%", minHeight: "100%" }}
        alt={el.id}
      />
      <img
        src={`${tip}/gallery/pic_${index + 4}.jpg`}
        style={{ maxWidth: "25%", minHeight: "100%" }}
        alt={el.id}
      />
    </div>
  ));

  const circle = images.map((el, index) => (
    <span className="dot" key={index}></span>
  ));

  return (
    <section className="homePage" id="home">
      <div className="title_page_logo">
        <div>
          <span className="tip">TIP</span>
        </div>
        <div>
          <span className="top">TOP</span>
        </div>
      </div>
      <div className="homePage_content">
        <div className="slider">
          <div className="slideshow-container">{sliderItems}</div>
          <div className="circleItems">{circle}</div>
        </div>
        <div className="homeInfo">
          <img
            src={`${tip}/icons/LogoTipTopCss.svg`}
            alt="logo"
            className="logoItem homeItemLogo"
          />
          <div className="info">
            <h2>Tip - top</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              maiores, corporis labore totam ipsam laborum nostrum iste
              consectetur obcaecati, ratione vero cumque officia eveniet rerum
              distinctio placeat dolorem est dolor?
            </p>
          </div>
          <div className="info">
            <h2>Tip - top</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              maiores, corporis labore totam ipsam laborum nostrum iste
              consectetur obcaecati, ratione vero cumque officia eveniet rerum
              distinctio placeat dolorem est dolor?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
