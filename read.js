var fs = require('fs');

var readMe = fs.readFile("readMe.txt", "utf8", function (err, data) {
    console.log(data);
});

console.log("asyn");