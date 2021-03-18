ModAPI.registerAPI("ICore", {
	Machine: MachineRegistry,
	Recipe: MachineRecipeRegistry,
	Render: TileRenderer,
	ChargeRegistry: ChargeItemRegistry,
	Cable: CableRegistry,
	Upgrade: UpgradeAPI,
	ReactorItem: ReactorItem,
	Radiation: RadiationAPI,
	Tool: ICTool,
	Sound: SoundManager,
	Agriculture: AgricultureAPI,
	ItemName: ItemName,
	UI: UIbuttons,
	Config: ConfigIC,
	Ore: OreGenerator,
	Integration: IntegrationAPI,

	requireGlobal: function(command: string) {
		return eval(command);
	}
});

Logger.Log("Industrial Core API shared with name ICore.", "API");