const server = require('ws').Server;
const data = {};
data.port = 8081;
const s = new server(data);
console.log(`ws running on ${data.port}`);
s.on('connection', ws => {
    
    ws.on('message', message => {
        console.log(message);
        ws.send(message);
    });
    
}
);