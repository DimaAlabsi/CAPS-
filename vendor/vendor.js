"use strict";
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const io = require('socket.io-client');

//connect
const host = `http://localhost:${PORT}`;
const capsConnection = io.connect(`${host}/caps`)
const faker = require('faker');
const nameOfStore = process.env.STORE_NAME;

// const events = require('../events');
// require('dotenv').config();



const Thanking = (payload) => {
    console.log(`Vendor: Thank you for delivering ${payload.id}`);

}

setInterval(() => {
    let order = {
        store: nameOfStore,
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
    }
    capsConnection.emit('pickup', JSON.stringify(order))
}, 3000);

capsConnection.on('addedOrderAtHub', payload => {

    console.log(`VENDOR: Order in Queue 🧐🧐🧐🧐🧐🧐 :`, payload);
    // {"orderID":"0d855fcc-d71a-48cd-846b-caf0d5b22be0","customer":"Walter Gerlach","address":"385 Bayer Manors"}

});

capsConnection.on('delivered', Thanking);

// module.exports = { Thanking };