let num = prompt("연락처는 어떻게 되나요?","");
let result = num.substring(0,num.length-4);
document.write(result,"****", "<br />");

let imgSrc = "bnt_out.jpg"; //정의
document.write(imgSrc.replace("out", "over", "<br />"));

let menu = ["김밥", "파스타", "햄버거", "빵", "냉면"]; 
let random = Math.floor(Math.random()*menu.length);
let value = menu[random];
document.write(value);