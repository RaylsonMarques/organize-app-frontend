"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_po_1 = require("../support/app.po");
describe('root', () => {
    beforeEach(() => cy.visit('/'));
    it('should display welcome message', () => {
        // Custom command example, see `../support/commands.ts` file
        cy.login('my-email@something.com', 'myPassword');
        // Function helper example, see `../support/app.po.ts` file
        (0, app_po_1.getGreeting)().contains('Welcome root');
    });
});
