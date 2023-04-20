let lights = document.querySelectorAll('#isiqfor>div');
let timers = [5000, 2000, 7000];
let counter = 0;
let directionUp = true;
let lights2 = document.querySelectorAll('#isiqfor2>div');
let counter2 = 2;
let directionUp2 = false;

var start = function () {
    console.log('inside start');
    setTimeout(function () {
        traffic();
        traffic2();
    }, 5000);
}

window.addEventListener('load', start);

function traffic() {
    console.log('inside traffic');

    lights[counter].classList.remove('on');
    if(directionUp){
        console.log('inside traffic - direction up');
        if(counter == 2){
            directionUp = false;
            counter = 1;
        } else {
            counter++;
        }
    } else {
        if(counter == 0){
            directionUp = true;
            counter = 1;
        } else {
            counter--;
        }

    }
    console.log(`inside traffic - counter: ${counter}`);

    lights[counter].classList.add('on');
    console.log(`inside traffic - counter: ${counter}`);
    setTimeout(traffic, timers[counter]);

}

function traffic2() {
    console.log('inside traffic2');

    lights2[counter2].classList.remove('on');
    if(directionUp2){
        console.log('inside traffic - direction up');
        if(counter2 == 2){
            directionUp2 = false;
            counter2 = 1;
        } else {
            counter2++;
        }
    } else {
        if(counter2 == 0){
            directionUp2 = true;
            counter2 = 1;
        } else {
            counter2--;
        }

    }
    console.log(`inside traffic2 - counter: ${counter2}`);

    lights2[counter2].classList.add('on');
    console.log(`inside traffic2 - counter: ${counter2}`);
    setTimeout(traffic2, timers[counter2]);

}