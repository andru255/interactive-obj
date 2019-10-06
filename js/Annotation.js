function Annotation() {
}

Annotation.prototype.create = function(onLoaded) {
    var sphere = new THREE.SphereGeometry(4, 12, 12);
    var color = new THREE.Color( 0xff00ff );
    var material = new THREE.MeshBasicMaterial({
        color: color,
    });
    material.side = THREE.DoubleSide;
    var annotation = new THREE.Mesh(sphere, material);
    onLoaded.call(this, annotation);
}