function Annotation() {

}

Annotation.prototype.create = function(onLoaded) {
    var wrapper = new THREE.Object3D();
    var sphere = new THREE.SphereGeometry(4, 12, 12);
    var color = new THREE.Color( 0xff00ff );
    var material = new THREE.MeshBasicMaterial({
        color: color,
    });
    material.side = THREE.DoubleSide;
    var annotation = new THREE.Mesh(sphere, material);
    wrapper.add(annotation);
    wrapper.position.y = 50;
    wrapper.position.x = 70;
    wrapper.position.z = 50;
    onLoaded.call(this, wrapper);
}