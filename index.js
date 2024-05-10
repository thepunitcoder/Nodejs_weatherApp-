// const http = require('http');
// const fs = require('fs');
// const requests = require('requests');

// const homefile = fs.readFileSync("index.html" , "utf-8")

// replacevalue = (tempval, orgval)=>{
//  let temperature = tempval.replace("{%temperature%",orgval.main.temp);
//  temperature = temperature.replace("{%temperature%)",orgval.main.temp_min);
// }

// const server = http.createServer((req, res) => {
//   if (req.url == "/"){
//     requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=c8720a62445bf390d58fe336198b7929")

//     .on("data",(chunk)=>{
//         const objdata = JSON.parse(chunk);
//         const arrData = [objdata]
//         const realtimedata = arrData.map((val)=> replacevalue(homefile, val)).join("");
//         res.write(realtimedata)
//     })
//     .on("end",(err)=>{
//         if(err) return console.log("connection lost")
//         res.end();
//     })
//   }
  
// });

// server.listen(2000,"127.0.0.1")

// function callback(){
//   console.log("hello world");
// }

// const add = function(a,b ){
//  let ret = a+b;
//  console.log(ret);
//   callback()
// }

// add(12,12)\









const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send("Welcome world")
})

app.listen(3000)
