import HomeInfo from "./subcomponents/HomeInfo/HomeInfo";

const HomePage = () => {
  return (
    <section className="homePage" id="home" data-naviitem=".Home--NaviItem">
      <div className="homePage_content">
        <HomeInfo />
      </div>
    </section>
  );
};

export default HomePage;
