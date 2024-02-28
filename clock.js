let secondTime = 0;
let minuteTime = 0;
let hourTime = 0;

let secondCounter;
let minuteCounter;
let hourCounter;

const handleHand = (rate = 1, handName, counter, interval) => {
    const hand = document.getElementById(handName);
    if (counter) {
        clearInterval(counter);
        switch (handName) {
            case 'hour':
                hourCounter = null;
                break;
            case 'minute':
                minuteCounter = null;
                break;
            case 'second':
                secondCounter = null;
                break;
            default:
                break;
        }
        return;
    }
    switch (handName) {
        case 'hour':
            hourCounter = setInterval(() => {
                hourTime += 1;
                hand.style.transform = `rotate(${hourTime * 6}deg)`;
            }, interval/rate);
            break;
        case 'minute':
            minuteCounter = setInterval(() => {
                minuteTime += 1;
                hand.style.transform = `rotate(${minuteTime * 6}deg)`;
            }, interval/rate);
            break;
        case 'second':
            secondCounter = setInterval(() => {
                secondTime += 1;
                hand.style.transform = `rotate(${secondTime * 6}deg)`;
            }, interval/rate);
            break;
        default:
            break;
    }
};


const startClock = (rate) => {
    handleHand(rate, 'second', secondCounter, 1000);
    handleHand(rate, 'minute', minuteCounter, 60000);
    handleHand(rate, 'hour', hourCounter, 720000);
}