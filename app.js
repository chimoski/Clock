setInterval(setClock, 1000);

const hourHand = document.querySelector('.hour');
const minHand = document.querySelector('.min');
const secHand = document.querySelector('.sec');

function setClock() {
    const currentDate = new Date(); 
    const secondsRation = currentDate.getSeconds() /60;
    const minuitesRation = (secondsRation + currentDate.getMinutes() )/60;
    const hoursRation = (minuitesRation + currentDate.getHours()) /12;
    setRotation(secHand, secondsRation);
    setRotation(minHand, minuitesRation);
    setRotation(hourHand, hoursRation);
}


function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio*360);
}

setClock();