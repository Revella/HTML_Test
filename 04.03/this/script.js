function checkWeight(name, height, weight) {
  this.userName = name; 
  this.userHeight = height;
  this.userWeight = weight;
  this.minWeight;
  this.maxWeight;

  checkWeight.prototype.getInfo = function() {
    let str = "";
    str += "이름: " + this.userName + ",";
    str += "키: " + this.userHeight + ",";
    str += "몸무게: " + this.userWeight + "<br />";
    return str;
  }
  
  checkWeight.prototype.getResult = function() {
    this.minWeight = (this.userHeight - 100) * 0.9 - 5;
    this.maxWeight = (this.userHeight - 100) * 0.9 + 5;
  
    if(this.userWeight >= this.minWeight && this.userWeight < this.maxWeight) {
      return "정상 몸무게 입니다.";
    } else if(this.userWeight < this.minWeight) {
      return "정상 몸무게 보다 미달 입니다";
    } else {
      return "정상 몸무게 보다 초과 입니다.";
    }
  }
}



let jang = new checkWeight("장보리", 168, 62);
let park = new checkWeight("박달재", 180, 88);

document.write(jang.getInfo());
document.write(jang.getResult(),"<br /><br />");

document.write(park.getInfo());
document.write(park.getResult(),"<br /><br />");