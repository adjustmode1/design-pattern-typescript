import winston from 'winston';

export class Logger {
    private logger;
    private level = { 
        error: 0, 
        warn: 1, 
        info: 2, 
        verbose: 3, 
        debug: 4, 
        silly: 5 
    }

    constructor(name: string) {
        this.logger = winston.createLogger({
            levels: this.level,
            format: winston.format.combine(
                winston.format.splat(),
                winston.format.label({label: name}),
                winston.format.timestamp(),
                winston.format.colorize({
                    all: true
                }),
                winston.format.printf(
                    ({level, message, timestamp}) => {
                        return  `[${timestamp}] [${level}] ${message}`;
                    }
                )
            ),
            transports: [
                new winston.transports.Console(),
            ]
        });

        this.info(`Init ${name} Logger`);
    }

    createLogger(): winston.Logger {
        return this.logger;
    }

    info(message: any): void {
        this.logger.log('info',message);
    }

    warn(message: any): void {
        this.logger.log('warn',message);
    }

    error(message: any): void {
        this.logger.log('error',message);
    }

    verbose(message: any): void {
        this.logger.log('verbose',message);
    }

    debug(message: any): void {
        this.logger.log('debug',message);
    }

    silly(message: any): void {
        this.logger.log('silly',message);
    }
}