export const obliczProcentWidocznosci = (elRef) => {
  const sectionEl = elRef;
  const sectionElNaviItem = sectionEl.dataset.naviitem;
  if (sectionEl && "getBoundingClientRect" in sectionEl) {
    const rect = sectionEl.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const visibleHeight =
      Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0);
    const visiblePercentage = (visibleHeight / sectionEl.clientHeight) * 100;
    const imgEl = document.querySelector(`${sectionElNaviItem} > img`);
    const liEl = imgEl.parentElement.parentElement;
    if (imgEl) {
      imgEl.classList.remove("activeNaviLogo");
      liEl.classList.remove("active");
      console.log(sectionElNaviItem);
      if (
        sectionElNaviItem === ".Projects--NaviItem" ||
        sectionElNaviItem === ".Ofert-NaviItem"
      ) {
        if (visiblePercentage > 40) {
          imgEl.classList.add("activeNaviLogo");
          liEl.classList.add("active");
          sectionEl.childNodes[0].classList.add("customWidthTitlePage");
        } else if (visiblePercentage < 20 && visiblePercentage > 0) {
          imgEl.classList.remove("activeNaviLogo");
          liEl.classList.remove("active");
          sectionEl.childNodes[0].classList.remove("customWidthTitlePage");
        }
      } else if (sectionElNaviItem === ".WhyUs-NaviItem") {
        if (visiblePercentage > 11) {
          sectionEl.childNodes[0].classList.add("customWidthTitlePage");
          imgEl.classList.add("activeNaviLogo");
          liEl.classList.add("active");
        } else if (visiblePercentage < 10 && visiblePercentage > 0) {
          imgEl.classList.remove("activeNaviLogo");
          liEl.classList.remove("active");
          sectionEl.childNodes[0].classList.remove("customWidthTitlePage");
        }
      } else {
        if (visiblePercentage > 50) {
          imgEl.classList.add("activeNaviLogo");
          liEl.classList.add("active");
          sectionEl.childNodes[0].classList.add("customWidthTitlePage");
        } else if (visiblePercentage < 40 && visiblePercentage > 0) {
          imgEl.classList.remove("activeNaviLogo");
          liEl.classList.remove("active");
          sectionEl.childNodes[0].classList.remove("customWidthTitlePage");
        }
      }
    }
  }
};
