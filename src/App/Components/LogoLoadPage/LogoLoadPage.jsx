import { useContext, useEffect, useRef } from "react";
import { AppContext } from "../../Provider/Provider";

const LogoLoadPage = () => {
  const { tip } = useContext(AppContext);
  const LogoEl = useRef(null);
  useEffect(() => {
    if (LogoEl) {
      observerLogo.observe(LogoEl.current);
    }
  });

  const observerLogo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const homePage = document.querySelector(".homePage");
        setTimeout(() => {
          homePage.scrollIntoView();
        }, 2000);
        setTimeout(() => (LogoEl.current.style.display = "none"), 3500);
      }
    });
  });

  return (
    <div className="LogoLoadPage" ref={LogoEl}>
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
