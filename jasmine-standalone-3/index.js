// var http = require('http');
// var fs = require('fs');
// var path = require('path');
//
// const PORT=process.env.PORT;
//
// fs.readFile(path.join(process.cwd(), 'index.html'), function (err, html) {
//
//     if (err) throw err;
//
//     http.createServer(function(request, response) {
//         response.writeHeader(200, {"Content-Type": "text/html"});
//         response.write(html);
//         response.end();
//     }).listen(PORT);
// });

const express = require("express")
const app = express()
const path = require('path')
const PORT = process.env.PORT || 3000



app.use(express.static('./'));

app.listen(PORT)
