import { Renderer3D } from './objects/systems/renderer3d.js';
import { DisplayerSystem } from './objects/systems/displayerSystem.js';
import { Entity } from './core/Entity.js';
import { ResolutionComponent } from './objects/components/CameraComponents.js';
import { SystemController } from './core/SystemController.js';
import { AgniCore } from './core/AgniCore.js';
import { SystemConsoleLog } from './objects/systems/systemConsoleLog.js';

const AGNI_TICK_TIME = 1000 / 30;
const WIDTH = 1280;
const HEIGHT = 720;

const canvas = document.getElementById("canvas");
canvas.width = WIDTH
canvas.height = HEIGHT;

const ctx = canvas.getContext("2d");
startup(ctx);

function startup(ctx) {
	// Let's start by making the canvas black
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(0, 0, 1280, 720);

	// Then we start the AgniCore
	const AgniInterval = AgniCore(AGNI_TICK_TIME);

	// To demonstrate, we want to create a new countinuous system, that will log something on each tick
	// To do that, we get our SystemController instance
	const sc = SystemController.getInstance();

	const camera = new Entity();
	camera.addComponent(new ResolutionComponent(WIDTH, HEIGHT));

	const renderer = new Renderer3D(camera);
	const displayer = new DisplayerSystem(canvas);

	sc.bind(renderer);
	sc.bind(displayer);

	// Create a new system, this one already exists and is useful to debug, it will log a message each time it is called
	//const continuousSystem = new SystemConsoleLog("tick", [], true);
	// And finally we bind it to the SystemController, for it to be called every tick as it is a continuous system
	//sc.bind(continuousSystem);

	// We could have created a system that is called when a certain event is fired, like that :
	// new SystemConsoleLog("tick", ['event.name', 'another.event.name'])
}