var scene, camera, renderer, controls, projector;
var mouse = { x: 0, y: 0 };
var target_list = [];

init();
animate();

function init()
{
	scene = new THREE.Scene();

	camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.1, 1000);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);

	document.body.appendChild(renderer.domElement);

	area.create();
	area.show( scene );

	camera.position.set( 5, 5, 20 );

	controls = new THREE.OrbitControls( camera );

	projector = new THREE.Projector();

	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
}

function onDocumentMouseDown( event )
{
	mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
	mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

	// find intersections
	// create a Ray with origin at the mouse position
	//   and direction into the scene (camera direction)
	var vector = new THREE.Vector3( mouse.x, mouse.y, 1 );
	projector.unprojectVector( vector, camera );
	var ray = new THREE.Raycaster( camera.position, vector.sub( camera.position ).normalize() );

	// create an array containing all objects in the scene with which the ray intersects
	var intersects = ray.intersectObjects( target_list );

	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		console.log( intersects[0].object.material );
		intersects[0].object.material.map.sourceFile = "../textures/hills.png";
		intersects[0].object.material.needsUpdate = true;
		 //console.log("Hit @ " + toString( intersects[0] ) );
		// change the color of the closest face.
		//intersects[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 ); 
		//intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
	}
}

function animate()
{
	requestAnimationFrame( animate );
	renderer.render( scene, camera );

	controls.update();
}
