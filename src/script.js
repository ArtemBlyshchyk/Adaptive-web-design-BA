const hamburgerBtn = document.querySelector(".hamburger-btn");
const menuModal = document.querySelector(".menu-modal");
const closeBtn = document.querySelector(".close-btn");

// Open modal window
hamburgerBtn.addEventListener("click", () => {
  menuModal.classList.add("active");
});

//Closed the modal window
closeBtn.addEventListener("click", () => {
  menuModal.classList.remove("active");
});

//Close on click on blackout

menuModal.addEventListener("click", (event) => {
  if (event.target === menuModal) {
    menuModal.classList.remove("active");
  }
});

// Close on click ESC btn
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuModal.classList.contains("active")) {
    menuModal.classList.remove("active");
  }
});
