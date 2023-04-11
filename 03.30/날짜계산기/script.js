/* D-day */ 
let now = new Date();
let firstDay = new Date("2023/02/28");

let toNow = now.getTime();
let toFirst = firstDay.getTime();

let passedTime = toNow - toFirst;
let passedDay = Math.round(passedTime/(24*60*60*1000));

document.querySelector('#accent').innerText = passedDay + "일";


/* D-day Fucntion */ 
function calcDate(days){
  let future = toFirst + days*(24*60*60*1000); 
  let someday = new Date(future);
  let year = someday.getFullYear();
  let month = someday.getMonth();
  let date = someday.getDate();
  document.querySelector("#date"+days).innerText = year + "년" + month + "월" + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

console.log(month);
