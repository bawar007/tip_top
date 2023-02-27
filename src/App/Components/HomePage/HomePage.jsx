import { useContext, useEffect } from "react";
import { AppContext } from "../../Provider/Provider";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HomePage = () => {
  const { windowW, tip } = useContext(AppContext);

  useEffect(() => {
    const observerHome = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const arrowUp = document.querySelector(".ArrowUpTestLink");
        const menu = document.querySelector(".menu");
        if (entry.isIntersecting) {
          arrowUp.style.display = "none";
          menu.style.bottom = "10px";
        } else {
          arrowUp.style.display = "block";
          menu.style.bottom = "90px";
        }
      });
    });

    const homeEl = document.querySelector(".homePage");

    observerHome.observe(homeEl);
  });

  return (
    <section className="homePage" id="home">
      <div
        className="homeInfo"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1500"
      >
        {!windowW && (
          <img
            src={`${tip}/icons/LogoTipTopCss.svg`}
            alt="logo"
            className="logoItem"
          />
        )}
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
    </section>
  );
};

export default HomePage;
