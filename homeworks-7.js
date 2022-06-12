let array=[5, 11, 17, 23];

let timeOutputNight=array[0, 3];
let timeOutput="Good nigth!";
let nigth;
let nigthOutput=function nigth () {
    let nigth =timeOutputNight ? timeOutput : false;
    return nigth;
};
nigthOutput();
console.log (nigthOutput());

let timeOutputDay="Good day!";
let timeOutputTheDay=array[1, 2];
let day;
let dayOutput=function day () {
    let day =timeOutputTheDay ? timeOutputDay: false;
    return day;
};
dayOutput();
console.log (dayOutput());

let timeOutputEvening="Good evening!";
let timeOutputTheEvening=array[2, 3];
let evening;
let eveningOutput=function evening () {
    let evening =timeOutputTheEvening ? timeOutputEvening: false;
    return evening;
};
eveningOutput();
console.log (eveningOutput());

let timeOutputMorning="Good morning";
let timeOutputTheMorning=array[0, 1];
let morning;
let morningOutput=function morning () {
    let morning =timeOutputMorning ? timeOutputMorning: false;
    return morning;
};
morningOutput();
console.log (morningOutput());
