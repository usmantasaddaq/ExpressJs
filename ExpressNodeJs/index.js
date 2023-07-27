

const morgan = require('morgan');
const express = require('express');
const server = express();
const productRouter = require('./routes/prouduct');
// bodyParser middleware
server.use((express.json()));
// server.use((express.urlencoded()));  
server.use(morgan('default'))
server.use(express.static('ExpressNodeJs'));
server.use('/api/products', productRouter.Routes);
server.listen(3000, () => {
    console.log('server started');
});