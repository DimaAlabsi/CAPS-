"use strict";

const events = require('../events');
const faker = require('faker');
require('dotenv').config();

const nameOfStore = process.env.STORE_NAME;


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
    events.emit('pickup', order)
}, 5000);


events.on('delivered', Thanking);

module.exports = { Thanking };