const controlsNumber = document.querySelector(".controls__number");
const controlsColor = document.querySelector(".controls__color");
const blocksList = document.querySelector(".blocks-list");

let blocks = [];
let changeCounter = 0;

controlsNumber.addEventListener("change", function (e) {
  const value = e.target.value;
  if (value < 0) return;

  if (value > blocks.length) {
    for (let i = blocks.length; i < value; i++) {
      const block = document.createElement("div");
      block.className = "block";
      block.textContent = i + 1;

      blocks.push(block);

      blocksList.appendChild(block);
    }
  }

  let i = blocks.length;
  while (i > value) {
    const block = blocks.pop();
    block.remove();

    i--;
  }
});

controlsColor.addEventListener("change", function (e) {
  changeCounter++;

  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    if (changeCounter % 2 !== 0 && i % 2 === 0) {
      block.style.backgroundColor = e.target.value;
    } else if (changeCounter % 2 === 0 && i % 2 !== 0) {
      block.style.backgroundColor = e.target.value;
    } else {
      block.style.backgroundColor = "#ffffff";
    }
  }
});
