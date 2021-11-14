"use strict";
const events = require('../events');

describe('events tests', () => {

    let consoleSpy;
    let order = {
        store: '1-206-flowers',
        orderID: '70860240-dea9-4d06-8a3a-5897a68b899a',
        customer: 'Leticia Macejkovic',
        address: '160 Gregory Fields'
    }


    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    })

    test('pickup event', async () => {
        events.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('intransit event', async () => {
        events.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    test('delivered event', async () => {
        events.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });






})