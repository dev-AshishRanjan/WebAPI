"use client";

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import styles from "./style.module.scss";

function MeshComponent() {
  const fileUrl = "/images/elaina_-_the_witchs_journeysummerwhitedress (1)/scene.gltf"; //path of the scene.glb or scene.gltf file from public
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  // useFrame(() => {
  //   mesh.current.rotation.y += 0.01;
  // });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function Elina() {
  return (
    <div className={styles.screen}>
      <Canvas className={styles.canva}>
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}