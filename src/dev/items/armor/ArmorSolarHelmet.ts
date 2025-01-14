/// <reference path="./ArmorIC2.ts" />

class ArmorSolarHelmet extends ArmorIC2
implements ArmorListeners {
	constructor(stringID: string, name: string, params: ArmorParams) {
		super(stringID, name, params);
		this.preventDamaging();
	}

	onTick(item: ItemInstance, index: number, playerUid: number): void {
		let time = World.getWorldTime() % 24000;
		if (World.getThreadTime() % 20 == 0 && time >= 23500 || time < 12550) {
			let pos = Entity.getPosition(playerUid);
			let region = WorldRegion.getForActor(playerUid);
			if (region.canSeeSky(pos) && (!World.getWeather().rain || region.getLightLevel(pos) > 14)) {
				for (let i = 1; i < 4; i++) {
					let energy = 20;
					let armor = Entity.getArmorSlot(playerUid, i);
					let energyAdd = ChargeItemRegistry.addEnergyTo(armor, "Eu", energy, 4);
					if (energyAdd > 0) {
						energy -= energyAdd;
						Entity.setArmorSlot(playerUid, i, armor.id, 1, armor.data, armor.extra);
						if (energy <= 0) break;
					}
				}
			}
		}
	}
}