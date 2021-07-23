import { Entity } from './Entity.js';
import { EntityController } from './EntityController.js';
import { Component, HealthComponent, ManaComponent, StatsComponent } from './Component.js';


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
startup(ctx);

function startup(ctx) {
	// Let's start by making the canvas black
	ctx.fillStyle = 'rgb(0, 0, 0)';
	ctx.fillRect(0, 0, 1280, 720);

	// Then, let's initialize our EntityController
	let ec = EntityController.getInstance();

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
}