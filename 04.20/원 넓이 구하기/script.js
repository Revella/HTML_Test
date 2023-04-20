const result = document.querySelector("#result");
const radius = prompt("반지름의 크기는?");

/* 원의 넓이 구하는 함수 */ 
function area (r) {
  return Math.PI * r * r;
}

/* 원의 둘레 구하는 함수 */ 
function circum (r) {
  return Math.PI * r * 2;
}

result.innerText = `
반지름 : ${radius},
원의 넓이 : ${Math.round(area(radius))}
원의 둘레 : ${circum(radius).toFixed(3)}`