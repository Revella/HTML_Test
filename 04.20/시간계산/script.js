const birthYear = document.querySelector("#year");
const birthMonth = document.querySelector("#month");
const birthDate = document.querySelector("#date");
const btn = document.querySelector("#btn");

// 출력값 정의
const current = document.querySelector("#current");
const resultDays = document.querySelector("#days");
const resultHours = document.querySelector("#hours");
const resultYears = document.querySelector("#years");

const today = new Date();

btn.addEventListener("click", (e) => {
  e.preventDefault();
  
  current.innerText = `현재 시간 ${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일 ${today.getHours()}시 ${today.getMinutes()}분`;
  
  const birthDay = new Date(birthYear.value, birthMonth.value - 1, birthDate.value);
  let passed = today.getTime() - birthDay.getTime()
  let passedYear = Math.floor(passed / (60 * 60 * 24 * 1000 * 365));
  let passedDays = Math.floor(passed / (24 * 60 * 60 * 1000));
  let passedHours = Math.floor(passed / (60 * 60 * 1000));

  resultYears.innerText = `년으로는 ${passedYear}년이 흘렀습니다.`;
  resultHours.innerText = `시간으로는 ${passedHours} 시간이 흘렀습니다.`;
  resultDays.innerText = `날짜로는 ${passedDays}일이 흘렀습니다.`;

  birthYear.value = "";
  birthMonth.value = "";
  birthDate.value = "";
})