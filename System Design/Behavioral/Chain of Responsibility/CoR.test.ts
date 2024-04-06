/*
When writing test cases for this pattern, you want to check that each handler performs as
expected when passing a Request object. Additionally, you want to make sure that the
Request object is initialized with the correct state.
*/

import { HTTPRequest, MessageHandler, NotificationHandler } from "./CoR";


describe('Request Handlers', () => {
    // Test case for MessageHandler
    it('should handle a message request', () => {
        const messageHandler = new MessageHandler(null);
        const request = new HTTPRequest('testhost', new Map().set('test', 'testVal'));
        const consoleSpy = jest.spyOn(console, 'log');

        messageHandler.handle(request);

        expect(consoleSpy).toHaveBeenCalledWith('Message handler triggered by testhost');
    });

    // Test case for NotificationHandler
    it('should handle a notification request', () => {
        const notificationHandler = new NotificationHandler(null);
        const request = new HTTPRequest('testhost', new Map().set('test', 'testVal'));
        const consoleSpy = jest.spyOn(console, 'log');

        notificationHandler.handle(request);

        expect(consoleSpy).toHaveBeenCalledWith('Notification handler triggered by testhost');
    });

    // Test case for chaining handlers
    it('should chain message and notification handlers', () => {
        const messageHandler = new MessageHandler(new NotificationHandler(null));
        const request = new HTTPRequest('testhost', new Map().set('test', 'testVal'));
        const consoleSpy = jest.spyOn(console, 'log');

        messageHandler.handle(request);

        expect(consoleSpy).toHaveBeenCalledWith('Message handler triggered by testhost');
        expect(consoleSpy).toHaveBeenCalledWith('Notification handler triggered by testhost');
    });
});