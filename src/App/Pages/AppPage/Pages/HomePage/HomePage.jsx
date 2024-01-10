import HomeContent from "./subcomponents/HomeContent/HomeContent";
import HomeLogo from "./subcomponents/HomeLogo/HomeLogo";

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
