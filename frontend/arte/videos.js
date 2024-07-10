// Obtén todos los botones y todos los iconos de cierre dentro de cada contenedor
const btnsVideo = document.querySelectorAll(".btn-video");
const closeIcons = document.querySelectorAll(".close-icon");
const trailerContainers = document.querySelectorAll(".trailer-container");
const videos = document.querySelectorAll("video");

// Itera sobre cada botón y agrega un evento de clic
btnsVideo.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    trailerContainers[index].classList.remove("active");
    videos[index].play();
  });
});

// Itera sobre cada ícono de cierre y agrega un evento de clic
closeIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    trailerContainers[index].classList.add("active");
    videos[index].pause();
    videos[index].currentTime = 0;
  });
});
