const togglebar = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const burger1 = document.getElementById("burger1");
const burger2 = document.getElementById("burger2");
const burger3 = document.getElementById("burger3");

togglebar.addEventListener("click", () => {
  navList.classList.toggle("active");
  togglebar.classList.toggle("active");
  burger1.classList.toggle("active");
  burger2.classList.toggle("active");
  burger3.classList.toggle("active");
});
