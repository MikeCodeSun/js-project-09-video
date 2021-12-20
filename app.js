const video = document.querySelector(".video-container");
const btn = document.querySelector(".btn");
const loading = document.querySelector(".loading");

window.addEventListener("load", function (s) {
  loading.classList.add("hide-loading");
});

btn.addEventListener("click", function (s) {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
