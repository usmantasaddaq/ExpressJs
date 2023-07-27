
const fs = require('fs');
const bioData = [
    {
        name: 'usman',
        age: 24,
        channel: 'usman khan',
    },
    {
        name: 'wahab',
        age: 25,
        channel: 'usman khan',
    },
    {
        name: 'mohsin',
        age: 25,
        channel: 'usman khan',
    }]
const jsonData = JSON.stringify(bioData);
// fs.writeFile('json1.json',jsonData,(err)=>{
//     console.log('error');
// })
// const covertJson =JSON.parse(jsonData);
// console.log(covertJson);
fs.readFile('json1.json','utf-8',(err,data)=>{
    //  console.log(data)
    const orgData = JSON.parse(data); 
 console.log(orgData)
})
