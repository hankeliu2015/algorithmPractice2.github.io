// run node readfile.js
// open localhost:8080 

const http = require('http')
const fs = require('fs')

http.createServer(function (req, res) {
    fs.readFile('readFileDemo.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8080);

  //create a file named mynewfile1.txt on local directory. 
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

  // create a new file or overwrite the existing file
// fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
// if (err) throw err;
// console.log('Saved!');
// });