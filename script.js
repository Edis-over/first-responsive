// GET images for bot flex
fetch(
  "https://raw.githubusercontent.com/Edis-over/first-responsive/main/images/images.json"
)
  .then((response) => response.json())
  .then((data) => {})
  .then((data) => {
    const arraySelect = data.bottomFlexImages;
    let allImages = "";
    for (i = 0; i < arraySelect.length; i++) {
      let itemsToBeAdded = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <a href="#"> <img src="${arraySelect[i].url}" alt="${arraySelect[i].alt}"></img></a>
    </div>`;
      allImages += itemsToBeAdded;
    }
    document.querySelector(".bottom-flex").innerHTML = allImages;
  });

// Too much code does same shit
// const bottomFlex = document.querySelector(".bottom-flex");
//       const createDiv = document.createElement("div");
//       createDiv.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-xs-12");
//       const createA = document.createElement("a");
//       const createImg = document.createElement("img");
//       createImg.src = data.bottomFlexImages[i].url;
//       let appendImgA = createA.appendChild(createImg);
//       let appendDivImgA = createDiv.appendChild(createA);
//       bottomFlex.appendChild(createDiv);

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
