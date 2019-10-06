var fileName = 'BALON_lowpoly';
var folderName = 'assets/';

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth/window.innerHeight,
    .1,
    1000);
    // create a render, sets the background color and the size
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xcdcdcd, .5);
renderer.setSize(window.innerWidth, window.innerHeight);
//renderer.shadowMap.enabled = true;

renderer.shadowMapSoft = true;
var container = document.getElementById('container');
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
    console.log("CREATED");
    obj.position.y = 50;
    obj.position.x = 60;
    obj.position.z = 50;
    obj.userData = {"isInfoClicked": true};
    obj.scale.set(2, 2, 2);
    targetList.push(obj);
    scene.add(obj);
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
    event.preventDefault();

    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
	// create an array containing all objects in the scene with which the ray intersects
    var intersects = raycaster.intersectObjects(targetList, true);
	
	// if there is one (or more) intersections
	if ( intersects.length > 0 )
	{
        readUserData(intersects[ 0 ].object.userData);
	}
}
// when the mouse moves, call the given function
document.addEventListener( 'mousedown', onDocumentMouseDown, false );

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.updateProjectionMatrix();
};
window.addEventListener('resize', onWindowResize, false);

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