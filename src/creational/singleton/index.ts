import { Logger } from './../../utils';

export class Singleton {
    private logger;
    private static instance: Singleton;

    private constructor() {
        this.logger = new Logger("Singleton Design Pattern");
    }

    static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}