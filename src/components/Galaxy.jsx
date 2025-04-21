import * as THREE from "three";
import { OrbitControls, ShaderPass } from "three/examples/jsm/Addons.js";
import { EffectComposer } from "three/examples/jsm/Addons.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { useRef, useEffect } from "react";

const NUM_STARS = 1000;
const GALAXY_THICKNESS = 5;

const CORE_X_DIST = 33;
const CORE_Y_DIST = 33;

const STAR_MAX = 5.0;
const STAR_MIN = 0.25;

const ARM_X_DIST = 100;
const ARM_Y_DIST = 50;
const ARM_X_MEAN = 200;
const ARM_Y_MEAN = 100;

const SPIRAL = 3.0;
const ARMS = 2.0;

const OUTER_CORE_X_DIST = 100;
const OUTER_CORE_Y_DIST = 100;

const HAZE_MAX = 50.0;
const HAZE_MIN = 20.0;
const HAZE_OPACITY = 0.2;

let stars = [];

const starTypes = {
  percentage: [76.45, 12.1, 7.6, 3.0, 0.6, 0.13],
  color: [0xffcc6f, 0xffd2a1, 0xfff4ea, 0xf8f7ff, 0xcad7ff, 0xaabfff],
  size: [0.7, 0.7, 1.15, 1.48, 2.0, 2.5, 3.5],
};

function Galaxy() {
  const refContainer = useRef(null);
  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    //document.body.appendChild(renderer.domElement);
    //use ref as a mount point of the Three.js scene instead of the document.body
    refContainer.current &&
      refContainer.current.appendChild(renderer.domElement);

    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      1.5,
      0.4,
      0.85
    );
    bloomPass.threshold = 0;
    bloomPass.strength = 3;
    bloomPass.radius = 0;

    const bloomComposer = new EffectComposer(renderer);
    bloomComposer.setSize(window.innerWidth, window.innerHeight);
    bloomComposer.renderToScreen = true;
    bloomComposer.addPass(renderScene);
    bloomComposer.addPass(bloomPass);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0, 0);
    controls.update();

    camera.position.z = 1000;
    camera.position.y = -300;

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

    function calStarType() {
      let num = Math.random() * 100.0;
      let pct = starTypes.percentage;
      for (let i = 0; i < pct.length; i++) {
        num -= pct[i];
        if (num < 0) {
          return i;
        }
      }

      return 0;
    }

    function updateScale(position, starType) {
      let dist = position.distanceTo(camera.position) / 250;

      let starSize = dist * starTypes.size[starType];
      starSize = Math.min(Math.max(STAR_MIN, starSize), STAR_MAX); //clamp value of starSize
      return new THREE.Vector3(starSize, starSize, starSize);
    }

    function spiral(x, y, z, offset) {
      let r = Math.sqrt(x ** 2 + y ** 2);
      let theta = offset;
      theta += x > 0 ? Math.atan(y / x) : Math.atan(y / x) + Math.PI;
      theta += (r / ARM_X_DIST) * SPIRAL;
      return new THREE.Vector3(r * Math.cos(theta), r * Math.sin(theta), z);
    }

    const texture = new THREE.TextureLoader().load("sprite120.png");

    //create different materials based on star types
    const material = starTypes.color.map(
      (color) => new THREE.SpriteMaterial({ map: texture, color: color })
    );

    window.addEventListener("resize", onWindowResize, false);

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    // generate stars
    for (let i = 0; i < NUM_STARS / 4; i++) {
      let pos = new THREE.Vector3(
        gaussianRandom(0, CORE_X_DIST),
        gaussianRandom(0, CORE_Y_DIST),
        gaussianRandom(0, GALAXY_THICKNESS)
      );
      const star = {};
      star.type = calStarType();
      star.mesh = new THREE.Sprite(material[star.type]);

      star.mesh.scale.multiplyScalar(starTypes.size[star.type]);
      star.mesh.position.copy(pos);
      scene.add(star.mesh);
      stars.push(star);
    }

    for (let i = 0; i < NUM_STARS / 4; i++) {
      let pos = new THREE.Vector3(
        gaussianRandom(0, OUTER_CORE_X_DIST),
        gaussianRandom(0, OUTER_CORE_Y_DIST),
        gaussianRandom(0, GALAXY_THICKNESS)
      );
      const star = {};
      star.type = calStarType();
      star.mesh = new THREE.Sprite(material[star.type]);

      star.mesh.scale.multiplyScalar(starTypes.size[star.type]);
      star.mesh.position.copy(pos);
      scene.add(star.mesh);
      stars.push(star);
    }

    for (let i = 0; i < ARMS; i++) {
      for (let j = 0; j < NUM_STARS / 4; j++) {
        let pos = spiral(
          gaussianRandom(ARM_X_MEAN, ARM_X_DIST),
          gaussianRandom(ARM_Y_MEAN, ARM_Y_DIST),
          gaussianRandom(0, GALAXY_THICKNESS),
          (i * 2 * Math.PI) / ARMS
        );
        const star = {};
        star.type = calStarType();
        star.mesh = new THREE.Sprite(material[star.type]);

        star.mesh.scale.multiplyScalar(starTypes.size[star.type]);
        star.mesh.position.copy(pos);
        scene.add(star.mesh);
        stars.push(star);
      }
    }

    // generate haze
    const hazeTexture = new THREE.TextureLoader().load("feathered60.png");
    const hazeSprite = new THREE.SpriteMaterial({
      map: hazeTexture,
      color: 0x0082ff,
      opacity: HAZE_OPACITY,
      depthTest: false,
      depthWrite: false,
    });

    function animate() {
      renderer.render(scene, camera);
      bloomComposer.render();

      stars.forEach((element) => {
        element.mesh.scale.copy(
          updateScale(element.mesh.position, element.type)
        );
      });

      scene.rotation.x = -0.4;
      scene.rotation.y = 0.3;
      scene.rotation.z -= 0.001;
    }
  }, []);

  return <div ref={refContainer} className="-z-1"></div>;
}

export default Galaxy;
