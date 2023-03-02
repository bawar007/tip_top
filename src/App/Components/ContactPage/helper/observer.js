export const observer = new IntersectionObserver((entries) => {
  // Loop over the entries
  entries.forEach((entry) => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
      const targetElement = entry.target;
      const testedEl = document.querySelectorAll(".tested");
      const contactEl = document.querySelector(".contact");
      const pictureEl = document.querySelector(".picture");
      const logoEl = document.querySelectorAll(".logoTest");

      targetElement.classList.add("animate__rollIn", "animate__animated");
      testedEl.forEach((el) =>
        el.classList.add("animate__animated", "animate__jackInTheBox")
      );
      contactEl.classList.add("animationContactPage");
      pictureEl.classList.add("animationPicture");
      logoEl.forEach((el) => (el.style.display = "block"));
    }
  });
});
