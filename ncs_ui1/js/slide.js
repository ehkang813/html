const swiper = new Swiper('.swiper-container', {
  loop: false,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  speed: 300,

  on: {
    reachEnd: function () {
      this.autoplay.stop(); // 마지막 슬라이드에서 멈춤
    }
  }
});

document.querySelectorAll('.start-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = '../login.html';
  });
});

function goLogin() {
  document.body.classList.add('fade-out');

  setTimeout(() => {
    window.location.href = 'login.html';
  }, 400); // CSS transition 시간과 동일
}