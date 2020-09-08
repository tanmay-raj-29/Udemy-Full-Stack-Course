let num_1=Math.floor(Math.random()*6)+1;
let num_2=Math.floor(Math.random()*6)+1;

console.log(num_1 + " " + num_2);

const result=document.querySelector("h1");
const img_1=document.querySelector(".img1");
const img_2=document.querySelector(".img2");

if (num_1>num_2) {
    result.innerHTML="Player 1 Wins";
} else if(num_1<num_2){
    result.innerHTML="Player 2 Wins";
} else result.innerHTML="Draw";

img_1.setAttribute("src","./images/dice"+num_1+".png");
img_2.setAttribute("src","./images/dice"+num_2+".png");
