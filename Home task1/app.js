const time = new Date().getHours();

if (time < 6) {
  Day = "Sabahiniz xeyir olsun";
  document.body.style.backgroundColor = "yellow";
}

else if (time < 14) {
  Day = "Gunortaniz Xeyir olsun";
  document.body.style.backgroundColor = "blue";
  
}

else {
  Day = "Axsaminiz xeyir";
  document.body.style.backgroundColor = "black";

}
alert(Day);


function area(r){
    var a = Math.PI * r *r;
    }
   