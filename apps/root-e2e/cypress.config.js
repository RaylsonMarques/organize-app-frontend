"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cypress_1 = require("cypress");
const cypress_preset_1 = require("@nrwl/cypress/plugins/cypress-preset");
exports.default = (0, cypress_1.defineConfig)({
    e2e: (0, cypress_preset_1.nxE2EPreset)(__dirname),
});
