var fileName = '14098_Propane_Tank_V1_l3';
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

var mtlLoader = new THREE.MTLLoader();
var objLoader = new THREE.OBJLoader();
mtlLoader.setPath(folderName);
mtlLoader.load(fileName + '.mtl', function(materials){
    materials.preload();
    objLoader.setMaterials(materials);
    objLoader.setPath('assets/');
    objLoader.load('/' + fileName + '.obj', function (object) {
        scene.add(object);
        object.position.y -= 70; //positioning the model in the scene
        object.position.x += 10;

        var light = new THREE.PointLight( 0xff0000, 1, 100 ); // light type
        light.position.set( 50, 50, 50 ); // light position
        scene.add( light ); //adding light to scene
    });
});

var init = function() {
//    // create a cube and add to scene
//    var cubeGeometry = new THREE.BoxGeometry(10 * Math.random(), 10 * Math.random(), 10 * Math.random());
//    var cubeMaterial = new THREE.MeshNormalMaterial();
//    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
//    scene.add(cube);
//    // position and point the camera to the center of the scene
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = -200;
    camera.lookAt(new THREE.Vector3(0,0,0));
//    // add the output of the renderer to the html element
//    // call the render function
    render();
}
window.onload = init;

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