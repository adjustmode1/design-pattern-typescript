"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
const singleton_1 = require("./creational/singleton");
class Main {
    constructor() {
        this.logger = new utils_1.Logger('Main');
    }
    helloWorld() {
        this.logger.info('Hello world');
    }
    testSigleton() {
        const logger = new utils_1.Logger("testSingeton");
        const single1 = singleton_1.Singleton.getInstance();
        const single2 = singleton_1.Singleton.getInstance();
        if (single1 === single2) {
            logger.verbose('Singleton works');
        }
        else {
            logger.info('Singleton not works');
        }
    }
}
const main = new Main();
main.testSigleton();
