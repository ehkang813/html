document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    window.location.href = "slide.html";
  }, 5000);
});


window.onload = function () {
  const loadingText = document.querySelector('.loading-text');

  const text = '로딩중...';
  let index = 0;

  const typing = setInterval(() => {
    loadingText.textContent = text.slice(0, index + 1);
    index++;

    if (index === text.length) {
      clearInterval(typing);

      setTimeout(() => {
        window.location.href = 'slide.html';
      }, 800);
    }
  }, 300);
};