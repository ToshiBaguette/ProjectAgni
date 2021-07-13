class Entity {
	constructor() {
		this.components = [];
		this.id = -1;  // While an entity is not bound to the EntityController, its id is -1
		this.entityController = null;  // Once the entity is bound to the EntityController, it will have a reference to it
	}

	hasComponent(component) {
		// Will search in the components list is this entity has the one we ask for
		for (let i = 0; i < this.components.length; i++) {
			if (this.components[i].constructor == component.constructor) {
				return true;
			}
		}
		return false;
	}

	hasComponents(components) {
		for (let i = 0; i < components.length; i++) {
			if (!this.hasComponent(components[i])) {
				return false;
			}
		}
		return true;
	}

	_getIndexOfComponent(component) {
		for (let i = 0; i < this.components.length; i++) {
			if (this.components[i].constructor == component.constructor) {
				return i;
			}
		}
	}

	addComponent(component) {
		if (!this.hasComponent(component)) {
			this.components.push(component);
		}
	}

	addComponents(components) {
		for (let i = 0; i < components.length; i++) {
			this.addComponent(components[i]);
		}
	}

	removeComponent(component) {
		if (this.hasComponent(component)) {
			this.components.splice(this._getIndexOfComponent(component), 1);
		}
	}

	removeComponents(components) {
		for (let i = 0; i < components.length; i++) {
			this.removeComponent(components[i]);
		}
	}

	getEntityController() {
		return this.entityController;
	}

	destroyEntity() {
		// When destroying an entity, we unlink it from the EntityController
		// Then we remove his components, making it an empty entity
		this.entityController.unlink(this);
		this.components = [];
	}

}

export { Entity };