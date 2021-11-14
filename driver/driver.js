"use strict";
const events=require('../events');
// const faker= require('faker');




const pickup=(payload)=>{

    setTimeout(()=>{
        console.log(`DRIVER: picked up ${payload.orderID}`);
        events.emit('in-transit', payload)
    }, 1000)



setTimeout(() => {
    console.log(`DRIVER: delivered ${payload.orderID}`);
    events.emit('delivered', payload);
  }, 3000)


}
events.on('pickup',pickup)

  module.exports={pickup}