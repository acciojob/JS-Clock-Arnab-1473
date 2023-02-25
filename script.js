//your code here
function setClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourAngle = (hours / 12) * 360 + (minutes / 60) * 30 - 90;
    const minuteAngle = (minutes / 60) * 360 + (seconds / 60) * 6 - 90;
    const secondAngle = (seconds / 60) * 360 - 90;

    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    hourHand.style.transform = `rotate(${hourAngle}deg)`;
    minuteHand.style.transform = `rotate(${minuteAngle}deg)`;
    secondHand.style.transform = `rotate(${secondAngle}deg)`;
}

setInterval(setClock, 1000);