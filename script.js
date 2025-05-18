document.querySelector(".hamburger").addEventListener("click", function () {
  document.getElementById("nav").classList.toggle("hienThiMenu");

  // thay đổi icon
  var icon = document.querySelector(".hamburger");
  if (icon.textContent === "☰") {
    icon.textContent = "🐔";
  } else {
    icon.textContent = "☰";
  }
});
