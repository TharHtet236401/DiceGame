var x=Math.floor(Math.random()*6)+1;
var y=Math.floor(Math.random()*6)+1;

var randomX="images/dice"+x+".png";
var randomY="images/dice"+y+".png";

console.log(randomX +" "+  randomY);



document.querySelectorAll("img")[0].setAttribute("src",randomX);
document.querySelectorAll("img")[1].setAttribute("src",randomY);


if(randomX>randomY){
    document.querySelector("h1").innerHTML=" 🚩BEBE Won"
}
else if(randomY>randomX){
    document.querySelector("h1").innerHTML="To ly Won🚩"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}