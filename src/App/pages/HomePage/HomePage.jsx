import HomeContent from "../../components/HomeContent/HomeContent";
import HomeLogo from "../../components/HomeLogo/HomeLogo";

import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="homePage" id="home" data-naviitem=".Home--NaviItem">
      <div className="homePage_content">
        <HomeLogo />
        <HomeContent />
      </div>
    </section>
  );
};

export default HomePage;
