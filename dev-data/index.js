
// const fs = require('fs');
// const http = require('http');
// const url = require('url');


/////////////////////////////
//For File

//Blocking, Synchronous way
// const textIn = fs.readFileSync('./textFile/input.txt', 'utf-8');
// console.log(textIn);
// const txtOutput = `Frontend Developers are in demand today. A lot of companies are readily hiring them with attractive salary packages.${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./textFile/txtOutput.txt', txtOutput);
//Non-blocking, asynchronous way
// fs.readFile('./textFile/start.txt', 'utf-8', (error, data1) => {
//     if (error) return console.log('ERROR!💥');
//     fs.readFile(`./text/${data1}`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('.text/append.txt', 'utf-8', (err, data3) => {
//             console.log(data3);
//             fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//                 console.log('Your file has been written ❤🤣');
//             })
//         })
//     })

// });
// console.log('This is non-blocking aynschorous node js!!!');
////////////////////////
//////////////////////
////////////////
///////////
//////
////
// SERVER
// const fs = require('fs');
// const http = require('http');


// const server = http.createServer((req, res) => {
//     const pathName = req.url;
//     if (pathName === '/' || pathName === '/overview') {
//         res.end('This is the overview');
//     } else if (pathName === '/product') {
//         res.end('This is the product.');
//     } else if (pathName === '/api') {
//         fs.readFile('data.json', 'utf-8', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/html' });
//                 res.end('Error reading data file');
//             } else {
//                 const productData = JSON.parse(data);
//                 res.writeHead(200, { 'Content-type': 'application/json' });
//                 res.end(JSON.stringify(productData));
//             }
//         });
//     } else {
//         res.writeHead(404, {
//             'Content-Type': 'text/html',
//             'my-own-header': 'hello-world'
//         });
//         res.end('<h1>Page not found!</h1>');
//     }
// });

// server.listen(3000, '127.0.0.1', () => {
//     console.log('Listening to requests on port 8000.');
// });
////
//////////
///////////
/// learning from thapa technincal     
////

// fs.writeFileSync('bio.txt', "help you crack your next interview. This Frontend Developer Interview Questions tutorial has put together questions on various languages and frameworks used for frontend development.")
//  fs.appendFileSync('bio.txt',"help you crack your next interview.");
//  const bufr_data=fs.readFileSync('bio.txt');
//  const org_data=bufr_data.toString();
//  console.log(org_data);
//  fs.renameSync("bio.txt","mybio.txt");
//  fs.unlinkSync("mybio.txt");
// //  fs.mkdirSync('usman');
// fs.rmdirSync('usman');
//fs.mkdir("usman",()=>{});
//fs.writeFile('usman/read.txt','dasfaasasddddddddddddddddddddddddddddddddddddd',()=>{

//})
// fs.readFile('usman/read.txt','utf-8',(err,data)=>{
//     console.log(data)

// })
// fs.rename("usman/read.txt","usman/myBio.txt",(err)=>{});
// fs.unlink('usman/myBio.txt',(err)=>{});
// fs.rmdir('usman',()=>{});
// const http = require('http');
// const server = http.createServer((req,res)=>{
//     res.end("help you cdsfdsfsdfrack your next interview.")
// })
// server.listen('8000','127.0.0.1',()=>{
//     console.log("Hello help you crack your next interview.")
// })

/// my first Practice................
// const http = require("http");
// const server= http.createServer((req,res)=>{
//     if(req.url === '/'){
//         res.end("Hello my  first http response!");
//     }else if(req.url === '/response'){
//         res.end("Hey http response")
//     } else if(req.url === '/review'){
//         res.end('Review Pages')
//     }else{
//         res.writeHead('404',{'Content-Type':'text/html'});
//         res.end('<h1>Page Not Found</h1>')
//     }
// })
// server.listen('3000','127.0.0.1',()=>{
//     console.log("Hello i am listen my  first http request!");
// })
///
////
///Events Module
// Node js first we create class  with the help of event.
// const EventEmitter = require('events');
// const { ok } = require('assert');

// const event = new EventEmitter()

// event.on('sayMyName',()=>{
//     console.log('Your name is usman')
// })

// event.on('sayMyName',()=>{
//     console.log('Your name is Wahab')
// })

// event.on('sayMyName',()=>{
//     console.log('Your name is mohsin')
// } )
// event.emit('sayMyName',200,"ok");
// event.on('checkPage',(src,msg)=>{
//     console.log(`status code is ${src} and the page is ${msg}`)
// })


// event.emit('checkPage',200,"ok");
