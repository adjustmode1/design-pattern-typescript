"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Singleton = void 0;
const utils_1 = require("./../../utils");
class Singleton {
    constructor() {
        this.logger = new utils_1.Logger("Singleton Design Pattern");
    }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}
exports.Singleton = Singleton;
