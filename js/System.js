class System {
	constructor(observedEvents = [], continuous = false) {
		this.id = -1;
		this.systemController = null;
		this._continuous = continuous;
		this._observedEvents = observedEvents;
	}

	update(infos) {
		// The update function is called every time an event this system observes is fired
		// Or every tick, if this System is continuously active.
	}

	observe(eventName) {
		// Function that will add a new event to observe in the SystemController
		this.systemController.addEventObserver(this, eventName);
		this._observedEvents.push(eventName);
	}

	isContinuous() {
		return this._continuous;
	}

	getObservedEvents() {
		// We return a copy of the array, we don't want to be able to modify this array directly
		// Else, we will get sync problems with the SystemController
		return [...this._observedEvents];
	}
}

class SystemConsoleLog extends System {
	
	constructor(message, observedEvents, continuous) {
		super(observedEvents, continuous);
		this.message = message;
	}

	update(infos) {
		console.log(this.message);
	}

}

export { System, SystemConsoleLog };