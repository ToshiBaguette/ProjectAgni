let SystemController = (function () {
	let SystemController = function() {
		// systems contains every system bound to the SystemController
		this.systems = [];
		// eventRegister contains the relation between an event, and the id of every system observing it
		this.eventRegister = {};
		// continuousRegister contains a list of every system id to call on each tick
		this.continuousRegister = [];

		this.nextId = 0;

		this.bind = function (system) {
			// We give a unique ID to every new system when it's bound to the SystemController
			system.id = this.nextId;
			this.nextId++;
			// And we link the SystemController to the System
			system.systemController = this;
			this.systems.push(system);

			if (system.isContinuous()) {
				// If the system is continuous, we link it in the array for it to be called at each tick
				this.continuousRegister.push(system.id);
			}

			// Finally, we have to register its observed events
			const observedEvents = system.getObservedEvents();
			for (let i = 0; i < observedEvents.length; i++) {
				this.addEventObserver(system, observedEvents[i]);
			}
		}

		this.unbind = function (system) {
			let index = this.systems.indexOf(system);
			if (index > -1) {
				this.systems.splice(index, 1);
			}
			
			index = this.continuousRegister.indexOf(system.id);
			if (index > -1) {
				this.continuousRegister.splice(index, 1);
			} 

			// We have to remove the system from every event observers list
			const events = system.getObservedEvents()
			for (let i = 0; i < events.length; i++) {
				index = this.eventRegister[events[i]].indexOf(system.id);
				if (index > -1) {
					this.eventRegister[events[i]].splice(index, 1);
				}
			}

			system.systemController = null;
		}

		this.getSystemById = function (id) {
			for (let i = 0; i < this.systems.length; i++) {
				if (this.systems[i].id == id)
					return this.systems[i];
			}
			return null;
		}

		this.addEventObserver = function (system, eventName) {
			// When calling this function, we must check if the system is already observing this event or not
			if (this.eventRegister[eventName]?.includes(system.id))
				return

			if (!this.eventRegister[eventName]) {
				this.eventRegister[eventName] = [];
			}
			this.eventRegister[eventName].push(system.id);
		}

		this.dispatchEvent = function (event) {
			// When dispatching an event, we get every system observing it, and call their "update" function
			for (let i = 0; i < this.eventRegister[event.name].length; i++) {
				const id = this.eventRegister[event.name][i];
				this.getSystemById(id)?.update(event);
			}
		}

		this.tick = function(infos) {
			// When we tick, we get every continuous system and call their "update" function
			for (let i = 0; i < this.continuousRegister.length; i++) {
				const id = this.continuousRegister[i];
				this.getSystemById(id)?.update(infos);
			}
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