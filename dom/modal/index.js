const openModalBtn = document.querySelector(".btn-open-modal");

let modal;

const texts = [
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem omnis,
  deserunt laborum sequi quisquam officiis minima, veritatis saepe
  inventore sapiente ex. Eveniet ipsa temporibus fugit perferendis illo
  corporis facilis consectetur?`,
  `Lorem ipsum dolor sit amet, consectetur
  adipisicing elit. Inventore, perferendis repudiandae. Facilis ipsum
  hic quaerat recusandae aperiam! Incidunt, quos enim.`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
];

function openModal() {
  if (modal) return;

  modal = document.createElement("div");
  modal.className = "modal";

  modal.addEventListener("click", function (e) {
    if (e.target === this) {
      closeModal();
    }
  });

  const modalBlock = document.createElement("div");
  modalBlock.className = "modal__block";
  modal.appendChild(modalBlock);

  const modalClose = document.createElement("button");
  modalClose.className = "modal__close";
  modalClose.textContent = "✖";
  modalBlock.appendChild(modalClose);

  modalClose.addEventListener("click", closeModal);

  const modalText = document.createElement("p");
  modalText.className = "modal__text";
  modalText.textContent = texts[Math.floor(Math.random() * texts.length)];
  modalBlock.appendChild(modalText);

  document.body.appendChild(modal);
}

function closeModal() {
  if (!modal) return;

  modal.remove();
  modal = null;
}

openModalBtn.addEventListener("click", openModal);
