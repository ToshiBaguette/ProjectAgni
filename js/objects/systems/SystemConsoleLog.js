import { System } from '../../core/System.js';

class SystemConsoleLog extends System {
    constructor(message, events, isContinuous) {
        super(events, isContinuous);

        this.message = message;
    }

    update(event) {
        console.log(this.message);
    }
}

export { SystemConsoleLog };