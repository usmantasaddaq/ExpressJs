// const fs = require('fs');
// const path = require('path');
// const express = require('express');
// const app = express();
// app.use(express.json());
// app.get('/',(req,res)=>{
//     res.status(200)
//     .json({message:'Hello from the server side!',
// app:'ExpressNodeJs'});
// })
// app.post('/',(req,res)=>{
//     res.send('you can post to this endpoint....');
// })
// const filePath = path.join(__dirname, 'express.json');
// const tours = JSON.parse(fs.readFileSync(filePath));
// app.get('/api/v1/tours', (req, res) => {
//     res.status(200).json({
//         status: 'success',
//         data:
//             [tours]

//     });

// });
// app.post('/api/v1/tours', (req, res) => {
//     console.log(req.body);
//     const newId = tours[tours.length - 1].id + 1;
//     const newTour = Object.assign({ id: newId }, req.body);
//     tours.push(newTour);
//     fs.writeFile(filePath, JSON.stringify(tours), (error) => {
//         res.send(201).json({
//             status: 'success',
//             data: {
//                 tours: newTour
//             }
//         })
//     })
//     // res.send('Done');                   
// })
// app.post('/api/v1/tours', (req, res) => {
//     console.log(req.body);

//     // Check if the tours array exists and is not empty
//     if (!tours || tours.length === 0) {
//         // If the tours array is empty, start with id = 1
//         const newId = 1;
//     } else {
//         // Get the last element of the tours array and access its 'id' property
//         const newId = tours[tours.length - 1].id + 1;
//     }

//     const newTour = Object.assign({ id: newId }, req.body);
//     tours.push(newTour);

//     // Write the updated tours array to the file
//     fs.writeFile(filePath, JSON.stringify(tours), (error) => {
//         if (error) {
//             // Handle the error appropriately (e.g., send an error response)
//             return res.status(500).json({
//                 status: 'error',
//                 message: 'Unable to create the new tour.',
//             });
//         }

//         res.status(201).json({
//             status: 'success',
//             data: {
//                 tours: newTour,
//             },
//         });
//     });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`App running on port ${port}...`);
// });
// const http = require('http');
// const url = require('url');
const fs = require('fs');
// const index = fs.readFileSync('app.html', 'utf-8');
const data = JSON.parse(fs.readFileSync('express.json', 'utf-8'));
const products = data.products;
// console.log(product.title)
// const server = http.createServer((req, res) => {
//Dynamic showing data on web server
//     if (req.url.startsWith('/product')) {
//         const id = req.url.split('/')[2];
//         const prd = products.find(p => p.id === (+id));
//         res.setHeader('Content-Type', 'text/html');
//         let modifiedIndex = index.replace('*title*', prd.title).replace('**url**', prd.thumbnail).replace('*description*', prd.description).replace('*discount*', prd.discountPercentage)
//             .replace('*price*', prd.price).replace('*rating*', prd.rating).replace('*stock*', prd.stock);
//         res.end(modifiedIndex);
//         return;
//     }
//     switch (req.url) {
//         case '/':
//             res.setHeader('Content-Type', 'text/html');
//             res.end(index);
//             break;
//         case '/api':
//             res.setHeader('Content-Type', 'application/json');
//             res.end(JSON.stringify(data));
//             break;
//         // case '/product':
//         //     res.setHeader('Content-Type', 'text/html');
//         //    let modifiedIndex = index.replace('Hello World',products.title).replace('url',products.thumbnail).replace('price',products.price).replace('rating',products.rating);
//         //    res.end(modifiedIndex);
//         //    break;
//         default:
//             res.writeHead(404);
//             res.end();
//     }
//     // res.end(data);
// })
const express = require('express');

const server = express();
const morgan = require('morgan');

// server.get('/',(req,res)=>{
//     // res.send('hello')
//     // res.status(201).json(products)
// //  res.sendFile(`${__dirname}/app.html`)
// })


//API -EndPoint- Route
//bodyParser middleware
server.use((express.json()));
// server.use((express.urlencoded()));  
server.use(morgan('default'))
server.use(express.static('ExpressNodeJs'));
// server.use((req,res,next)=>{

//     // logermiddleware
//     // console.log(req.get('User-Agent'),req.method, req.ip, req.hostname)
//     next()
// })
const auth = (req, res, next) => {
    // console.log(req.query )

    // console.log(req.get('User-Agent'),req.method, req.ip, req.hostname)
    // if(req.body.password==='123'){
    //     next()
    // } else{
    //     res.sendStatus(401);
    // }
    next()
}
// server.use(auth);
// APi ka root ,base url  kya ha
//read get /products  C R U D 
// Create Read Update  and Delete  
//create APi basically  apka pass post request hoti ha.
server.post('/products', (req, res) => {
    //    console.log(req.body)
    products.push(req.body);
    res.status.json(201, req.body)
})
server.get('/products', (req, res) => {
    // console.log(req.params)   
    res.json(products)
})
server.get('/products/:id', (req, res) => {
    // console.log(req.params)   
    const id = +req.params.id;
    const data = products.find((p) => p.id === id);
    res.json(data);
})

// api update  ka lia put use krty  hnn by  id  products/:id

server.put('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    products.splice(productIndex, 1, { ...req.body, id: id })
    res.status(200).json();
})
server.patch('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id === id);
    const product = products[productIndex];
    products.splice(productIndex, 1, { ...product, ...req.body })
    res.status(200).json();
})
server.delete('/products/:id', (req, res) => {
    const id = +req.params.id;
    const productIndex = products.findIndex(p => p.id===id);
     products.splice(productIndex,1)
    res.status(201).json()
})

server.listen(3000, () => {
    console.log('server started');
});