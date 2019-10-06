var fileName = 'BALON_lowpoly';
var folderName = 'assets/';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth/window.innerHeight,
    0.1,
    1000);
    // create a render, sets the background color and the size
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xcdcdcd, .5);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMapSoft = true;
document.body.appendChild(renderer.domElement);

var controls;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var targetList = [];

var objBallon = new Ballon(fileName, folderName);
objBallon.create(function(object){
    scene.add(object);
    object.position.y -= 70; //positioning the model in the scene
    object.position.x = 10;

    object.rotation.y = -9.45;

    var light = new THREE.PointLight( 0xff0000, 1, 100 ); // light type
    light.position.set( 50, 50, 100 ); // light position
    scene.add( light ); //adding light to scene
});

var Annotation = new Annotation();
Annotation.create(function(obj){
    scene.add(obj);
    targetList.push(obj);
});

var init = function() {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = +300;
    camera.lookAt(new THREE.Vector3(0,0,0));
    render();
}
window.onload = init;

function onDocumentMouseDown(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
	// create an array containing all objects in the scene with which the ray intersects
    var intersects = raycaster.intersectObjects(scene.children, true);
    
    console.log("intersects", intersects);
	
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
		console.log("Hit @ " + toString( intersects[0].point ) );
		// change the color of the closest face.
		intersects[ 0 ].face.color.setRGB( 0.8 * Math.random() + 0.2, 0, 0 ); 
		intersects[ 0 ].object.geometry.colorsNeedUpdate = true;
	}
}
// when the mouse moves, call the given function
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

var update = function() {}
var render = function() {
    renderer.render(scene, camera);
}
var loop = function() {
    requestAnimationFrame(loop);
    update();
    render();
}
loop();