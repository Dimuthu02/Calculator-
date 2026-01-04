function fn0(){
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

function erase()
{
    let previous=document.getElementById("display").innerHTML;
    let erase=previous.slice(0,-1);
    document.getElementById("display").innerHTML=erase;
}

let firstvalue;
let op;

function add()
{
    firstvalue=document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML=0
    op=1
}


function min() {
  firstvalue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = 0;
  op = 2;
}

function mul() {
  firstvalue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = 0;
  op = 3;
}

function dev() {
  firstvalue = document.getElementById("display").innerHTML;
  document.getElementById("display").innerHTML = 0;
  op = 4;
}

function equal()
{
    let secondvalue=document.getElementById("display").innerHTML;
    let output;
if(op==1)
{
output=firstvalue+secondvalue
}
else if(op==2)
{
output = firstvalue - secondvalue;
}
else if(op==3)
{
output = firstvalue * secondvalue;
}
else
{
    output = firstvalue / secondvalue;

}

document.getElementById("display").innerHTML=output;
}