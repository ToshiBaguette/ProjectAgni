class Component {
	// Parent class every component will extend
	constructor() {

	}

	equal(component) {
		if (typeof component === 'object' && component !== null) {
			return (this.constructor == component.constructor);
		}
		return (this.constructor == component);
	}
}

export { Component };