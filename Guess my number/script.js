'use strict';


/*

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent;

// console.log(secretNumber, 'numero secreto');


document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    if (!guess) { // Se não houver algum numero definido
        document.querySelector('.message').textContent = '⛔️ No number';
    
    } else if (guess === secretNumber) { // Se o numero for igual ao numero secreto 
        document.querySelector('.message').textContent = '🎉 Congratulations YOU win!';

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNumber; 

        document.querySelector('.number').style.width = '30rem'; 

        if (score > highScore) {
            highScore = score; 
            document.querySelector('.highscore').textContent = highScore;
        } 
    
    } else if (guess !== secretNumber) { // Se o numero de chute for diferente do numero secreto

        if(score > 1) {
        score--
        
        document.querySelector('.score').textContent = score; 

        document.querySelector('.message').textContent = guess > secretNumber ? 'Too high' : 'Too low';

        } else {
            document.querySelector('.message').textContent = 'YOU LOOSE';
            document.querySelector('.score').textContent = 0; 
        }
    } 
    
});

// REINICIAR O JOGO 

document.querySelector('.again').addEventListener('click', function(){
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    document.querySelector('.message').textContent = 'Start Guessing';

    document.querySelector('.number').textContent = '?';
    document.querySelector('.score').textContent = score; 

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
});


*/


/////////////////////////////////////////////////////// REDUZIDO //////////////////////////////////////////////////////////////////






let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = document.querySelector('.score').textContent;
let highScore = document.querySelector('.highscore').textContent;

console.log(secretNumber, 'numero secreto');

const mensagem = message => document.querySelector('.message').textContent = message;

const pontuacao = score => document.querySelector('.score').textContent = score;


document.querySelector('.check').addEventListener('click', function() {

    const guess = Number(document.querySelector('.guess').value);

    console.log(guess);

    if (!guess) { // Se não houver algum numero definido
        mensagem('⛔️ No number');
    
    } else if (guess === secretNumber) { // Se o numero for igual ao numero secreto 
        mensagem('🎉 Congratulations YOU win!');

        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').textContent = secretNumber; 

        document.querySelector('.number').style.width = '30rem'; 

        if (score > highScore) {
            highScore = score; 
            document.querySelector('.highscore').textContent = highScore;
        } 
    
    } else if (guess !== secretNumber) { // Se o numero de chute for diferente do numero secreto

        if(score > 1) {
        score--
        
        pontuacao(score); 

        mensagem(guess > secretNumber ? 'Too high' : 'Too low');

        } else {
            mensagem('YOU LOOSE');
            pontuacao(0); 
        }
    } 
    
});

// REINICIAR O JOGO 

document.querySelector('.again').addEventListener('click', function(){
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20 + 1);

    mensagem('Start Guessing');

    document.querySelector('.number').textContent = '?';
    pontuacao(score); 

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

    document.querySelector('.guess').value = '';
});

