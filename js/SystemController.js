let SystemController = (function () {

	// systems contains every system bound to the SystemController
	this.systems = [];
	// eventRegister contains the relation between an event, and the id of every system observing it
	this.eventRegister = {};

	this.nextId = 0;

	this.bind = function (system) {
		// We give a unique ID to every new system when it's bound to the SystemController
		system.id = nextId;
		nextId++;
		// And we link the SystemController to the System
		system.systemController = this;
		this.systems.push(system);
	}

	this.unbind = function (system) {
		const index = this.systems.indexOf(system);
		if (index > -1) {
			this.systems.splice(index, 1);
		}
		entity.systemController = null;
	}

	this.dispatchEvent = function (event) {
		for (let i = 0; i < this.eventRegister[event.name].length; i++) {
			
		}
	}

	// The SystemController have to be a singleton, as it stores every system.
	let instance = null;
	return new function() {
		this.getInstance = function() {
			if (instance == null) {
				instance = new SystemController();
				instance.SystemController = null;
			}
			return instance;
		}
	}

})();

export { SystemController };