$(function() {
  /* Navigation & Footer */ 
    $('.main_gnb').load('/include/navigation.html');
    $('.footer').load('/include/footer.html');
  })
  
  /* === Main Down Scroll === */
  const DownBtn = document.querySelector(".fa-angle-down");
  
  DownBtn.addEventListener("click", ()=> {
    window.scrollTo({top: document.querySelector(".problem").scrollHeight, behavior: "smooth"});
  })
  
  /* Problem Section Scroll Animation */ 
  let observed = new IntersectionObserver((e) => {
    e.forEach((span)=> {
      if (span.isIntersecting) {
        span.target.style.transform = 'translateY(0%)';
        span.target.style.opacity = 1;
      } else {
        span.target.style.opacity = span.intersectionRatio;
      }
    });
  })
  
  const problem = document.querySelectorAll(".problem span");
  observed.observe(problem[0]);
  observed.observe(problem[1]);
  observed.observe(problem[2]);
  
  /* Raise Problem Section Scroll Animation */ 
  let raiseObserved = new IntersectionObserver((e) => {
    e.forEach((section) => {
      if (section.isIntersecting) {
        section.target.style.transform = 'translateX(0%)';
        section.target.style.opacity = 1;
        
      } else {
        section.target.style.opacity = 0;
      }
    })
  })
  
  const raiseProblem = document.querySelector(".raiseProblem");
  raiseObserved.observe(raiseProblem);
  
  /* left & right Animation */
  
  let rightObserved = new IntersectionObserver((e) => {
    e.forEach((rightAnime) => {
      if (rightAnime.isIntersecting) {
        rightAnime.target.style.transform = 'translateX(0%)';
      } else {
        rightAnime.target.style.transform = 'translateX(100%)';
      }
    })
  })
  let leftObserved = new IntersectionObserver((e) => {
    e.forEach((leftAnime) => {
      if (leftAnime.isIntersecting) {
        leftAnime.target.style.transform = 'translateX(0%)';
      } else {
        leftAnime.target.style.transform = 'translateX(-100%)';
      }
    })
  })
  
  const problemSection1 = document.querySelector(".problem_section1");
  const problemSection2 = document.querySelector(".problem_section2");
  rightObserved.observe(problemSection1);
  leftObserved.observe(problemSection2);
  
  let textDownObserved = new IntersectionObserver((e) => {
    e.forEach((textDown)=> {
      if (textDown.isIntersecting) {
        textDown.target.style.transform = 'translateY(0%)';
        textDown.target.style.opacity = 1;
      } else {
        textDown.target.style.transform = 'translateY(-30%)';
        textDown.target.style.opacity = 0;
      }
    });
  })
  
  /* Solutions Section Animation */
  const solutions = document.querySelectorAll(".solutions > div");
  textDownObserved.observe(solutions[0]);
  textDownObserved.observe(solutions[1]);
  
  /* ESG Section animation */
  const esgText = document.querySelectorAll(".esgText span");
  
  textDownObserved.observe(esgText[0]);
  textDownObserved.observe(esgText[1]);
  
  /* Rental FAQ Section Animation*/
  const rentalFaq = document.querySelectorAll(".rental_faq > div");
  rightObserved.observe(rentalFaq[0]);
  leftObserved.observe(rentalFaq[1]);
  
  
  /* Mobile Media Query */
  const Mobile = window.matchMedia('screen and (max-width:767px)');
  
  if (Mobile.matches === true) {
    /* === Main Slider === */  
    let textDownObserved = new IntersectionObserver((e) => {
      e.forEach((textDown)=> {
        if (textDown.isIntersecting) {
          textDown.target.style.transform = 'translateY(0%)';
          textDown.target.style.opacity = 1;
        } else {
          textDown.target.style.transform = 'translateY(-30%)';
          textDown.target.style.opacity = 0;
        }
      });
    })
    
    /* ProblemSection Scroll Animation */ 
  
    textDownObserved.observe(problemSection1);
    textDownObserved.observe(problemSection2);
  
    /* left & right Animation */
    let rightObserved = new IntersectionObserver((e) => {
      e.forEach((rightAnime) => {
        if (rightAnime.isIntersecting) {
          rightAnime.target.style.transform = 'translateX(0%)';
        } else {
          rightAnime.target.style.transform = 'translateX(100%)';
        }
      })
    })
  
    let leftObserved = new IntersectionObserver((e) => {
      e.forEach((leftAnime) => {
        if (leftAnime.isIntersecting) {
          leftAnime.target.style.transform = 'translateX(0%)';
        } else {
          leftAnime.target.style.transform = 'translateX(-100%)';
        }
      })
    })
    /* Solutions Section Animation */
    rightObserved.observe(solutions[0]);
    leftObserved.observe(solutions[1]);
  }