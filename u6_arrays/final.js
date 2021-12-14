let a =document.getElementById("A");
let b =document.getElementById("b");
let c=document.getElementById("c");
let clicky =document.getElementById("calc");
let ansa=document.getElementById("ansa");
let ansb=document.getElementById("ansb");

clicky.onclick= function(){
let ai=A.value
let bi=b.value
let ci=c.value
let rootpart = math.sqrt ((bi*bi)- (4*ai*ci));
let denom =2*a;
let answer = (-bi + rootpart)/denom;
let second = (-bi - rootpart)/denom;
ansa.value=answer;
ansb.value=second;
}