const swiper = new Swiper('.swiper', {
  // Optional parameters
    // effect: 'fade',
    direction: 'horizontal',
    loop: true,

  // If we need pagination
    pagination: {
    el: '.swiper-pagination',
    clickable:true,
    },

  // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

  // And if we need scrollbar
    scrollbar: {
    el: '.swiper-scrollbar',
    },

    autoplay: {
    delay: 1000, // 각 슬라이드가 머무는 시간 (밀리초 단위, 기본값 3000ms)
    disableOnInteraction: false, // 사용자 상호작용(스와이프 등) 후 자동 재생 멈춤 방지
    pauseOnMouseEnter: true, // 마우스 호버 시 자동 재생 일시 정지 (선택 사항)

    },
});


