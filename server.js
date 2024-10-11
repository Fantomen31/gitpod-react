const express = require('express');
const corsAnywhere = require('cors-anywhere');

// Define the host and port for the proxy server
const host = 'localhost';
const port = 8080;

// Create and start the CORS proxy server
corsAnywhere.createServer({
    // Define options here if needed (for example, to restrict origins)
    // You can add custom headers or other configurations if necessary
}).listen(port, host, () => {
    console.log(`CORS Anywhere running on ${host}:${port}`);
});

// Optional: Add a route for health check
const app = express();
app.get('/health', (req, res) => {
    res.send('CORS Proxy is running');
});

app.listen(port, () => {
    console.log(`Proxy server running on http://${host}:${port}/`);
});