import { Entity } from './Entity.js';
import { EntityController } from './EntityController.js';
import { Component, HealthComponent, ManaComponent, StatsComponent } from './Component.js';
import { System, SystemConsoleLog } from './System.js';
import { SystemController } from './SystemController.js';
import { Event } from './Event.js'

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
startup(ctx);

function startup(ctx) {
	// Let's start by making the canvas black
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(0, 0, 1280, 720);

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
	console.log(ec.searchByComponents([StatsComponent]));


	// Now let's test our new event/system architecture !
	const sc = SystemController.getInstance();

	// first, let's create a continuous system
	const continuousSystem = new SystemConsoleLog("continuous update", [], true);
	// and an observer
	const observerSystem = new SystemConsoleLog("observer update", ['test.event'], false);

	// We have to bind them to the controller
	sc.bind(continuousSystem);
	sc.bind(observerSystem);

	// Finally, let's try to tick, and to fire an event
	sc.tick();

	const event = new Event();
	event.name = 'test.event';
	sc.dispatchEvent(event);
}