const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    effect: 'fade',
    fadeEffect: {
    crossFade: true // 이미지가 부드럽게 겹치며 전환
    },
    loop: true,
    

    autoplay: {
    delay: 3000,               // 3초마다 자동으로 다음 슬라이드
    disableOnInteraction: false // 사용자가 터치/드래그해도 자동 실행 유지
    },

    // If we need pagination


    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },

    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },

});

const playBtn = document.querySelector('.swiper-play-pause');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (!isPlaying) {
    swiper.autoplay.start();   // ▶ 자동 전환 시작
    playBtn.textContent = '❚❚';
    isPlaying = true;
  } else {
    swiper.autoplay.stop();    // ❚❚ 자동 전환 정지
    playBtn.textContent = '▶';
    isPlaying = false;
  }
});