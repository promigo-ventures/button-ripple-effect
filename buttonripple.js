const button = document.querySelector(".btn");
const corner = "bottom-right"; // change this as needed

button.addEventListener("mouseenter", () => {
  const width = button.offsetWidth;
  const height = button.offsetHeight;

  let xPos = 0;
  let yPos = 0;

  switch (corner) {
    case "top-left":
      xPos = 0;
      yPos = 0;
      break;
    case "top-right":
      xPos = width;
      yPos = 0;
      break;
    case "bottom-left":
      xPos = 0;
      yPos = height;
      break;
    case "bottom-right":
      xPos = width;
      yPos = height;
      break;
  }

  button.style.setProperty("--xPos", `${xPos}px`);
  button.style.setProperty("--yPos", `${yPos}px`);
});
