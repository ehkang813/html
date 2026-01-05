/* ===============================
   HERO SLIDER (INFINITE LOOP - FIXED)
================================ */
const track = document.querySelector(".hero-track");
const slides = Array.from(document.querySelectorAll(".hero-slide"));
const dots = document.querySelectorAll(".hero-dots .dot");

let currentIndex = 1;
let isTransitioning = false;
const intervalTime = 3000;
let autoSlide;

/* clone 생성 */
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

/* 초기 위치 */
track.style.transition = "none";
track.style.transform = "translateX(-100%)";

/* 이동 함수 */
function moveTo(index, withTransition = true) {
  if (withTransition && isTransitioning) return;

  if (withTransition) {
    isTransitioning = true;
    track.style.transition = "transform 0.5s ease";
  } else {
    track.style.transition = "none";
  }

  track.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;

  dots.forEach((dot, i) => {
    dot.classList.toggle(
      "active",
      i === (currentIndex - 1 + dots.length) % dots.length
    );
  });

  if (!withTransition) {
    isTransitioning = false; // 🔥 transition 없는 경우 즉시 해제
  }
}

/* transition 끝나면 위치 보정 */
track.addEventListener("transitionend", () => {
  isTransitioning = false;

  if (currentIndex === 0) {
    moveTo(slides.length, false);
  }

  if (currentIndex === slides.length + 1) {
    moveTo(1, false);
  }
});

/* 자동 슬라이드 */
function startAutoSlide() {
  autoSlide = setInterval(() => {
    moveTo(currentIndex + 1, true);
  }, intervalTime);
}

function stopAutoSlide() {
  clearInterval(autoSlide);
}

/* dot 클릭 */
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    stopAutoSlide();
    moveTo(index + 1, true);
    startAutoSlide();
  });
});

/* 초기 실행 */
moveTo(1, false);
startAutoSlide();
