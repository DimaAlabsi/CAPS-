"use strict";
const PORT = process.env.PORT || 8080;
const io = require('socket.io')(PORT);
const uuid = require('uuid').v4;

// our Queue is an object
// table >> DB
// keyed Q
const msgQueue = {
    messages: {}
}

// namespace
const allCaps = io.of('/caps');

allCaps.on('connection', socket => {
    console.log("CONNECTED to queue-server", socket.id);

    socket.on('pickup', payload => {
        console.log('picked up a new order  ....');

        const id = uuid();
        msgQueue.messages[id] = { 
                   event: 'pickup',
                    time: new Date(),
        
                    payload: payload};
        console.log('after adding message Msg Q ✔️✔️✔️✔️✔️✔️>>', msgQueue);

        socket.emit('addedOrderAtHub', payload);

        allCaps.emit('pickup', { id: id, payload: msgQueue.messages[id] })
    });
    socket.on('in-transit', payload => {
        const id = uuid();
        msgQueue.messages[id] = { 
            event: 'in-transit',
             time: new Date(),
 
             payload: payload }

        allCaps.emit('in-transit', { id, payload: msgQueue.messages[id] });
    });

    socket.on('delivered', (payload) => {
        const id = uuid();
        msgQueue.messages[id] = { 
            event: 'delivered',
             time: new Date(),
 
             payload: payload};
        allCaps.emit('delivered', { id, payload: msgQueue.messages[id] });
    });
    socket.on('received', id => {
        console.log('received from the store and remove it from the Q ...👋👋👋👋👋👋');
        delete msgQueue.messages[id];
        console.log('after deleting the order from Msg Q ❌❌❌❌❌>>', msgQueue);

    })

    socket.on('get_all', () => {
        console.log('get all the orders 👁️‍🗨️👁️‍🗨️👁️‍🗨️👁️‍🗨️👁️‍🗨️');
        Object.keys(msgQueue.messages).forEach(id => {
            socket.emit('message', { id: id, payload: msgQueue.messages[id] })
        })
    })
})

module.exports={allCaps}