function fn0() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 0;
}
function fn1() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 1;
}
function fn2() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 2;
}
function fn3() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 3;
}
function fn4() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 4;
}
function fn5() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 5;
}
function fn6() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 6;
}
function fn7() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 7;
}
function fn8() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 8;
}
function fn9() {
  let previous = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = previous + 9;
}

function erase() {
  let previous = document.getElementById("display").innerHTML;
  let erase = previous.slice(0, -1);
  document.getElementById("display").innerHTML = erase;
}

let firstvalue;
let op;

function add() {
  firstvalue = parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  op = 1;
}

function min() {
  firstvalue = parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  op = 2;
}

function mul() {
  firstvalue = parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  op = 3;
}

function dev() {
  firstvalue = parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML = "";
  op = 4;
}

function equal() {
  let secondvalue = parseFloat(document.getElementById("display").innerHTML);
  let output;

  if (op === 1) {
    output = firstvalue + secondvalue;
  } else if (op === 2) {
    output = firstvalue - secondvalue;
  } else if (op === 3) {
    output = firstvalue * secondvalue;
  } else if (op === 4) {
    output = secondvalue !== 0 ? firstvalue / secondvalue : "Error";
  }

  document.getElementById("display").innerHTML = output;
}
