const getRandInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

function wrong(){
    var hdr =  document.querySelector('header');
    setTimeout(() => {hdr.style.backgroundColor = 'red'}, 100);
    setTimeout(() => {hdr.style.backgroundColor = 'var(--dgray)'}, 2000);

    document.querySelector('.communicate').innerHTML = "Wrong! Guess Again...";
}

function right(){
    var hdr =  document.querySelector('header');
    setTimeout(() => {hdr.style.backgroundColor = 'green'}, 100);

    document.querySelector('.communicate').innerHTML = "Success! You guessed right.";
    document.querySelector('.my').innerHTML = myNumber;
    document.querySelector('.score-txt').innerHTML = Number(document.querySelector('.score-txt').innerHTML) + 20;

    myNumber = getRandInteger(1, 20);
}

function check(){
    console.log(Boolean(document.querySelector('.typin').value));
    if(Boolean(document.querySelector('.typin').value) === false){
        document.querySelector('.communicate').innerHTML = "Type the number first!";
        return;
    }
    if(document.querySelector('.communicate').innerHTML == "Success! You guessed right."){
        again();
        return;
    }
    const type = document.querySelector('.typin').value;

    console.log(myNumber);

    if(type == myNumber){
        right();
    }
    else{
        wrong();
    }
}

function again(){
    var hdr =  document.querySelector('header');
    setTimeout(() => {hdr.style.backgroundColor = 'var(--dgray)'}, 500);

    document.querySelector('.communicate').innerHTML = "Start guessing...";
    document.querySelector('.typin').value = "";
    document.querySelector('.my').innerHTML = "?";
}

let myNumber = getRandInteger(1, 20);

document.querySelector('.check-button').addEventListener('click', check)
document.querySelector('.again-button').addEventListener('click', again)
