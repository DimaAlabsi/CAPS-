


'use strict'

const PORT = process.env.PORT || 8080;
const io = require('socket.io')(PORT);
const uuid = require('uuid').v4;

// // our Queue is an object
// // table >> DB
// // keyed Q
const msgQueue = {
    messages: {}
}

const caps = io.of('/caps')

caps.on('connection', socket => {

    console.log("CONNECTED ☑️☑️☑️", socket.id)

    socket.on("pickUp", pickup);
    function pickup(payload) {


        console.log("adding new order", payload.orderID)
        const id = uuid();
        console.log("id :", id)
        msgQueue.messages[id] = payload

        socket.emit('added', payload);

        caps.emit('order', { id: id, payload: msgQueue.messages.id });

        console.log("message added 🗨️ ", msgQueue.messages)
        let order = {
            event: "pickup",
            time: new Date(),
            payload: payload,
        };
        console.log("Event", order);

    }

    socket.on('get_all', () => {
        console.log("get all the messages 👁️‍🗨️👁️‍🗨️👁️‍🗨️👁️‍🗨️👁️‍🗨️ ")

        Object.keys(msgQueue.messages).forEach(id => {
            socket.emit('order', { id: id, payload: msgQueue.messages.id })
        });
    });


    socket.on('received', msg => {

        console.log("received from the store and remove it from the Q ...👋👋👋👋👋👋")
        delete msgQueue.messages[msg.id];
        console.log("after deleting the order from Msg Q ❌❌❌❌❌ ", msgQueue.messages)
    })

    socket.on("in-transit", inTransit);
    function inTransit(payload) {
        let order = {
            event: "in-transit",
            time: new Date(),
            payload: payload,
        };
        console.log("Event", order);
    }

    socket.on("delivered", delivered);
    function delivered(payload) {
        let order = {
            event: "delivered",
            time: new Date(),
            payload: payload,
        };
        console.log("Event", order);
        caps.emit('deliveredVendor', payload)
    }


})