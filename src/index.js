/**
 * owl carousel css
 */
import '../node_modules/owl-carousel/owl-carousel/owl.carousel.css';
import '../node_modules/owl-carousel/owl-carousel/owl.theme.css';
import './styles/style.css';

// const $ = require('jquery');
/* jquery */
import 'jquery';
import '../node_modules/owl-carousel/owl-carousel/owl.carousel.js';
/* owl carousel js */

$(".owl-carousel").owlCarousel();


/** custom code */
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