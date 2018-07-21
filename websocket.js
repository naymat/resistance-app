const server = require('ws').Server;
const data = {};
data.port = 8081;
const s = new server(data);
console.log(`ws running on ${data.port}`);