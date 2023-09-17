import { Logger } from './utils';
import { Singleton } from './creational/singleton';

class Main {
    private logger;

    constructor(){
        this.logger = new Logger('Main');
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

const main = new Main();

main.testSigleton();