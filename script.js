// Get images for bot flex
const staticUrl =
  "https://raw.githubusercontent.com/Edis-over/first-responsive/main/images/images.json";
$.getJSON(staticUrl, function (data) {
  this.bottomFlex = document.querySelector(".bottom-flex");
  $.each(data, function () {
    // const bottomFlex = document.querySelector(".bottom-flex");
    const createDiv = document.createElement("div");
    createDiv.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-xs-12");
    const createA = document.createElement("a");
    const createImg = document.createElement("img");
    createImg.src = data.bottomFlex;
    let appendImgA = createA.appendChild(createImg);
    let appendDivImgA = createDiv.appendChild(createA);
    console.log(appendDivImgA);
    this.bottomFlex.appendChild(createDiv);
    console.log(data);
  });
});

// //burger menu open/close

class Burger {
  constructor() {
    this.dropMenu = document.querySelector(".drop-menu-visibility");
  }
  toggleMenu() {
    this.dropMenu.classList.toggle("display-none");
  }
}
const burgerMenu = new Burger();
const burgerBtn = document.querySelector(".burger");
burgerBtn.addEventListener("click", function () {
  burgerMenu.toggleMenu();
});
