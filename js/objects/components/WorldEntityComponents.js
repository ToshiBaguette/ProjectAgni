import { Component } from '../../core/Component.js';

// This file will contain components that are accessible to every entity in a world
// Actually, that's only their position in the world, and the world they're part of

class PositionComponent extends Component {
	constructor(x, y, z, rotX=0, rotY=0, rotZ=0) {
		super();
		this.x = x;
		this.y = y;
		this.z = z;

		this.rotX = rotX % 360;
		this.rotY = rotY % 360;
		this.rotZ = rotZ % 360;
	}

	getX() {
		return this.x;
	}
	setX(x) {
		this.x = x;
	}

	getY() {
		return this.y;
	}
	setY(y) {
		this.y = y;
	}

	getZ() {
		return this.z;
	}
	setZ(z) {
		this.z = z;
	}

	getRotX() {
		return this.rotX;
	}
	setRotX(rotX) {
		this.rotX = rotX % 360;
	}

	getRotY() {
		return this.rotY;
	}
	setRotY(rotY) {
		this.rotY = rotY % 360;
	}

	getRotZ() {
		return this.rotZ;
	}
	setRotZ(rotZ) {
		this.rotZ = rotZ % 360;
	}
}

class PartOfWorldComponent extends Component {
	constructor(world) {
		super();
		this.world = world;
	}

	getWorld() {
		return this.world;
	}
	setWorld(world) {
		this.world = world;
	}
}


export { PositionComponent, PartOfWorldComponent };
