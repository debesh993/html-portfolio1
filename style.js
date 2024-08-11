function runcode(){var n=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[0].setAttribute("src","dice"+n+".png");
var n1=Math.floor(Math.random()*6)+1;
document.querySelectorAll("img")[1].setAttribute("src","dice"+n1+".png");
if(n>n1){
    document.querySelector("h1").innerHTML="👍player 1 wins"
}
else if(n<n1){
    document.querySelector("h1").innerHTML="👍player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="😢Draw"

}
}
runcode();