import { System } from '../../core/System.js';
import { EntityController } from '../../core/EntityController.js';
import { RenderingFinishedEvent } from '../events/CameraEvents.js';
import { ResolutionComponent } from '../components/CameraComponents.js';


class Renderer3D extends System {

	constructor(camera) {
		/*
			Takes as an argument the camera by witch the renderer will observe the world
		*/
		super([], true);  // This system doesn't observe any event, and is continuous

		this.camera = camera;
		this.entityController = EntityController.getInstance();

		this.offset = 0;
		
	}

	async update(infos) {
		// We will take the camera and observe the world with it
		// Then, we will dispatch an array of pixels as an event, the size of the camera's view
		// This event will be observed by another system, whose sole purpose is to display what's been rendered
		let resolution = this.camera.getComponent(ResolutionComponent);
		if (!this.pixels) {
			this.pixels = Array(resolution.getHeight()).fill(Array(resolution.getWidth).fill(0));
		}
		
		// For the exemple, actually we create just an "empty" pixels array for the event
		for (let i = 0; i < resolution.getHeight(); i++) {
			for (let j = 0; j < resolution.getWidth(); j++) {
				this.pixels[i][j] = [ (this.offset + j) % 255, (this.offset + j) % 255, (this.offset + j) % 255 ];
			}
		}

		this.offset += 1;

		this.systemController.dispatchEvent(new RenderingFinishedEvent(this.pixels));
	}

}

export { Renderer3D };