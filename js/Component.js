class Component {
	// Classe mère dont vont hériter tous les composants
	constructor() {

	}
}

class HealthComponent extends Component {
	constructor() {
		super();
		this.hp = 100;
		this.maxHp = 100;
	}
}

class ManaComponent extends Component {
	constructor() {
		super();
		this.mana = 10;
		this.maxMana = 10;
	}
}

class StatsComponent extends Component {
	constructor() {
		super();
		this.strength = 1;
		this.endurance = 1;
		this.agility = 2;
		this.chance = 3;
	}
}

export { Component, HealthComponent, ManaComponent, StatsComponent };