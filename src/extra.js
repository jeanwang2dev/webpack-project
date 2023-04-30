import 'jquery';
const $ = require('jquery');

// $(document).reday(function(){
//     alert('jquery is working');
// });

$( "button#js-top-btn" ).on( "click", function() {
    alert('button got clicked!');
});