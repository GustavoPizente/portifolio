import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

export default function GravityScene() {
  const mountRef = useRef(null);
  const loadedModelRef = useRef(null);
  const spawnIntervalRef = useRef(null);
  const basketMeshRef = useRef(null);
  const basketBodyRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      74
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    const world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.81, 0),
    });

    const groundMaterial = new CANNON.Material('ground');
    const appleMaterial = new CANNON.Material('apple');
    const basketMaterial = new CANNON.Material('basket');

    const groundAppleContactMaterial = new CANNON.ContactMaterial(groundMaterial, appleMaterial, {
      friction: 0.4,
      restitution: 0.2,
    });
    world.addContactMaterial(groundAppleContactMaterial);

    const appleBasketContactMaterial = new CANNON.ContactMaterial(appleMaterial, basketMaterial, {
      friction: 0.6,
      restitution: 0.1,
    });
    world.addContactMaterial(appleBasketContactMaterial);

    const basketGroundContactMaterial = new CANNON.ContactMaterial(basketMaterial, groundMaterial, {
        friction: 0.7,
        restitution: 0.1,
    });
    world.addContactMaterial(basketGroundContactMaterial);

    const groundBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
      position: new CANNON.Vec3(0, -5, 0),
      material: groundMaterial,
    });
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    world.addBody(groundBody);

    const groundGeo = new THREE.PlaneGeometry(150, 100, 1, 100);

    const blue = new THREE.Color(0xa6d9e0);
    const yellow = new THREE.Color(0xFCFDB4);

    const colors = [];

    const totalRows = 101;
    const blueDominanceStart = 0.3;

    for (let row = 0; row < totalRows; row++) {
      const tBase = row / (totalRows - 1);
      let tAdjusted;
      if (tBase < blueDominanceStart) {
        tAdjusted = tBase / blueDominanceStart;
      } else {
        tAdjusted = 1 + ((tBase - blueDominanceStart) / (1 - blueDominanceStart));
        tAdjusted = Math.min(tAdjusted, 1);
      }
      const color = yellow.clone().lerp(blue, tAdjusted);
      colors.push(color.r, color.g, color.b);
      colors.push(color.r, color.g, color.b);
    }

    groundGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const groundMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
    });

    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -5;
    ground.receiveShadow = true;
    scene.add(ground);

    const frontBoxes = [];

    const BASKET_SCALE_FACTOR = 4;
    const wallThicknessMultiplier = 0.2;
    const floorThicknessMultiplier = 0.2;

    const basketLoader = new GLTFLoader();
    basketLoader.load(
      '/cesto.glb',
      (gltf) => {
        const cestoModel = gltf.scene;
        cestoModel.scale.set(BASKET_SCALE_FACTOR, BASKET_SCALE_FACTOR, BASKET_SCALE_FACTOR);
        
        const bbox = new THREE.Box3().setFromObject(cestoModel);
        const visualModelWidth = bbox.max.x - bbox.min.x;
        const visualModelHeight = bbox.max.y - bbox.min.y;
        const visualModelDepth = bbox.max.z - bbox.min.z;

        const visualModelBaseY = bbox.min.y ; 

        const actualBasketWidth = visualModelWidth;
        const actualBasketHeight = visualModelHeight;
        const actualBasketDepth = visualModelDepth;

        const wallThickness = wallThicknessMultiplier * BASKET_SCALE_FACTOR;
        const floorThickness = floorThicknessMultiplier * BASKET_SCALE_FACTOR;

        const basketPhysicsY = groundBody.position.y + (actualBasketHeight / 2) + 0.5;
        const basketPosition = new CANNON.Vec3(0, basketPhysicsY, -26); 

        const basketBody = new CANNON.Body({
          mass: 50,
          type: CANNON.Body.DYNAMIC,
          position: basketPosition, 
          material: basketMaterial,
          linearDamping: 0.5,
          angularDamping: 0.5,
        });
        basketBody.userData = { name: 'basket' };

        const floorShape = new CANNON.Box(new CANNON.Vec3(actualBasketWidth / 2, floorThickness / 2, actualBasketDepth / 2));
        basketBody.addShape(floorShape, new CANNON.Vec3(0, -actualBasketHeight / 2 + floorThickness / 2, 0));

        const frontWallShape = new CANNON.Box(new CANNON.Vec3(actualBasketWidth / 2, actualBasketHeight / 2, wallThickness / 2));
        basketBody.addShape(frontWallShape, new CANNON.Vec3(0, 0, -(actualBasketDepth / 2) + (wallThickness / 2)));

        const backWallShape = new CANNON.Box(new CANNON.Vec3(actualBasketWidth / 2, actualBasketHeight / 2, wallThickness / 2));
        basketBody.addShape(backWallShape, new CANNON.Vec3(0, 0, (actualBasketDepth / 2) - (wallThickness / 2)));

        const sideWallDepth = actualBasketDepth - (wallThickness * 2); 
        const leftWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, actualBasketHeight / 2, sideWallDepth / 2));
        basketBody.addShape(leftWallShape, new CANNON.Vec3(-(actualBasketWidth / 2) + (wallThickness / 2), 0, 0));

        const rightWallShape = new CANNON.Box(new CANNON.Vec3(wallThickness / 2, actualBasketHeight / 2, sideWallDepth / 2));
        basketBody.addShape(rightWallShape, new CANNON.Vec3((actualBasketWidth / 2) - (wallThickness / 2), 0, 0));

        world.addBody(basketBody);
        basketBodyRef.current = basketBody;

        // Moved this line inside the callback where basketBody is defined
        basketBody.addEventListener('collide', (e) => {
        });

        cestoModel.position.copy(basketBody.position); 
       cestoModel.position.y += ( -(actualBasketHeight / 2) - visualModelBaseY) + 0.5; // O +0.05 é um ajuste fino para subir um pouco
        cestoModel.quaternion.copy(basketBody.quaternion); 
        
        cestoModel.rotation.y += Math.PI/3 ;

        cestoModel.receiveShadow = true;
        cestoModel.castShadow = true;

        cestoModel.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        scene.add(cestoModel);
        basketMeshRef.current = cestoModel;
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar o modelo GLTF (cesto.glb):', error);
      }
    );

    const gridSize = 100;
    const divisions = 30;
    const color1 = 0xe7e97e;
    const color2 = 0xe7e97e;

    const gridHelperXZ = new THREE.GridHelper(gridSize, divisions, color1, color2);
    gridHelperXZ.position.y = -5;
    scene.add(gridHelperXZ);

    const loader = new GLTFLoader();
    loader.load(
      '/apple.glb',
      (gltf) => {
        loadedModelRef.current = gltf.scene;
        loadedModelRef.current.scale.set(0.2, 0.2, 0.2);
        loadedModelRef.current.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        const spawnFrontObject = () => {
          if (!loadedModelRef.current) {
            return;
          }
          const mesh = loadedModelRef.current.clone();
          mesh.position.set((Math.random() - 0.5) * 10, 10, 2);
          scene.add(mesh);

          const body = new CANNON.Body({
            mass: 14,
            material: appleMaterial,
            linearDamping: 0.3,
            angularDamping: 0.1,
            shape: new CANNON.Sphere(0.6)
          });
          body.position.copy(mesh.position);
          body.userData = { name: 'apple' };
          world.addBody(body);

          frontBoxes.push({ mesh, body });
        };
        spawnFrontObject();
        spawnIntervalRef.current = setInterval(spawnFrontObject, 30000);
      },
      undefined,
      (error) => {
        console.error('Erro ao carregar o modelo GLTF (apple.glb):', error);
      }
    );

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xFFD700, 1.8);
    directionalLight.position.set(0, 15, -40);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 100;
    directionalLight.shadow.camera.left = -30;
    directionalLight.shadow.camera.right = 30;
    directionalLight.shadow.camera.top = 30;
    directionalLight.shadow.camera.bottom = -30;
    scene.add(directionalLight);

    const sunGeometry = new THREE.SphereGeometry(5, 32, 16, 0, Math.PI);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xFCFDB4, emissive: 0xFFD700, emissiveIntensity: 2.0 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.copy(directionalLight.position);
    sun.position.y = -4;
    sun.position.z = -50;
    scene.add(sun);

    camera.position.z = 10;
    camera.position.y = 2;

    let selectedObject = null;
    let selectedBody = null;
    let dragDistance = 0;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const dragStrength = 500;

    const getClientCoords = (event) => {
      if (event.touches && event.touches.length > 0) {
        return { clientX: event.touches[0].clientX, clientY: event.touches[0].clientY };
      }
      return { clientX: event.clientX, clientY: event.clientY };
    };

    const onPointerDown = (event) => {
      const { clientX, clientY } = getClientCoords(event);
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const meshesToIntersect = frontBoxes.map(item => item.mesh);
      if (basketMeshRef.current) {
        meshesToIntersect.push(basketMeshRef.current);
      }
      
      const intersects = raycaster.intersectObjects(meshesToIntersect, true);

      if (intersects.length > 0) {
        let intersectedObject = intersects[0].object;
        let found = null;

        while (intersectedObject) {
          found = frontBoxes.find(({ mesh }) => mesh === intersectedObject);
          if (found) {
            selectedObject = found.mesh;
            selectedBody = found.body;
            break;
          }
          if (basketMeshRef.current && intersectedObject.uuid === basketMeshRef.current.uuid) {
            selectedObject = basketMeshRef.current;
            selectedBody = basketBodyRef.current;
            break;
          }
          if (intersectedObject.parent) {
            intersectedObject = intersectedObject.parent;
          } else {
            break;
          }
        }

        if (selectedObject && selectedBody) {
          dragDistance = camera.position.distanceTo(selectedObject.position);
          if (event.type === 'touchstart') {
            event.preventDefault();
          }
        }
      }
    };

    const onPointerMove = (event) => {
      if (!selectedObject || !selectedBody) return;
      const { clientX, clientY } = getClientCoords(event);
      mouse.x = (clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);

      const targetPoint = new THREE.Vector3();
      raycaster.ray.at(dragDistance, targetPoint);

      if (targetPoint) {
        const forceVector = new CANNON.Vec3(
          targetPoint.x - selectedBody.position.x,
          targetPoint.y - selectedBody.position.y,
          targetPoint.z - selectedBody.position.z
        );

        if (selectedBody.userData && selectedBody.userData.name === 'apple') {
            selectedBody.applyForce(
                forceVector.scale(dragStrength),
                new CANNON.Vec3(0, 0, 0)
            );
        } else if (selectedBody.userData && selectedBody.userData.name === 'basket') {
            selectedBody.applyForce(
                forceVector.scale(dragStrength * 2),
                new CANNON.Vec3(0, 0, 0)
            );
        }
      }
      if (event.type === 'touchmove') {
        event.preventDefault();
      }
    };

    const onPointerUp = () => {
      selectedObject = null;
      selectedBody = null;
    };

    window.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);

    window.addEventListener('touchstart', onPointerDown, { passive: false });
    window.addEventListener('touchmove', onPointerMove, { passive: false });
    window.addEventListener('touchend', onPointerUp);

    const animate = () => {
      requestAnimationFrame(animate);
      world.step(1 / 60);

      frontBoxes.forEach(({ mesh, body }) => {
        mesh.position.copy(body.position);
        mesh.quaternion.copy(body.quaternion);
      });

      if (basketMeshRef.current && basketBodyRef.current) {
        basketMeshRef.current.position.copy(basketBodyRef.current.position);
        basketMeshRef.current.quaternion.copy(basketBodyRef.current.quaternion);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (spawnIntervalRef.current) {
        clearInterval(spawnIntervalRef.current);
      }

      window.removeEventListener('mousedown', onPointerDown);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchstart', onPointerDown);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }

      const childrenToRemove = [...scene.children];
      childrenToRemove.forEach(child => {
        scene.remove(child);
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(material => material.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
      renderer.dispose();

      while (world.bodies.length > 0) {
        world.removeBody(world.bodies[0]);
      }
    };
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        ref={mountRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
      />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}