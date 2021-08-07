import { EntityController } from './EntityController.js';
import { SystemController } from './SystemController.js';

let tickInterval;

function MagniCore(tickWait) {
	// Main function to call, on starting the MagniEngine
	// It will setup the EntityController and the SystemController
	// Then start the main loop

	const entityController = EntityController.getInstance();
	const systemController = SystemController.getInstance();

	tickInterval = setInterval(() => { tick(entityController, systemController) }, tickWait);
}

function tick(entityController, systemController) {
	systemController.tick();
}

export { MagniCore, tickInterval };