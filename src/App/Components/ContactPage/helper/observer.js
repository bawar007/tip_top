export const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      const targetElement = entry.target;
      const logoEl = document.querySelectorAll(".logoTest");
      const mapEl = document.querySelector("#map");
      targetElement.classList.add("animate__rollIn", "animate__animated");

      setTimeout(() => {
        mapEl.style.display = "block";
        mapEl.classList.add("animationMap");
      }, 2000);

      logoEl.forEach((el) => (el.style.display = "block"));
    }
  });
});
