//rectangle el
let elrectlength = document.getElementById("rec-length");
let elRectWidth=document.getElementById("rect-width");
let elCalcRectArea =document.getElementById("calc-rect-area");
let elRectArea = document.getElementById("rect-area");
//sphere el
let elSphereRadius =document.getElementById("sphere-radius");
let elVolSphere = document.getElementById("sphere-vol");
let elCalcVolSphere =document.getElementById("calc-vol-sphere");
//area
elCalcRectArea.onclick = function(){
let rectLength = elrectlength.value;
let rectWidth = elRectWidth.value;
let rectarea = rectLength*rectWidth;
elRectArea.value = rectarea;
}
//vol
elCalcVolSphere.onclick = function(){

let sphereRadius = elSphereRadius.value;
let sphereVolume= 4/3*Math.PI*sphereRadius**3;
elVolSphere.value=sphereVolume
}