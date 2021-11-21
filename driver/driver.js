'use strict';
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const client = require('socket.io-client');
const host = `http://localhost:${PORT}/caps` || 'http://localhost:8080/caps';
const capsConnection = client.connect(host);
// // const events=require('../events');
// const faker= require('faker');
// const nameOfStore = process.env.STORE_NAME;
capsConnection.emit('get_all');

capsConnection.on('order', payload => {
  console.log("Driver : got the order & want to recieve it 🌻 🎁 ", payload)
  capsConnection.emit('received', payload)



  setTimeout(() => {
    console.log("Order picked up by DREIVER 🌻  ");
    capsConnection.emit("in-transit", payload);
  }, 1000);
  setTimeout(() => {
    console.log(" Order delivered by DRIVER ✔️", payload);
    capsConnection.emit("delivered", payload);
  }, 2000);


})

//   // module.exports={pickup}




