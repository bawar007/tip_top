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
    if (imgEl) {
      imgEl.classList.remove("activeNaviLogo");
      if (sectionElNaviItem === ".Projects--NaviItem") {
        if (visiblePercentage > 40) {
          imgEl.classList.add("activeNaviLogo");
        } else if (visiblePercentage < 20 && visiblePercentage > 0) {
          imgEl.classList.remove("activeNaviLogo");
        }
      } else {
        if (visiblePercentage > 50) {
          imgEl.classList.add("activeNaviLogo");
        } else if (visiblePercentage < 40 && visiblePercentage > 0) {
          imgEl.classList.remove("activeNaviLogo");
        }
      }
    }
  }
};
