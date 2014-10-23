var GAME = { version: '1' };

// this is a basic terrain object
GAME.BasicTerrain = function()
{
	this.title = '';
	this.texture = '';
	this.movement_cost = 1;
};

GAME.Grassland = function()
{
	GAME.BasicTerrain.call();

	this.title = 'grassland';
	this.movement_cost = 0.5;
	this.texture = '../textures/grassland.png';
};
GAME.Grassland.prototype = new GAME.BasicTerrain();

GAME.Mountain = function()
{
	GAME.BasicTerrain.call();

	this.title = 'mountain';
	this.movement_cost = 3;
	this.texture = '../textures/mountain.png';
};
GAME.Mountain.prototype = new GAME.BasicTerrain();

GAME.Hills = function()
{
	GAME.BasicTerrain.call();

	this.title = 'hills';
	this.movement_cost = 1.5;
	this.texture = '../textures/hills.png';
};
GAME.Hills.prototype = new GAME.BasicTerrain();

GAME.Swamp = function()
{
	GAME.BasicTerrain.call();

	this.title = 'swamp';
	this.movement_cost = 2;
	this.texture = '../textures/swamp.png';
};
GAME.Swamp.prototype = new GAME.BasicTerrain();
