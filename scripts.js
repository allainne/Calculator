var val = "";
window.onload = function load () {

  var screen = document.querySelectorAll(' p')[0];
document.getElementById('1').onclick = function(){
val = val.concat("1");
screen.innerHTML = val;
}

document.getElementById('2').onclick = function(){
val = val.concat("2");
screen.innerHTML = val;
}
document.getElementById('3').onclick = function(){
val = val.concat("3");
screen.innerHTML = val;
}
document.getElementById('dot').onclick = function(){
val = val.concat(".");
screen.innerHTML = val;
}
document.getElementById('4').onclick = function(){
val = val.concat("4");
screen.innerHTML = val;
}
document.getElementById('5').onclick = function(){
val = val.concat("5");
screen.innerHTML = val;
}
document.getElementById('6').onclick = function(){
val = val.concat("6");
screen.innerHTML = val;
}
document.getElementById('7').onclick = function(){
val = val.concat("7");
screen.innerHTML = val;
}
document.getElementById('8').onclick = function(){
val = val.concat("8");
screen.innerHTML = val;
}
document.getElementById('9').onclick = function(){
val = val.concat("9");
screen.innerHTML = val;
}
document.getElementById('0').onclick = function(){
val = val.concat("0");
screen.innerHTML = val;
}

document.getElementById('sub').onclick = function(){
val = val.concat("-");
screen.innerHTML = val;
}
document.getElementById('add').onclick = function(){
val = val.concat("+");
screen.innerHTML = val;
}
document.getElementById('div').onclick = function(){
val = val.concat("/");
screen.innerHTML = val;
}
document.getElementById('mul').onclick = function(){
val = val.concat("*");
screen.innerHTML = val;

}
document.getElementById('equals').onclick = function(){
screen.innerHTML = eval(val);
val = eval(val);
screen.innerHTML = val;
load();

}



}
