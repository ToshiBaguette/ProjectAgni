import { System } from '../../core/System.js';


class DisplayerSystem extends System {
	constructor(canvas, posXStart=0, posYStart=0, posXStop=-1, posYStop=-1) {
		super([ 'renderer.finished' ], false);
		this.canvas = canvas;
		this.posXStart = posXStart;
		this.posYStart = posYStart;
		this.posXStop = posXStop;
		this.posYStop = posYStop;

		if (this.posYStop == -1) {
			this.posYStop = canvas.height
		}
		if (this.posXStop == -1) {
			this.posXStop = canvas.width
		}
	}

	update(event) {
		let ctx = this.canvas.getContext("2d");
		let canvasData = ctx.getImageData(this.posXStart, this.posYStart, this.posXStop, this.posYStop);
		let pixels = event.getPixels();

		for (let y = 0; y < pixels.length; y++) {
			for (let x = 0; x < pixels[y].length; x++) {
				let index = (y * pixels[y].length + x) * 4;
				canvasData.data[index] = pixels[y][x][0];
				canvasData.data[index + 1] = pixels[y][x][1];
				canvasData.data[index + 2] = pixels[y][x][2];
				canvasData.data[index + 3] = 255;
			}
		}

		ctx.putImageData(canvasData, this.posXStart, this.posYStart);
	}
}

export { DisplayerSystem };
