/* === Main Img Slider === */
const mainSlider = document.querySelector(".main-wrap");
let slideWidth = mainSlider.clientWidth;

const btnBack = document.querySelector(".btn_back");
const btnNext = document.querySelector(".btn_next");

let mainPics = document.querySelectorAll(".pic");
const maxSlide = mainPics.length;

let currSlide = 1;

const pagination = document.querySelector(".slide_pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) {
    pagination.innerHTML += `<li class="active">•</li>`;
  } else {
    pagination.innerHTML += `<li>•</li>`
  }
}

const paginationItems = document.querySelectorAll(".slide_pagination > li");


const startSlide = mainPics[0];
const endSlide = mainPics[mainPics.length -1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c)); 
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;

mainPics[0].before(endElem);
mainPics[mainPics.length - 1].after(startElem);

let offset = slideWidth + currSlide;
mainPics.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
})

function nextMove() {
  currSlide ++;
  if(currSlide <= maxSlide) {
    const offset = slideWidth * currSlide;
    mainPics.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`)
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = 0;
    let offset = slideWidth * currSlide;
    mainPics.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      mainPics.forEach((i) => {
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      })
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

function prevMove() {
  currSlide--;
  if (currSlide > 0) {
    const offset = slideWidth *currSlide;

    mainPics.forEach((i) => {
      i.setAttribute("style", `left: ${offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {
    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;
    mainPics.forEach((i) => {
      i.setAttribute("stlye", `tasition: ${0}s; left ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {
      mainPics.forEach((i) => {
        i.setAttribute("style", `transigtion: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}

btnNext.addEventListener("click", () => {
  nextMove();
})
btnBack.addEventListener("click", () => {
  prevMove();
})

window.addEventListener("resize", () => {
  slideWidth = mainSlider.clientWidth;
});

for (let i = 0; i < maxSlide ; i++) {
  paginationItems[i].addEventListener("click", ()=> {
    currSlide = i + 1;
    const offset = slideWidth * currSlide;
    mainPics.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });
    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}

let startPoint = 0;
let endPoint = 0;

mainSlider.addEventListener("mousedown", (e)=> {
  startPoint = e.pageX;
});
mainSlider.addEventListener("mouseup", (e)=> {
  endPoint = e.pageX;
  if (startPoint < endPoint) {
    prevMove();
  } else if (startPoint > endPoint) {
    nextMove();
  }
});

let loopInterval = setInterval(()=> {
  nextMove()
}, 3000);

mainSlider.addEventListener("mouseover", ()=> {
  clearInterval(loopInterval);
});

mainSlider.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
})

/* === Main Gnb === */
let mainNav = document.querySelectorAll(".navBtn");


/* === About Content === */
const aboutContents = document.querySelector(".about-contents");
const aboutText = document.querySelector(".about-txt");

aboutContents.addEventListener("mouseover", () => {
  aboutText.style.scale = 1.15;
})
aboutContents.addEventListener("mouseout", () => {
  aboutText.style.scale = 1;
})

/* === Day Dark Button === */
const DayNigth = document.querySelector(".dark-btn");

DayNigth.addEventListener("click", () => {
  document.body.classList.toggle("on");

  if(DayNigth.innerHTML == "Dark") {
    DayNigth.innerHTML = "Day"
  } else if(DayNigth.innerHTML == "Day") {
    DayNigth.innerHTML = "Dark";
  }
})
