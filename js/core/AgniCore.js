import { EntityController } from './EntityController.js';
import { SystemController } from './SystemController.js';

function AgniCore(tickWait) {
	// Main function to call, on starting the MagniEngine
	// It will setup the EntityController and the SystemController
	// Then start the main loop

	const entityController = EntityController.getInstance();
	const systemController = SystemController.getInstance();

	return setInterval(() => { tick(entityController, systemController) }, tickWait);
}

function tick(entityController, systemController) {
	systemController.tick();
}

export { MagniCore };