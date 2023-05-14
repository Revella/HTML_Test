/* 이벤트 핸들러(onclick)로 이용한 방법 */ 
const startword = () => {
  let myword = document.querySelector("#myword").value;
  let word = document.querySelector("#word").innerText;

  let lastWord = word[word.length - 1];
  let firstWord = myword[0];

  if (lastWord === firstWord) {
    document.querySelector("#result").innerText = "정답입니다.";
    document.querySelector("#word").innerText = myword;
    document.querySelector("#myword").value = "";
  } else {
    document.querySelector("#result").innerText = "틀렸습니다.";
    document.querySelector("#myword").value = "";
  }
}

/* Lotto */ 

const lottoBtn = document.querySelector(".wrapper_lotto_btn");
const answers = document.querySelectorAll(".game_lotto_number > span");

const luckNum = {
  select : 6,
  maxNum : 45
};


lottoBtn.addEventListener("click", function(e) {
  e.preventDefault();

  let {select, maxNum} = luckNum;
  let myNum = new Set();

  for(let i = 0; i < select; i++) {
    myNum.add(Math.floor((Math.random() * maxNum)+ 1));
    answers[i].innerText = `${[...myNum].pop()}`
  }
})
