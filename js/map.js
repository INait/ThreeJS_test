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
				this.terrains[ x ][ y ].terrain = terrains_list[ Math.floor( Math.random() * terrains_list.length ) ];

				var my_texture = new THREE.ImageUtils.loadTexture( area.terrain[x][y].texture );
				var geometry = new THREE.PlaneGeometry( 1, 1 );
				var material = new THREE.MeshBasicMaterial( { map: my_texture, side: THREE.DoubleSide } );

				this.terrains[ x ][ y ].mesh = new THREE.Mesh( geometry, material );
			}
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
				var my_texture = new THREE.ImageUtils.loadTexture( area.terrain[x][y].texture );
				var geometry = new THREE.PlaneGeometry( 1, 1 );
				var material = new THREE.MeshBasicMaterial( { map: my_texture, side: THREE.DoubleSide } );
				var plane = new THREE.Mesh( geometry, material );
				plane.position.x = x;
				plane.position.y = y;
				scene.add( plane );
				target_list.push( plane );
			}
	}
};
