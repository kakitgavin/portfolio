import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { useEffect } from "react";

function Galaxy() {
  useEffect(() => {
    const threeJsCanvas = document.getElementById("threeJsCanvas");

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ canvas: threeJsCanvas });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 0.7;
    bloomPass.radius = 0;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    camera.position.z = 100;

    let axes = new THREE.AxesHelper(5.0);
    //scene.add(axes);

    const gridHelper = new THREE.GridHelper(100, 50);
    gridHelper.rotateX(Math.PI / 2);
    //scene.add(gridHelper);

    function gaussianRandom(mean = 0, stdev = 1) {
      let u = 1 - Math.random();
      let v = Math.random();
      let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);

      return z * stdev + mean;
    }

    const texture = new THREE.TextureLoader().load("sprite120.png");
    const material = new THREE.SpriteMaterial({
      map: texture,
    });

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // galaxy
    for (let i = 0; i < 1000; i++) {
      let pos = new THREE.Vector3(
        gaussianRandom(0, 33),
        gaussianRandom(0, 33),
        gaussianRandom(0, 5)
      );
      const mesh = new THREE.Sprite(material);
      mesh.scale.multiplyScalar(0.5);
      mesh.position.copy(pos);
      scene.add(mesh);
    }

    function animate() {
      renderer.render(scene, camera);
      bloomComposer.render();
    }
  }, []);

  return <></>;
}

export default Galaxy;
