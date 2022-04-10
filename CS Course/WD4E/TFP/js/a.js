function calculateDaysBetweenDates(begin, end){
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin);
    var secondDate = new Date(end);
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}


function calculateDaysBetweenDates(begin, end) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin);
    var secondDate = new Date(end);
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return diffDays;
}

// find all images without alternate text
// and give them a red border
function process() {
    var images = document.getElementsByTagName('img');
    for (var i = 0; i < images.length; i++) {
        if (images[i].alt == '') {
            images[i].style.border = '2px solid red';
        }
    }
}

// Express server on port 3000
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000);

// Return the current time
function getTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var time = hours + ':' + minutes + ':' + seconds;
    return time;
}



