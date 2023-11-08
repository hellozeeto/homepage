const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
const nextBtn = document.querySelector('.nextbtn');
const mainImage = document.querySelector('.main img.one');
const shadowOneImage = document.querySelector('.shadow.one img.one');

const images = [
  './unforgiven.jpg',
  './pokemon-bg.jpg',
  './lol.jpg'
];
let currentImageIndex = 0;

nextBtn.addEventListener('click', function () {
  currentImageIndex = (currentImageIndex + 1) % images.length;

  // 이미지에 애니메이션 효과를 추가합니다.
  mainImage.style.transform = 'scale(1.2)';
  shadowOneImage.style.transform = 'scale(1.2)';

  // 애니메이션 종료 후 이미지를 변경합니다.
  setTimeout(function () {
    mainImage.src = images[currentImageIndex];
    shadowOneImage.src = images[currentImageIndex];
    mainImage.style.transform = 'scale(1)';
    shadowOneImage.style.transform = 'scale(1)';
  }, 300); // 애니메이션 시간 (0.3초)
});
  