"use strict";
require('dotenv').config();
const PORT= process.env.PORT || 8080;
const io =require('socket.io-client');

//connect
const host=`http://localhost:${PORT}`;
const capsConnection = io.connect(`${host}/caps`)
const faker = require('faker');
const nameOfStore = process.env.STORE_NAME;

// const events = require('../events');
// require('dotenv').config();



const Thanking = (payload) => {
    console.log(`Vendor: Thank you for delivering ${payload.orderID}`);

}

setInterval(() => {
    let order = {
        store: nameOfStore,
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    capsConnection.emit('pickup', order)
}, 3000);


capsConnection.on('delivered', Thanking);

// module.exports = { Thanking };