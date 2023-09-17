"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = __importDefault(require("winston"));
class Logger {
    constructor(name) {
        this.level = {
            error: 0,
            warn: 1,
            info: 2,
            verbose: 3,
            debug: 4,
            silly: 5
        };
        this.logger = winston_1.default.createLogger({
            levels: this.level,
            format: winston_1.default.format.combine(winston_1.default.format.splat(), winston_1.default.format.label({ label: name }), winston_1.default.format.timestamp(), winston_1.default.format.colorize({
                all: true
            }), winston_1.default.format.printf(({ level, message, timestamp }) => {
                return `[${timestamp}] [${level}] ${message}`;
            })),
            transports: [
                new winston_1.default.transports.Console(),
            ]
        });
        this.info(`Init ${name} Logger`);
    }
    createLogger() {
        return this.logger;
    }
    info(message) {
        this.logger.log('info', message);
    }
    warn(message) {
        this.logger.log('warn', message);
    }
    error(message) {
        this.logger.log('error', message);
    }
    verbose(message) {
        this.logger.log('verbose', message);
    }
    debug(message) {
        this.logger.log('debug', message);
    }
    silly(message) {
        this.logger.log('silly', message);
    }
}
exports.Logger = Logger;
