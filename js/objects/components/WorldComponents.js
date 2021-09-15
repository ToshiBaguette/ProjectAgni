import { Component } from '../../core/Component.js';

// This file will include every components useful for the world only
// This includes the sky and the world size

class SkyComponent extends Component {
	constructor(color) {
		super();
		this.color = color;
	}

	getColor() {
		return this.color;
	}
	setColor(color) {
		this.color = color;
	}
}

class WorldSizeComponent extends Component {
	constructor(width, depth) {
		super();
		this.width = width;
		this.depth = depth;
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
	setHeight(height) {
		this.height = height;
	}
}

export { SkyComponent, WorldSizeComponent };