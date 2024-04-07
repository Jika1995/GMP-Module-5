// const https = require('https');
// const fs = require('fs');

// 1. create HTTPS server
// const options = {
//   key: fs.readFileSync('privatekey.pem'),
//   cert: fs.readFileSync('certificate.pem'),
//   ca: fs.readFileSync('ca.pem'),
//   requestCert: true,
//   rejectUnauthorized: true
// };

// const server = http.createServer(options, (req, res) => {
//   const cert = req.socket.getPeerCertificate();
//   console.log('Client Certificate:', cert);

//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World!');
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// net
// 2. Create a TCP server 

// const net = require('net');

// const server = net.createServer((socket) => {
//   //Handle connection
//   socket.on('data', data => {
//     //handle incoming data
//   });

//   socket.on('end', () => {
//     //handle connection termination
//   });
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// })

// 3. Create a TCP Client

// const client = net.createConnection({ port: 3000 }, () => {
//   console.log('Connected to server!');
//   client.write('Hello, server!');
// });

// client.on('data', (data) => {
//   console.log('Received Data:', data.toString());
//   client.end();
// });

// client.on('end', () => {
//   console.log('Disconnected from server');
// });

//dns 
// 4. DNS lookup

// const dns = require('dns');

// dns.lookup('www.example.com', (err, address, family) => {
//   if (err) {
//     console.error(err);
//     return;
//   };
//   console.log('IP Address', address);
// });
//IP Address 93.184.216.34

// 5. Resolve DNS

// dns.resolve('www.example.com', (err, addresses) => {
//   if (err) {
//     console.error(err);
//     return;
//   };
//   console.log('IP Addresses:', addresses); //IP Addresses: [ '93.184.216.34' ]
// });


// 6. URL Parsing

// const url = require('url');

// const urlString = 'https://www.example.com:8080/path?param1=value1&param2=value2#fragment';

// const parsedUrl = new URL(urlString);

// console.log('Protocol:', parsedUrl.protocol);
// console.log('Host:', parsedUrl.host);
// console.log('Port:', parsedUrl.port);
// console.log('Path:', parsedUrl.pathname);
// console.log('Query:', parsedUrl.searchParams.toString());
// console.log('Fragment:', parsedUrl.hash);

// Protocol: https:
// Host: www.example.com:8080
// Port: 8080
// Path: /path
// Query: param1=value1&param2=value2
// Fragment: #fragment

// 7. URL Formatting

// const urlObject = {
//   protocol: 'https:',
//   host: 'www.example.com',
//   pathname: '/path',
//   search: '?param1=value1&param2=value2',
//   hash: '#fragment'
// };

// const formattedUrl = url.format(urlObject);

// console.log('Formatted URL:', formattedUrl);
//Formatted URL: https://www.example.com/path?param1=value1&param2=value2#fragment

// 8. queryString. Parse a Query String

const querystr = require('querystring');

// const queryString = 'param1=value1&param2=value2&param3=value3';

// const parsedQuery = querystr.parse(queryString);

// console.log('Parsed Query:', parsedQuery);

//Parsed Query: [Object: null prototype] {
//   param1: 'value1',
//   param2: 'value2',
//   param3: 'value3'
// }

// 9. Stringify an Object into a Query String

// const obj = {
//   param1: 'value1',
//   param2: 'value2',
//   param3: 'value3'
// };

// const queryString = querystr.stringify(obj);

// console.log('Query String', queryString); //Query String param1=value1&param2=value2&param3=value3


// 10. Encode and decoding URL

const encodedValue = querystr.escape('Special Characters: ?, =, &');
console.log('Encoded Value', encodedValue); //Encoded Value Special%20Characters%3A%20%3F%2C%20%3D%2C%20%26

const decodedValue = querystr.unescape(encodedValue);
console.log('Decoded Value', decodedValue); //Decoded Value Special Characters: ?, =, &