/**
 * tailwindcss code
 */
// import './style.css';

// const $ = require('jquery');

const dataGroupOne = {
    dataStart: 22,
    dataMid: 13,
    dataEnd: 45,
};

const dataGroupTwo = {
    ...dataGroupOne,
    dataTail: 123,
    dataEnd: 79,
}

console.log(dataGroupOne);
console.log(dataGroupTwo);

// $( "#js-btn" ).on( "click", function() {
//     alert('button got clicked!');
// });