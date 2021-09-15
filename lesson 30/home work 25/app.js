var moment = require('moment'); // require
console.log(moment().format());                                // "2014-09-08T08:02:17-05:00" (ISO 8601, no fractional seconds)
console.log(moment().format("dddd, MMMM Do YYYY, h:mm:ss a")); // "Sunday, February 14th 2010, 3:25:50 pm"
console.log(moment().format("ddd, hA"));                       // "Sun, 3PM"
console.log(moment().format("[Today is] dddd"));               // "Today is Sunday"