function Ballon(fileName, folderName) {
    this.loader = new THREE.OBJLoader(); 
    this.fileName = fileName;
    this.folderName = folderName;
}

Ballon.prototype.create = function(onLoaded) {
    this.loader.setPath(this.folderName);
    this.loader.load('./' + this.fileName + '.obj', function(obj){
        onLoaded.call(this, obj);
    }); 
}