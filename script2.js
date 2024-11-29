function scrambleText(element) {
  const text = element.textContent;
  const letters = text.split("");
  element.innerHTML = "";

  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    element.appendChild(span);
  });

  // When mouse hovers over the element
  element.addEventListener("mouseenter", () => {
    gsap.to(element.querySelectorAll("span"), {
      duration: 0.5,
      x: () => gsap.utils.random(-20, 20),
      y: () => gsap.utils.random(-20, 20),
      rotation: () => gsap.utils.random(-90, 90),
      ease: "power1.inOut",
      stagger: 0.05,
    });
  });

  // Reset animation when mouse leaves
  element.addEventListener("mouseleave", () => {
    gsap.to(element.querySelectorAll("span"), {
      duration: 0.5,
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      stagger: 0.05,
      ease: "power1.inOut",
    });
  });
}

const message = document.querySelector(".message");
const instructions = document.querySelector(".instructions");

scrambleText(message);
scrambleText(instructions);