import { Component } from '../../core/Component.js';

// This file will contain every components that are useful for the camera only
// Actually, that's the resolution of the camera

class ResolutionComponent extends Component {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	getWidth() {
		return this.width;
	}
	setWidth(width) {
		this.width = width;
	}

	getHeight() {
		return this.height;
	}
	setHeight() {
		this.height = height;
	}
}

export { ResolutionComponent };