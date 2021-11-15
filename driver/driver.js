"use strict";
// const events=require('../events');
// const faker= require('faker');
require('dotenv').config();
const PORT= process.env.PORT || 8080;
const io =require('socket.io-client');

//connect
const host=`http://localhost:${PORT}` || 'http://localhost:8080';
const capsConnection = io.connect(`${host}/caps`)
const faker = require('faker');
const nameOfStore = process.env.STORE_NAME;




const pickup=(payload)=>{

    setTimeout(()=>{
        console.log(`DRIVER: picked up ${payload.orderID}`);
        capsConnection.emit('in-transit', payload)
    }, 1000)



setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderID}`);
    capsConnection.emit('delivered', payload);
  }, 1500)


}
capsConnection.on('pickup',pickup)

  // module.exports={pickup}