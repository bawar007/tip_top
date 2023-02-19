import { useContext, useRef } from "react";
import { AppContext } from "../../Provider/Provider";

const HomePage = ({ homeRef }) => {
  const { windowW } = useContext(AppContext);

  const ref1 = useRef(null);

  const isInViewport1 = false;

  return (
    <section className="homePage" ref={homeRef}>
      <div className="homeInfo">
        {!windowW && (
          <img src="/icons/LogoTipTopCss.svg" alt="logo" className="logoItem" />
        )}
        <div className={isInViewport1 ? "info infoAnime" : "info"} ref={ref1}>
          <h2>Tip - top</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            maiores, corporis labore totam ipsam laborum nostrum iste
            consectetur obcaecati, ratione vero cumque officia eveniet rerum
            distinctio placeat dolorem est dolor?
          </p>
        </div>
        <div
          className="info"
          // data-aos="fade-right"
          // data-aos-offset="300"
          // data-aos-easing="ease-in-sine"
          // data-aos-duration="1500"
        >
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
