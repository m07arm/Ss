const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".mob_menu");
const menuBtn = document.querySelector(".hmaburger-menu");
console.log(menu);

closeBtn.addEventListener("click", () => {
  menu.classList.add("hide");
});
menuBtn.addEventListener("click", () => {
  menu.classList.remove("hide");
});
