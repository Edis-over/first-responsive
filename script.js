// Get images for bot flex
const staticUrl =
  "https://raw.githubusercontent.com/Edis-over/first-responsive/main/images/images.json";
$.getJSON(staticUrl, function (data) {
  class PopulateImages {
    constructor() {
      this.bottomFlex = document.querySelector(".bottom-flex");
    }
    printImages() {
      data.bottomFlexImages.forEach((element) => {
        const createDiv = document.createElement("div");
        createDiv.classList.add(
          "col-lg-3",
          "col-md-4",
          "col-sm-6",
          "col-xs-12"
        );
        const createA = document.createElement("a");
        createDiv.appendChild(createA);
      });
    }
  }
  const addImages = new PopulateImages();
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
