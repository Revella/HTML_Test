const first = parseInt(prompt("값을 입력해주세요"));
const second = parseInt(prompt("값을 입력해주세요"));

function getGCD(n, m) {
  let max = n > m ? n : m;
  for(let i = 1; i <= max; i++) {
    if(n % i === 0 && m % i === 0 )  {
      GCD = i ;
    }
  }
  return GCD;
}

let GCD = 0;

document.write(`${first}와(과) ${second}의 최대 공약수는 : ${getGCD(first,second)}`);