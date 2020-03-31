import { tooManyDays } from './functions.js'; //

const myButton = document.getElementById('button');
const daysGone = document.getElementById('daysGone');
const myImg = document.getElementById('happy');
const status = document.getElementById('status');

let numDays = 0;

myButton.addEventListener('click',() => {
    numDays++;
    //add number of days
    daysGone.textContent = numDays; //creating insert for span
    if (tooManyDays(numDays > 10)) {
        status.textContent = 'Oh No';
        
    }
});










//"https://tse1.mm.bing.net/th?id=OIP.fP5LRo5sRSIl6aeD_J2LQQHaEK&pid=Api&P=0&w=316&h=179"