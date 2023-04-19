const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let data = '';
    req.on('data', chunk => {
      data += chunk.toString();
    });
    req.on('end', () => {
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.write(data);
      res.end();
    });
  } else {
    res.statusCode = 405;
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
