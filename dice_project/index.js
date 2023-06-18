let randomNumber1=Math.floor(Math.random()*6)+1; //1-6
let randomDiceImage1='image/dice' + randomNumber1 + ".png"; //1img.png-6img.png
document.querySelectorAll('img')[0].setAttribute("src", randomDiceImage1);

let randomNumber2=Math.floor(Math.random()*6)+1; //1-6
let randomDiceImage2='image/dice' + randomNumber2 + ".png"; //1img.png-6img.png
document.querySelectorAll('img')[1].setAttribute("src", randomDiceImage2);
// alert(imgs)

if(randomNumber1>randomNumber2){
    document.querySelector('.heading1').innerHTML="The winner is player 1"
}
if(randomNumber1<randomNumber2){
    document.querySelector('.heading1').innerHTML="The winner is player 2"
}





// alert(randomImage);