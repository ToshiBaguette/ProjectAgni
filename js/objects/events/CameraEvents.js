import { Event } from '../../core/Event.js';

// This file will include every events related to the camera

class RenderingFinishedEvent extends Event {

	constructor(pixels) {
		super();
		this.name = 'renderer.finished';
		this.pixels = pixels;
	}

	getPixels() {
		return this.pixels;
	}

}

export { RenderingFinishedEvent };
