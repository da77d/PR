// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", nav.classList.contains("open"));
    });
  }

  // Mark active nav link based on current filename
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) link.classList.add("active");
    if ((path === "" || path === "index.html") && href === "index.html") link.classList.add("active");
  });
});
