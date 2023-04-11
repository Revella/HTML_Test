function newRegister() {
  let newP = document.createElement("p");
  let userName = document.querySelector("#userName");
  let newText = document.createTextNode(userName.value);
  newP.appendChild(newText);
  
  let delBttn = document.createElement("span");
  let delText = document.createTextNode("X");
  delBttn.setAttribute("class", "del");
  delBttn.appendChild(delText);
  newP.appendChild(delBttn);

  let nameList = document.querySelector("#nameList");
  nameList.insertBefore(newP, nameList.childNodes[0]);
  userName.value = "";

  let removeBtns = document.querySelectorAll(".del");
  
  for(let i = 0; i < removeBtns.length; i++) {
    removeBtns[i].addEventListener("click", function() {
      if(this.parentNode.parentNode) {
        this.parentNode.parentNode.removeChild(this.parentNode);
      }
    });
  };
};