// alert("hello")

let secretNumber = Math.floor(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let hightScore = 0;

const messages=function(message){
    document.querySelector('.message').textContent=message;
}
const btnCheck = document.querySelector('.check');
btnCheck.addEventListener('click', function () {
    let valueOfNumber = Number(document.querySelector('.inputNum').value);
    console.log(valueOfNumber);

    // when is no input 
    if (!valueOfNumber) {
       
        messages('🚫 No Number');

        // when player win 
    } else if (valueOfNumber === secretNumber) {
        
        messages('🎉 correct Number');

        // show number after click on check button 
        document.querySelector('.guess').textContent = secretNumber;

        document.querySelector('body').style.background = '#2F0F5D';
        document.querySelector('.message').style.color = "green";

        if (score > hightScore) {
            hightScore = score;
            document.querySelector('.highScore').textContent = hightScore;
        }

        // when guess wrong 

    } else if (valueOfNumber !== secretNumber) {
        if (score > 1) {
            messages(valueOfNumber > secretNumber ? '📈 Too High!' : '📉 Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            messages('😐 You Lost Your Game!');

            document.querySelector('.message').style.color = 'red';
            document.querySelector('.score').textContent = 0;
        }

    }
});


document.querySelector('.again').addEventListener('click', function () {

    let score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.message').style.color = '#fff';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').textContent = '?';
    document.querySelector('.inputNum').value = '';
    document.querySelector('body').style.background = '#222';


});

