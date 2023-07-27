const fs = require('fs');
const http = require('http');
const server = http.createServer();
server.on('request', (req, res) => {
    fs.readFile('./NodeJson/json1.json', 'utf-8', (err, data) => {
        // if (err) {
            // res.writeHead(404, { 'Content-type': 'txt/html' })
            // res.end('<h1>Page Not Found</h1>')
        // }
        // else {
        //     const productData = JSON.parse(data);
        //     res.writeHead(200, { 'Content-type': 'Application/json' });
         
        //     res.end(productData);
        // }

    })

})
server.listen(3000, '127.0.0.1', () => {
    console.log('Listening to requests on port 3000.');
});