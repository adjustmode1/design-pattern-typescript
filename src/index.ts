import { Logger } from './utils';
import { Singleton } from './creational/singleton';

class Main {
    private static instance: Main;
    private logger;

    private constructor(){
        this.logger = new Logger('Main');
    }

    static getInstance() {
        if(!this.instance){
            Main.instance = new Main();
        }

        return Main.instance;
    }

    helloWorld(){
        this.logger.info('Hello world');
    }

    testSigleton() {
        const logger = new Logger("testSingeton");
    
        const single1 = Singleton.getInstance();
        const single2 = Singleton.getInstance();

        if (single1 === single2){
            logger.verbose('Singleton works');
        } else {
            logger.info('Singleton not works');
        }
    }
}

const main = Main.getInstance();

main.testSigleton();