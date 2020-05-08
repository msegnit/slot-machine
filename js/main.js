/*----- constants -----*/
var pusheens = ['images/birthdaypusheen.png', 'images/pusheennoods.png', 'images/unicornpusheen.png', 'images/pusheendonut.png', 'images/pusheenmotorcyle.png']

/*-----variables-------*/

let meow = new Audio ('sounds/meow.mp3');

/*----- cached element references -----*/

let img1 = document.getElementById('1');
let img2 = document.getElementById('2');
let img3 = document.getElementById('3');
let img4 = document.getElementById('4');
let img5 = document.getElementById('5');
let message = document.getElementById('message');

/*----- event listeners -----*/

let spin = document.getElementById('button').addEventListener('click', handleSpin)

/*----- functions -----*/

function handleSpin() {
   let idx = Math.floor(Math.random() * Math.floor(pusheens.length -1)); 
   img1.src= pusheens[idx];
   let idx2 = Math.floor(Math.random() * Math.floor(pusheens.length -1)); 
   img2.src= pusheens[idx2];
   let idx3 = Math.floor(Math.random() * Math.floor(pusheens.length -1)); 
   img3.src= pusheens[idx3];
   let idx4 = Math.floor(Math.random() * Math.floor(pusheens.length -1)); 
   img4.src= pusheens[idx4];
   let idx5 = Math.floor(Math.random() * Math.floor(pusheens.length -1)); 
   img3.src= pusheens[idx5];
    message.textContent = `Spin Again?`
   meow.play();
   catWinner();
}


function catWinner() {
    if (img1.src === img2.src && img3.src === img1.src){
        message.textContent = `Winner!`

    }
    
}