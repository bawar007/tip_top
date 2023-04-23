export const observerContact = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    const social = document.querySelector(".social");
    if (entry.isIntersecting) {
      // Add the animation class
      const targetElement = entry.target;
      const logoEl = document.querySelectorAll(".logoTest");

      social.style.visibility = "visible";
      targetElement.classList.add("animate__rollIn", "animate__animated");

      logoEl.forEach((el) => (el.style.display = "block"));
    } else {
      social.style.visibility = "hidden";
    }
  });
});
