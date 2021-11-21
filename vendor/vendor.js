'use strict';
require('dotenv').config();
const client = require('socket.io-client');
const PORT = process.env.PORT || 8080;

const host = `http://localhost:${PORT}/caps`;
const ioClient = client.connect(host);
const faker = require("faker");
const nameOfStore = process.env.STORE_NAME;
// // const events = require('../events');




// // const Thanking = (payload) => {
// //     console.log(`Vendor: Thank you for delivering : ${JSON.stringify(payload.payload)} `)

// // }

setInterval(() => {
  const payload = {
    customer: faker.name.findName(),
    orderID: faker.datatype.uuid(),
    store: nameOfStore,
    address: faker.address.streetAddress()

  }

  ioClient.emit('order', payload);
  ioClient.emit('pickUp', payload);
}, 5000);
ioClient.on('added', payload => {
  console.log('Thanks for adding the order at the server queue 💬💬💬💬💬 ', payload.orderID)
})
ioClient.on('deliveredVendor', delivered)
function delivered(payload) {

  console.log('Vendor: Thank you for delivering 🚴🚴🚴🚴🚴 ', payload)
}


// module.exports = { Thanking };



