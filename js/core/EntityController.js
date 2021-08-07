let EntityController = (function () {
	let EntityController = function () {
		this.entities = [];
		this.nextId = 0;

		this.bind = function (entity) {
			// We set the id of the Entity as we bind it to the EntityController
			entity.id = this.nextId;  
			this.nextId++;
			// Then we add it to the Entity List
			entity.entityController = this;
			this.entities.push(entity);
		}

		this.unbind = function (entity) {
			// When we destroy an entity, we have to unlink it from the EntityController
			// This way, we will not search on it anymore, and the entity will not be used anymore
			const index = this.entities.indexOf(entity);
			if (index > -1) {
				this.entities.splice(index, 1);
			}
			entity.entityController = null;
		}

		this.searchByComponent = function (component) {
			// We can search for every entity containing a certain component
			// It will be useful for the systems
			let subset = [];
			for (let i = 0; i < this.entities.length; i++) {
				if (this.entities[i].hasComponent(component)) {
					subset.push(this.entities[i]);
				}
			}
			return subset;
		}

		this.searchByComponents = function (components) {
			// We can also search for every entity containing multiple components at once
			let subset = [];
			for (let i = 0; i < this.entities.length; i++) {
				if (this.entities[i].hasComponents(components)) {
					subset.push(this.entities[i]);
				}
			}
			return subset;
		}

	}

	// We want our EntityController to be a singleton, as it's the place where every entities are stored
	let instance = null;
	return new function() {
		this.getInstance = function() {
			if (instance == null) {
				instance = new EntityController();
				instance.EntityController = null;
			}
			return instance;
		}
	}

})();

export { EntityController };