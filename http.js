// 1. create HTTP server 

const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World!');
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// 2. make HTTP GET request

// const options = {
//   hostname: 'www.example.com', //to correct
//   port: 80,
//   path: '/',
//   method: 'GET'
// };

// const req = http.request(options, (res) => {
//   console.log(`Status Code: ${res.statusCode}`);
//   console.log('Response Headers:', res.headers);

//   res.on('data', (chunk) => {
//     console.log(`Received Data: ${chunk}`);
//   });

//   res.on('end', () => {
//     console.log('Request Complete');
//   });
// });

// req.on('error', (error) => {
//   console.error(`Request Error: ${error.message}`);
// });

// req.end();

// 3. Process HTTP POST request

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      console.log(`Received Data: ${body}`);
      res.end('Data Received');
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server is running on 3000');
})