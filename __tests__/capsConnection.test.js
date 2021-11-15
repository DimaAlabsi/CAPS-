"use strict";
const capsConnection = require('../caps')
describe('capsConnection tests', () => {

    let consoleSpy;
    let order = {
        store: '1-206-flowers',
        orderID: 'b89ef9a6-4662-4cd0-a261-779f5864f605',
        customer: 'Josh Runolfsdottir',
        address: '7293 Simonis Fork'
    }


    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });



    afterEach(() => {
        consoleSpy.mockRestore();
    })

    test('pickup event', async () => {
        capsConnection.emit('pickup', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    test('intransit event', async () => {
        capsConnection.emit('in-transit', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });

    test('delivered event', async () => {
        capsConnection.emit('delivered', order);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });




})