const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if(req.url === "/") {
    fs.readFile('index.html', (err, data) => {
      res.end(data);
    });
  } else if(req.url === "/background.png") {
    fs.readFile('background.png', (err, data) => {
      res.end(data);
    });
  }
})

server.listen(3000, () => console.log('server started at PORT 3000'));