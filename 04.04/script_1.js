let pic = document.querySelector("#pic");
pic.addEventListener('mouseover', changePic);
pic.addEventListener('mouseout', originPic);

function changePic() {
  pic.src = "/img/boy.png";
}

function originPic() {
  pic.src = "/img/girl.png";
}