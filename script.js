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

// GET images for :top-slide, mid-container, bot-slide,bot-flex
fetch(
  "https://raw.githubusercontent.com/Edis-over/first-responsive/main/images/images.json"
)
  .then((response) => response.json())
  .then((data) => {
    (injectTopSliderImages = () => {
      const arraySelect = data.topSlide;
      let allImages = "";
      for (element of arraySelect) {
        let itemsToBeAdded = `<img src="${element.url}" alt="${element.alt}" class="img-fluid">`;
        allImages += itemsToBeAdded;
      }
      document.querySelector(".slide-show").innerHTML = allImages;
    })();

    (injectMidContainerImage = () => {
      const arraySelect = data.midContainer;
      let allImages = "";
      for (element of arraySelect) {
        let itemsToBeAdded = `<img src="${element.url}" alt="${element.alt}">`;
        allImages += itemsToBeAdded;
      }
      document.querySelector(".mid-container-image").innerHTML = allImages;
    })();

    (injectBottomSliderImages = () => {
      const arraySelect = data.bottomSlide;
      let allImages = "";
      for (element of arraySelect) {
        let itemsToBeAdded = `<div class="mySlide${element.id} slideDiv">
        <img src="${element.url}" alt="${element.alt}" class="img-fluid">
        </div>`;
        allImages += itemsToBeAdded;
      }
      document.querySelector(".bottom-slide-images").innerHTML = allImages;
    })();

    (createBotFLex = () => {
      const arraySelect = data.bottomFlexImages;
      let allImages = "";
      for (const element of arraySelect) {
        let itemsToBeAdded = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <a href="#"> <img src="${element.url}" alt="${element.alt}"></img></a>
    </div>`;
        allImages += itemsToBeAdded;
      }
      document.querySelector(".bottom-flex").innerHTML = allImages;
    })();
  });

// Too much code, does same shit
// const bottomFlex = document.querySelector(".bottom-flex");
//       const createDiv = document.createElement("div");
//       createDiv.classList.add("col-lg-3", "col-md-4", "col-sm-6", "col-xs-12");
//       const createA = document.createElement("a");
//       const createImg = document.createElement("img");
//       createImg.src = data.bottomFlexImages[i].url;
//       let appendImgA = createA.appendChild(createImg);
//       let appendDivImgA = createDiv.appendChild(createA);
//       bottomFlex.appendChild(createDiv);

//
