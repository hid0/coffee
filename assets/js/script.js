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

topBtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".mobile-menu");

toggle.addEventListener("click", function () {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.add("show");
    toggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>';
  } else {
    menu.classList.add("hidden");
    menu.classList.remove("show");
    toggle.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h8m-8 6h16" /></svg>';
  }
});
