export const observerHome = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const arrowUpMobile = document.querySelector(".ArrowUpTestLink");
    const arrowUpPC = document.querySelector(".ArrowUpPC");
    const menu = document.querySelector(".menu");
    if (entry.isIntersecting) {
      if (arrowUpMobile) {
        arrowUpMobile.style.display = "none";
        menu.style.bottom = "10px";
      }

      if (arrowUpPC) {
        arrowUpPC.style.display = "none";
      }
    } else {
      if (arrowUpMobile) {
        arrowUpMobile.style.display = "block";
        menu.style.bottom = "90px";
      }
      if (arrowUpPC) {
        arrowUpPC.style.display = "block";
      }
    }
  });
});
