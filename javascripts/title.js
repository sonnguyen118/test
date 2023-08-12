document.addEventListener("DOMContentLoaded", function () {
  const textElements = document.querySelectorAll(".blinking-text");
  const colors = ["red", "green", "blue", "orange", "purple"];
  let isPaused = false;
  let timeouts = [];

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function changeColors(element) {
    const shuffledColors = [...colors];
    shuffleArray(shuffledColors);

    const text = element.innerText;
    let newText = "";

    for (let i = 0; i < text.length; i++) {
      const currentChar = text[i];
      const currentColor = shuffledColors[i % shuffledColors.length];
      newText += `<span style="color: ${currentColor}">${currentChar}</span>`;
    }

    element.innerHTML = newText;

    const nextChangeDelay = Math.random() * 200 + 200;
    timeouts.push(setTimeout(() => changeColors(element), nextChangeDelay));
  }

  textElements.forEach((element) => {
    element.addEventListener("click", () => {
      if (isPaused) {
        isPaused = false;
        timeouts.forEach((timeout) => {
          clearTimeout(timeout);
        });
        timeouts = [];
        textElements.forEach((el) => {
          changeColors(el);
        });
      } else {
        isPaused = true;
        timeouts.forEach((timeout) => {
          clearTimeout(timeout);
        });
        timeouts = [];
      }
    });

    changeColors(element);
  });
});
