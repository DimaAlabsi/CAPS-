// "use strict";
// require('dotenv').config();
// const PORT = process.env.PORT || 8080;
// // create the / nameSpace 
// const system = require('socket.io')(PORT);
// const capsConnection = system.of('/caps');


// system.on('connection', (socket) => {
//     console.log('connected ✅', socket.id);

// })

// capsConnection.on('connection', (socket) => {
//     console.log('capsConnection is connecting 🥀', socket.id);

//     const pickup = (payload) => {
//         let consoleOutput = {
//             event: 'pickup',
//             time: new Date(),
//             payload: payload
//         }
//         console.log('Event', consoleOutput);
//         capsConnection.emit('pickup', payload)
//     };

//     socket.on('pickup', pickup);

//     const intransit = (payload) => {
//         let consoleOutput = {
//             event: 'in-transit',
//             time: new Date(),

//             payload: payload
//         };
//         console.log('Event', consoleOutput);
//         capsConnection.emit('in-transit', payload)
//     };
//     socket.on('in-transit', intransit);

//     const delivered = (payload) => {
//         const consoleOutput = {
//             event: 'delivered',
//             time: new Date(),
//             payload: payload
//         }
//         console.log('Event', consoleOutput);
//         capsConnection.emit('delivered', payload)
//     }
//     socket.on('delivered', delivered);
// })

// module.exports =capsConnection



















// const events = require('./events');
// require('./driver/driver');
// require('./vendor/vendor');



// const pickup = (payload) => {
//     let consoleOutput = {
//         event: 'pickup',
//         time: new Date(),
//         payload: payload
//     }
//     console.log('Event', consoleOutput);
// };

// events.on('pickup', pickup);

// const intransit = (payload) => {
//     let consoleOutput = {
//         event: 'in-transit',
//         time: new Date(),

//         payload: payload
//     };
//     console.log('Event', consoleOutput);
// };
// events.on('in-transit', intransit);

// const delivered = (payload) => {
//     const consoleOutput = {
//         event: 'delivered',
//         time: new Date(),
//         payload: payload
//     }
//     console.log('Event', consoleOutput);
// }
// events.on('delivered', delivered);




// EVENT { event: 'pickup',
//   time: 2020-03-06T18:27:17.732Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// DRIVER: picked up e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'in-transit',
//   time: 2020-03-06T18:27:18.738Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }
// DRIVER: delivered up e3669048-7313-427b-b6cc-74010ca1f8f0
// VENDOR: Thank you for delivering e3669048-7313-427b-b6cc-74010ca1f8f0
// EVENT { event: 'delivered',
//   time: 2020-03-06T18:27:20.736Z,
//   payload:
//    { store: '1-206-flowers',
//      orderID: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
//      customer: 'Jamal Braun',
//      address: 'Schmittfort, LA' } }