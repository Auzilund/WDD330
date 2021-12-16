canvas = document.getElementById('glCanvas');
canvas.width = canvas.width *7;
canvas.height = canvas.height *7;
var context = canvas.getContext('webgl', { premultipliedAlpha: false });

let scene, camera, renderer, controls, model, spotLight;
function init() {
    scene = new THREE.Scene();

    spotLight = new THREE.SpotLight(0xADD8E6,1);
    spotLight.castShadow = true;
    spotLight.shadow.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024*4;
    spotLight.shadow.mapSize.height = 1024*4;
    spotLight.shadow.camera.near = 500;
    spotLight.shadow.camera.far = 4000;
    scene.add(spotLight);

    var dirLight = new THREE.DirectionalLight(0xADD8E6, 4);
    dirLight.position.set(200,200,200);
    scene.add(dirLight);

    var dirLight2 = new THREE.DirectionalLight(0xADD8E6, 4);
    dirLight2.position.set(-200,200,-200);
    scene.add(dirLight2);

    
    renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true});
    renderer.toneMapping = THREE.CineonToneMapping;
    renderer.toneMappingExposure = 3;
    renderer.shadowMap.enabled = true;
    //renderer.setSize(canvas.width,canvas.height);
    document.body.appendChild(renderer.domElement);

    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight,1,5000);
    camera.position.set(0,25,-50);
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    //scene.add(new THREE.AxesHelper(500));

    new THREE.GLTFLoader().load('scene.gltf', function(gltf){
        model = gltf.scene;
        model.scale.set(100,100,100);
        // model.traverse(n =>{
        //     if(n.isMesh){
        //         n.castShadow = true;
        //         n.receiveShadow = true;
        //         if(n.material.map) n.material.map.anisotropy = 16;
        //     }
        // })
        scene.add(model);
        animate();
    })

    
    animate();

}
function animate(){
    
    renderer.render(scene,camera);
    spotLight.position.set(camera.position.x,camera.position.y,camera.position.z)
    requestAnimationFrame(animate);
    controls.update();
}
init();
window.addEventListener('resize', init());