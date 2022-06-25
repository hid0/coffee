const topBtn = document.getElementById("to-top");

window.onscroll = function () {
  scrolling();
};

function scrolling() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function toTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
