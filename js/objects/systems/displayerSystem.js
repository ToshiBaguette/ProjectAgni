import { System } from '../../core/System.js';


class DisplayerSystem extends System {
	constructor(canvas, posXStart=0, posYStart=0, posXStop=-1, posYStop=-1) {
		super([ 'renderer.finished' ], false);
		this.canvas = canvas;
		this.posXStart = posXStart;
		this.posYStart = posYStart;
		this.posXStop = posXStop;
		this.posYStop = posYStop;
	}

	update(event) {
		let ctx = this.canvas.getContext("2d");
		let pixels = event.getPixels();

		for (let y = 0; y < pixels.length; y++) {
			for (let x = 0; x < pixels[y].length; x++) {
				ctx.fillStyle = 'rgb(' + pixels[y][x][0] + ',' + pixels[y][x][1] + ',' + pixels[y][x][2] + ')';
				
				let drawX = x + this.posXStart;
				if (this.posXStop > this.posXStart && drawX > this.posXStart) {
					drawX = -1;
				}
				let drawY = y + this.posYStart;
				if (this.posYStop > this.posYStart && drawY > this.posXYtart) {
					drawY = -1;
				}

				ctx.fillRect(drawX * 100, drawY * 100, 100, 100);
			}
		}

	}
}

export { DisplayerSystem };
