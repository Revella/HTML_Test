document.addEventListener("DOMContentLoaded", () => {
  /* === Main Img Slider === */
  const mainSlider = document.querySelector("#mainWrap");
  let slideWidth = mainSlider.clientWidth;
  /* mainSlider의 전체 넓이를 가져온 값 = slideWidth 
    null값이 뜨는 이유는 HTMl 로딩이 다 되기 전에 값을 가져오기 때문이므로 document에 DOMContentLoaded 이벤트를 줌*/

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

  /* === Modal Button === */
  const modalOpenBtns = document.querySelectorAll("button[data-modal]")
  const modals = document.querySelectorAll(".modal")
  const closeBtns = document.querySelectorAll(".cloBtn")
  /* 모달 했을때 모달과 data-modal과 매치시켜주기 위해 사용.
  modal이 한개가 아니기 때문에, forEach문으로 돌려줌.*/

  modalOpenBtns.forEach((modalOpenBtn) => {
    modalOpenBtn.addEventListener("click", (event)=> {
      const modalName = event.target.dataset.modal;
      if (event.target.dataset.modal === modalName) {
        modals.forEach(modal => {
          if(modal.classList.contains(modalName)) {
            modal.classList.add("active")
          }
        })
      }
    })
  })

  closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", (event) => {
      const modal = event.target.closest(".modal");
      modal.classList.remove("active");
    })
  })


  /* === Scroll Evnet === */
  $(function() {
    let $menu = $('.content-bar ul li');
    let $contents = $('section');

    $menu.click(function(event) {
      event.preventDefault();
      let idx = $(this).index();
      let tt = $contents.eq(idx).offset().top;

      // 해당 위치로 이동
      $('html, body').animate({scrollTop:tt});

      // 활성화된 메뉴 표시
      // $(this).addClass('over-view').siblings().removeClass('over-view');

      // 스크롤 이동 반영해서 표시
      $(window).scroll(function() {
        let $sct = $(this).scrollTop();

        $contents.each(function(i) {
          let target = $(this);
          if (target.offset().top - 10 < $sct) {
            $menu.removeClass('over-view');
            $menu.eq(i).addClass('over-view');
          }
          if (!(200 <= $sct)) {
            $menu.removeClass('over-view');
          }
        })
      });
    });
  });

}); //"DOMContentLoaded"

/* === To do list === */
const from = document.querySelector(".todolist");
const input = document.querySelector(".Quest");
const ul = document.querySelector(".list-item");

const todos = [];
const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = () => {
  const target = event.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  console.log(target);
  save();
  target.remove();
}

const addItem = (todo) => {
  if(todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    span.innerText = todo.text;
    button.innerText = '삭제';
    button.addEventListener('click', delItem);

    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
}
const handler = document.querySelector(".submit");

handler.addEventListener("click", (event) => {
  event.preventDefault();
  
  const todo = {
    id: Date.now(),
    text : input.value
  };
  
  todos.push(todo);
  addItem(todo);
  save();
  input.value = '';
})

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    })
  }
  todos = userTodos;
}

from.addEventListener('submit', handler);



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
