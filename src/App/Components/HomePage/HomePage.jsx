import { useContext } from "react";
import { AppContext } from "../../Provider/Provider";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HomePage = ({ homeRef }) => {
  const { windowW, tip } = useContext(AppContext);

  return (
    <section className="homePage" ref={homeRef} id="home">
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
