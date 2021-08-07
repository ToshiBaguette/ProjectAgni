import { Entity } from './core/Entity.js';
import { EntityController } from './core/EntityController.js';
import { Component, HealthComponent, ManaComponent, StatsComponent } from './core/Component.js';
import { System, SystemConsoleLog } from './core/System.js';
import { SystemController } from './core/SystemController.js';
import { Event } from './core/Event.js'
import { AgniCore, tickInterval } from './core/AgniCore.js';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
startup(ctx);

function startup(ctx) {
	// Let's start by making the canvas black
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(0, 0, 1280, 720);

	const AgniInterval = AgniCore(500);  // Let's start the MagniCore

	// Then, let's initialize our EntityController
	const ec = EntityController.getInstance();

	// Finally, for the test, let's declare a bunch of new entities
	for (let i = 0; i < 50; i++) {
		let e = new Entity();
		e.addComponent(new HealthComponent());
		if (i % 2 == 0) {
			e.addComponent(new StatsComponent());
		}
		if (i % 3 == 0) {
			e.addComponent(new ManaComponent());
		}
		ec.bind(e);
	}

	// Now let's test our new event/system architecture !
	const sc = SystemController.getInstance();

	// first, let's create a continuous system
	const continuousSystem = new SystemConsoleLog("tick", [], true);
	sc.bind(continuousSystem);
}