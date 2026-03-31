// // Works as Load balancer
// require('dotenv').config();
// const express = require('express');
// const app = express();
// const PORT = process.env.PORT;

// app.get('/', (req, res) => {
// res.send('<h1>Hello world</h1>') 
// })

// app.listen(PORT, ()=> console.log(`server is running in port 3000 ${PORT}`))

require('dotenv').config();
const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});
const PORT = process.env.PORT;

// List of backend servers where server-port-5000 acts as loadbalancer
const servers = [
    'http://localhost:5001',
    'http://localhost:5002',
    'http://localhost:5003'
];

let current = 0; // For round-robin

// All requests go through the load balancer
app.use((req, res) => {
    // Round-robin logic
    const target = servers[current];
    current = (current + 1) % servers.length;

    console.log(`Forwarding request to: ${target}`);
    proxy.web(req, res, { target });
});

app.listen(PORT, () => {
    console.log(`Load Balancer running on port ${PORT}`);
});