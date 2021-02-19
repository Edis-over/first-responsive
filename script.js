// //burger menu open/close
class Burger {
  dropMenu;
  burgerBtn;
  constructor(getDiv) {
    this.dropMenu = document.querySelector(getDiv);
    this.burgerBtn = document.querySelector(".burger");
    this.burgerBtn.addEventListener("click", function () {
      burgerMenu.toggleMenu();
    });
  }
  toggleMenu() {
    this.dropMenu.classList.toggle("display-none");
  }
}
const burgerMenu = new Burger(".drop-menu-visibility");

//importing images to dom from JSON
class ImportImages {
  url;
  topSlideShowClass;
  midContainerClass;
  bottomSliderClass;
  bottomFlexClass;
  topSlideArray = [];
  midContainerArray = [];
  bottomSliderArray = [];
  bottomFlexArray = [];

  constructor(
    url,
    topSlideShowClass,
    midContainerClass,
    bottomSliderClass,
    bottomFlexClass
  ) {
    this.url = url;
    this.topSlideShowClass = document.querySelector(topSlideShowClass);
    this.midContainerClass = document.querySelector(midContainerClass);
    this.bottomSliderClass = document.querySelector(bottomSliderClass);
    this.bottomFlexClass = document.querySelector(bottomFlexClass);
    this.getJson();
    setTimeout(() => {
      this.injectTopSliderImages();
      this.injectMidContainerImage();
      this.injectBottomSliderImages();
      this.injectBotFlexImages();
    }, 300);
  }
  getJson = () => {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => {
        this.topSlideArray = data.topSlide;
        this.midContainerArray = data.midContainer;
        this.bottomSliderArray = data.bottomSlide;
        this.bottomFlexArray = data.bottomFlexImages;
      });
  };
  injectTopSliderImages = () => {
    const arraySelect = this.topSlideArray;
    let allImages = "";
    // for (element of arraySelect)
    arraySelect.forEach((element) => {
      let itemsToBeAdded = `<div class="top-slide-images">
      <img src="${element.url}" alt="${element.alt}" class="img-fluid top-slide-img"></div>`;
      allImages += itemsToBeAdded;
    });
    this.topSlideShowClass.innerHTML += allImages;
  };

  injectMidContainerImage = () => {
    const arraySelect = this.midContainerArray;
    let allImages = "";
    arraySelect.forEach((element) => {
      let itemsToBeAdded = `<img src="${element.url}" alt="${element.alt}">`;
      allImages += itemsToBeAdded;
    });
    this.midContainerClass.innerHTML = allImages;
  };

  injectBottomSliderImages = () => {
    const arraySelect = this.bottomSliderArray;
    let allImages = "";
    arraySelect.forEach((element) => {
      let itemsToBeAdded = `<div class="bottom-slide-images">
    <img src="${element.url}" alt="${element.alt}" class="img-fluid">
    </div>`;
      allImages += itemsToBeAdded;
    });
    this.bottomSliderClass.innerHTML = allImages;
  };

  injectBotFlexImages = () => {
    const arraySelect = this.bottomFlexArray;
    let allImages = "";
    arraySelect.forEach((element) => {
      let itemsToBeAdded = `<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
      
        <a href="#"> 
        <div>${element.name}</div>
        <img src="${element.url}" alt="${element.alt}"></a>
        </div>`;
      allImages += itemsToBeAdded;
    });
    this.bottomFlexClass.innerHTML = allImages;
  };
}
const addImagesToPage = new ImportImages(
  "https://raw.githubusercontent.com/Edis-over/first-responsive/main/images/images.json",
  ".top-slide-show",
  ".mid-container-image",
  ".bottom-slide-show",
  ".bottom-flex"
);

//Top Slide Show

class SlideShow {
  btnBack;
  btnNext;
  slideShow;
  slidePosition = 0;
  selectClass;
  constructor(btnBack, btnNext, slideShow, selectClass) {
    this.btnBack = btnBack;
    this.btnNext = btnNext;
    this.slideShow = slideShow;
    this.slidePosition = 0;
    this.selectClass = selectClass;
    const thisObj = this;
    this.btnBack.addEventListener("click", function () {
      thisObj.moveToPrevSlide();
    });
    this.btnNext.addEventListener("click", function () {
      thisObj.moveToNextSlide();
    });
  }
  updateSlidePosition() {
    for (let i = 0; i < this.selectClass.length; i++) {
      if (i === this.slidePosition) {
        this.selectClass[i].style.visibility = "visible";
      } else {
        this.selectClass[i].style.display = "none";
      }
    }
    this.selectClass[this.slidePosition].style.display = "block";
  }

  moveToPrevSlide() {
    const numberOfSlides = this.slideShow.childElementCount;
    if (this.slidePosition === 0) {
      this.slidePosition = numberOfSlides - 1;
    } else {
      this.slidePosition--;
    }
    this.updateSlidePosition();
  }
  moveToNextSlide() {
    const numberOfSlides = this.slideShow.childElementCount;
    if (this.slidePosition === numberOfSlides - 1) {
      this.slidePosition = 0;
    } else {
      this.slidePosition++;
    }
    this.updateSlidePosition();
  }
}
//slide template : ( prev button , next button, div which contains slides, div which contains imgs )
const slideShowTop = new SlideShow(
  document.querySelector(".btn1"),
  document.querySelector(".btn2"),
  document.querySelector(".top-slide-show"),
  document.getElementsByClassName("top-slide-images")
);
const slideShowBot = new SlideShow(
  document.querySelector(".btn1-bot"),
  document.querySelector(".btn2-bot"),
  document.querySelector(".bottom-slide-show"),
  document.getElementsByClassName("bottom-slide-images")
);

class Overlay {
  domHook;
  whichElement;
  elementClass;
  innerElement;

  constructor(domHook, whichElement, elementClass, innerElement) {
    this.domHook = document.querySelector(domHook);
    this.whichElement = whichElement;
    this.elementClass = elementClass;
    this.innerElement = innerElement;
    this.createElement();
  }
  createElement() {
    const newElement = document.createElement(this.whichElement);
    newElement.className += this.elementClass;
    newElement.innerHTML += this.innerElement;
    this.domHook.appendChild(newElement);
  }
}
const topSlideOverlayDiv = new Overlay(
  ".top-slide",
  "div",
  "top-slider-div container",
  ""
);

const topSlideOverlayTitle = new Overlay(
  ".top-slider-div",
  "h1",
  "top-slider-div-title row",
  "VACATION SURVIVAL 101,<br>DON'T LET BOREDOM CREEP IN"
);
const topSlideOverlaySubTitleDiv = new Overlay(
  ".top-slider-div",
  "div",
  "top-slider-div-div row",
  ""
);

const topSlideOverlaySubTitleDivDiva = new Overlay(
  ".top-slider-div-div",
  "div",
  "top-slider-div-div-a",
  ""
);
const topSlideOverlaySubTitleDivDivb = new Overlay(
  ".top-slider-div-div",
  "div",
  "top-slider-div-div-b",
  ""
);
const topSlideOverlaySubTitle = new Overlay(
  ".top-slider-div-div",
  "h2",
  "top-slider-div-subtitle",
  "JOHN DOE"
);

const topSlideOverlayBtn = new Overlay(
  ".top-slider-div",
  "button",
  "top-slider-div-btn row",
  "Read More"
);

const bottomSlideDiv = new Overlay(".bottom-slide-show", "div", "", "");
