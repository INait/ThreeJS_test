var area = {
	width: 10,
	height: 10,
	terrains: [ [] ],
	create: function(){
		for( var x = 0; x < this.width; x++ )
		{
			this.terrains[ x ] = [];
			for( var y = 0; y < this.height; y++ )
			{
				this.terrains[ x ][ y ] = {};
				this.terrains[ x ][ y ].terrain = this.CreateTerrain();

				var my_texture = new THREE.ImageUtils.loadTexture( area.terrains[x][y].terrain.texture );
				var geometry = new THREE.PlaneGeometry( 1, 1 );
				var material = new THREE.MeshBasicMaterial( { map: my_texture, side: THREE.DoubleSide } );

				this.terrains[ x ][ y ].mesh = new THREE.Mesh( geometry, material );
				this.terrains[ x ][ y ].mesh.position.x = x;
				this.terrains[ x ][ y ].mesh.position.y = y;
			}
		}
	},

	CreateTerrain: function()
	{
		var rnd = Math.floor( Math.random() * 4 );
		switch( rnd )
		{
			case 0:
				return new GAME.Grassland();
			case 1:
				return new GAME.Mountain();
			case 2:
				return new GAME.Hills();
			case 3:
				return new GAME.Swamp();
		}
	},

	print: function(){
		for( var x = 0; x < this.width; x++ )
			for( var y = 0; y < this.height; y++ )
				console.log( this.terrain[ x ][ y ].getTitle() );
	},

	show: function( scene ){
		for( var x = 0; x < this.width; x++ )
			for( var y = 0; y < this.height; y++ )
			{
				var plane = this.terrains[ x ][ y ].mesh;
				scene.add( plane );
				target_list.push( plane );
			}
	}
};
