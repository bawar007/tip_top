export const ObserverSections = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const checkedContactPage = entry.target.classList.contains("contactPage");
    const checkedHomePage = entry.target.classList.contains("homePage");
    const checkedFooter = entry.target.classList.contains("footer");
    const checkedInfoFromOferts = entry.target.classList.contains(
      "multi-container--infoBox"
    );

    if (checkedContactPage) {
      const social = document.querySelector(".social");
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const logoEl = document.querySelectorAll(".logoTest");

        social.style.visibility = "visible";
        targetElement.classList.add("animate__rollIn", "animate__animated");

        logoEl.forEach((el) => (el.style.display = "block"));
      } else {
        social.style.visibility = "hidden";
      }
    }

    if (checkedHomePage) {
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
    }

    if (checkedFooter) {
      const ArrowUp = document.querySelector(".ArrowUpTest");

      if (ArrowUp) {
        if (entry.isIntersecting) {
          ArrowUp.classList.add("white");
        } else {
          ArrowUp.classList.remove("white");
        }
      }
    }

    if (checkedInfoFromOferts) {
      if (entry.isIntersecting) {
        entry.target.classList.add(
          "animate__animated",
          "animate__fadeInBottomLeft"
        );
      }
    }
  });
});
