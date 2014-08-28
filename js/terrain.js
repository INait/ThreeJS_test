// this is a basic terrain object
var basic_terrain = {
	title: "base",
	getTitle: function() {
		return this.title;
	},

	movement_cost: 1,
	city_site: true,
	texture: ""
};

// inheritance
var grassland = Object.create( basic_terrain );
grassland.title = "grassland";
grassland.movement_cost = 0.5;
grassland.texture = "../textures/grassland.png";

var mountain = Object.create( basic_terrain );
mountain.title = "mountain";
mountain.movement_cost = 3;
mountain.city_site = false;
mountain.texture = "../textures/mountain.png";

var hills = Object.create( basic_terrain );
hills.title = "hills";
hills.movement_cost = 1.5;
hills.texture = "../textures/hills.png";

var swamp = Object.create( basic_terrain );
swamp.title = "swamp";
swamp.movement_cost = 2;
swamp.texture = "../textures/swamp.png";

// list of possible terrains
var terrains_list = [ grassland, mountain, hills, swamp ];
