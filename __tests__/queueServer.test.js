


"use strict";
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const socket = require('socket.io')(PORT);

const io = require('socket.io-client');
//connect
const host = `http://localhost:${PORT}`;
const allCaps = io.connect(`${host}/caps`)
const faker = require('faker');
const nameOfStore = process.env.STORE_NAME;


describe('queue -server ', () => {

  let order = {
    store: nameOfStore,
        orderID: faker.datatype.uuid(),
        customer: faker.name.findName(),
        address: faker.address.streetAddress()
  }
  test('pickup emit', () => {
    expect(socket.emit('pickup', order)).toBeTruthy();
  });


  test('delivered emit', () => {
    expect(socket.emit('delivered', order)).toBeTruthy();
  });
  test('in-transit emit', () => {
    expect(socket.emit('in-transit', order)).toBeTruthy();
  });
  test('pickup emit ', () => {
    expect(allCaps.emit('pickup', order)).toBeTruthy();
  });

  test('in-transit emit', () => {
    expect(allCaps.emit('in-transit', order)).toBeTruthy();
  });


  test('delivered emit', () => {
    expect(allCaps.emit('delivered', order)).toBeTruthy();
  });
});

// "use strict";
// const allCaps = require('../caps')
// describe('allCaps tests', () => {

//     let consoleSpy;
//     let order = {
//         store: '1-206-flowers',
//         orderID: 'b89ef9a6-4662-4cd0-a261-779f5864f605',
//         customer: 'Josh Runolfsdottir',
//         address: '7293 Simonis Fork'
//     }


//     beforeEach(() => {
//         consoleSpy = jest.spyOn(console, 'log').mockImplementation();
//     });



//     afterEach(() => {
//         consoleSpy.mockRestore();
//     })

//     test('pickup event', async () => {
//         allCaps.emit('pickup', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     })
//     test('intransit event', async () => {
//         allCaps.emit('in-transit', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });

//     test('delivered event', async () => {
//         allCaps.emit('delivered', order);
//         await consoleSpy();
//         expect(consoleSpy).toHaveBeenCalled();
//     });




// })