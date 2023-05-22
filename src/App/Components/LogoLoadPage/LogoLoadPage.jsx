import { useContext, useEffect } from "react";
import { AppContext } from "../../Provider/Provider";

const LogoLoadPage = () => {
  const { tip } = useContext(AppContext);
  useEffect(() => {
    const homePage = document.querySelector(".homePage");
    const logoPage = document.querySelector(".LogoLoadPage");
    setTimeout(() => {
      homePage.scrollIntoView();
      setTimeout(() => logoPage.remove(), 1000);
    }, 2500);
  });
  return (
    <div className="LogoLoadPage">
      <img
        srcSet={`${tip}/icons/LogoTipTopCss.svg`}
        alt="logo"
        className="LogoLoadPage--img"
        fetchpriority="high"
      />
    </div>
  );
};

export default LogoLoadPage;
