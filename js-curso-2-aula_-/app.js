let sortNumbersList = [];
let numbLimit = 1000;
let getRandomNumber = randomNumber();
let newGame = document.getElementById('reset').removeAttribute('disabled');

function showText(tag, text) {
    let newTitle = document.querySelector(tag);
    newTitle.innerHTML = text;
    responsiveVoice.speak(text, 'UK English Female', {rate: 1.2});
}

function showMessage () {
    showText('h1', 'Guess a number!');
    showText('p', 'Choose a number between 1 and 10');
}

showMessage();


function checkChoose() {
    let choose = document.querySelector('input').value;

    if (choose == getRandomNumber) {
        showText('h1', 'You win!');
        showText('p', 'You got the number right!');
    } else {
        if (choose > getRandomNumber) {
        showText('h1', 'You miss.')
        showText('p', 'The number is greater than the chosen !');
        } else {
            showText('h1', 'You miss.')
            showText('p', 'The number is less than the chosen !');
        }
        clearText();
    }

    
    
} 


function randomNumber() {
    let chooseNumber =  Math.floor((Math.random() * numbLimit) + 1);//minimo e maximo
    let elementsOnList = sortNumbersList.length;


    if (elementsOnList == numbLimit) {
        sortNumbersList = [];
    }


    if (sortNumbersList.includes(chooseNumber)) {
        return randomNumber();
    } else {
        sortNumbersList.push(chooseNumber);
        return chooseNumber;
    }
}



function clearText() {
    choose = document.querySelector('input');
    choose.value = '';
}


function resetGame () {
    getRandomNumber = randomNumber();
    clearText();
    showMessage();
    newGame = document.getElementById('reset').setAttribute('disabled', true);
}















/* --------------------------------------------------------------------------- */


function message() {
    alert("You won!");//message
}

function getName (name) {
    alert(`Hello ${name}!`); //message with name
} 

function getDouble (num) {
    return num*2;//double the value of variable
}

function getMedia (a, b, c) {
    return (a + b + c) / 3;
}

function getBigNumber(a, b) {

    if ((a > b)) {//compara se o valor de A é maior que B
        return `O número maior é: ${b}`;
    } else {
        return (`O número maior é: ${a}`);
    }

}


function multBySelf (a) {
    return a * a;
}


function calcIMC(height, weight) {
    return (height * height) / weight;
}

function calcFatorial(a) {
    let fatorial = 1 ;

    for (let i = 1; i <= a; i++){
        fatorial *= i;
    }

    return fatorial;

}

console.log(calcFatorial(5));




function calcDollarReal(valor) {
    let dollar = 4.80;
    return valor*dollar;
}





function calcPerime(heingth, width) {
    const perimeter = heingth + heingth + width + width;
    return console.log(`A área do quadrado é de :${perimeter}`);
}


function calcTabuada(a) {

    for (let i = 1; i <= 10; i++) {
        console.log(`${a} x ${i} = ${a * i}`);
        };
        
}



function calcPerimetroEAreaDeUmaSalaCircular(raio) {
    const pi = 3.14; //PI
    const areaCirculo = (pi*(Math.pow((raio),2)));//area circulo
    const perimetCirculo =(2*pi)*(raio);
    return `O raio da sala circular é: ${raio}, sua área é:${areaCirculo}, seu perímetro é:
    ${perimetCirculo}`;
}




let generic = [];

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('Java');
linguagensDeProgramacao.push('Ruby');
linguagensDeProgramacao.push('GoLang');

function showList() {
    console.table(linguagensDeProgramacao);
}

function showListReverse() {
    console.table(linguagensDeProgramacao.reverse());
}






function calcMediaList(numbers) {

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result / numbers.length;

}


let media = calcMediaList(numbers);





let numbers = [3, 5 ,8, 8 ,2, 8, 12, 10];



function getBigAndSmallNumber(numbers) {
    
    let min = numbers[0];
    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
    
        if (numbers[i] > max) {
            max = numbers[i];
        }

        if (numbers[i] < min) {
            min = numbers[i];
        }
    }

}