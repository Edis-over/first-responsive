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
        let itemsToBeAdded = `<div class="top-slide-images"><img src="${element.url}" alt="${element.alt}" class="img-fluid top-slide-img"></div>`;
        allImages += itemsToBeAdded;
      }
      document.querySelector(".top-slide-show").innerHTML = allImages;
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

    (injectBotFlexImages = () => {
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

//Top Slide Show
const btnBack = document.querySelector(".btn1");
const btnNext = document.querySelector(".btn2");
const topSlideShow = document.querySelector(".top-slide-show");
let slidePosition = 0;

updateSlidePosition = () => {
  const topSlides = document.getElementsByClassName("top-slide-images");
  for (i = 0; i < topSlides.length; i++) {
    if (i === slidePosition) {
      topSlides[i].style.visibility = "visible";
    } else {
      topSlides[i].style.display = "none";
    }
  }
  topSlides[slidePosition].style.display = "block";
};

moveToNextSlide = () => {
  const numberOfSlides = topSlideShow.childElementCount;
  if (slidePosition === numberOfSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition();
};
modeToPrevSlide = () => {
  const numberOfSlides = topSlideShow.childElementCount;
  if (slidePosition === 0) {
    slidePosition = numberOfSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition();
};
btnBack.addEventListener("click", function () {
  moveToNextSlide();
});
btnNext.addEventListener("click", function () {
  modeToPrevSlide();
});
