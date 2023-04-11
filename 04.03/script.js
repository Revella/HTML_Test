function chColor() {
  let arrColor = ["#ff0", "#6c0", "#fcf", "#cf0", "#39f"];
  let arrNum = Math.floor(Math.random() * arrColor.length);
  let bodyTag = document.getElementById('theBody');
  bodyTag.style.backgroundColor = arrColor[arrNum];
}