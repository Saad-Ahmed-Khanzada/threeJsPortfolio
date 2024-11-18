"use client";
import React, { useRef, useEffect, useState } from "react";
import { useGLTF, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MeshStandardMaterial } from "three";

export default function Wizard(props) {
  const { nodes } = useGLTF("/models/scene2.glb");
  const modelRef = useRef();
  const headRef = useRef();

  // Set up state for interactive color
  const [hoverColor, setHoverColor] = useState(0); // Initial color

  // Shiny material properties
  const shinyMaterial = new MeshStandardMaterial({
    // color: "black", // Use state for color
    color: "black", // Use state for color
    metalness:2.9,
    roughness: 1.0,
  });
  const shinyMaterial2 = new MeshStandardMaterial({
    // color: "black", // Use state for color
    color: "black", // Use state for color
    metalness: 2.6,
    roughness: 0.7,
  });

  // Set up mouse tracking for the object
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Update the model's head rotation based on mouse coordinates
      if (headRef.current) {
        headRef.current.rotation.y = x * 0.5; // Adjust multiplier for sensitivity
        headRef.current.rotation.x = -y * 0.5;
      }
    };

    // Attach the event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation similar to the previous wizard model (floating effect)
  useFrame((state, delta) => {
    if (modelRef.current) {
      // Floating effect: up and down motion on Y axis, and slight movement on Z axis
      modelRef.current.position.y = 0.5 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2; // Adjust multiplier for float speed and height
      modelRef.current.position.z = -1.5 + Math.sin(state.clock.elapsedTime) * 0.1; // Slight forward-backward movement
    }
  });

  // Interactive color change on hover
  const handlePointerOver = () => {
    setHoverColor(0xff5733); // Change to orange on hover
  };

  const handlePointerOut = () => {
    setHoverColor(0x0077ff); // Reset to light blue on mouse leave
  };

  return (
    <group
      {...props}
      dispose={null}
      ref={modelRef}
      scale={0.6} // Scale down the model
    >
      <group position={[0, 0.657, 0]}>
        <group scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={shinyMaterial} // Apply shiny material with hover color
            position={[-2.667, -300.619, 82.877]}
            rotation={[-Math.PI / 2, 0, 0]}
            onPointerOver={handlePointerOver}
            onPointerOut={handlePointerOut}
          />
          <group position={[-2.609, -125.049, 95.006]} scale={[1.033, 1, 1]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_2.geometry}
              material={shinyMaterial}
              position={[0, -38.421, 0]}
              rotation={[Math.PI, 0, 0]}
              scale={[1, 1, 1]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_1.geometry}
              material={shinyMaterial2}
              position={[0, 14.579, 0]}
              scale={[1, 0.869, 1]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
          </group>
          <group position={[17.635, -205.299, 74.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_4.geometry}
              material={shinyMaterial2}
              position={[0, -21.198, 0]}
              rotation={[0, 0, Math.PI]}
              scale={[1, 0.829, 1]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_3.geometry}
              material={shinyMaterial2}
              position={[0, 18.5, 0]}
              scale={[1, 0.829, 1]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
          </group>
          <group position={[-22.365, -205.299, 74.5]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_4_1.geometry}
              material={shinyMaterial2}
              position={[0, -21.198, 0]}
              rotation={[0, 0, Math.PI]}
              scale={[1, 0.829, 1]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube_3_1.geometry}
              material={shinyMaterial2}
              position={[0, 18.5, 0]}
              scale={[1, 0.829, 1]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
          </group>
          <group position={[-6.304, -9.193, 116.775]} ref={headRef}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cylinder.geometry}
              material={shinyMaterial2}
              position={[0, 7.999, 35.248]}
              rotation={[0, 0, Math.PI / 2]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Boolean_2.geometry}
              material={shinyMaterial2}
              position={[2.196, 0.125, 23.877]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere_2.geometry}
              material={shinyMaterial}
              position={[38.383, 7.693, 92.946]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={shinyMaterial}
              position={[-34.696, 7.693, 92.946]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Rectangle_4.geometry}
              material={shinyMaterial2}
              position={[0.347, 0.265, -106.801]}
              rotation={[0.001, -0.001, -0.001]}
              scale={[1, 1, 0.876]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Boolean.geometry}
              material={shinyMaterial}
              position={[0.404, 0.096, -7.775]}
              onPointerOver={handlePointerOver}
              onPointerOut={handlePointerOut}
            />
          </group>
        </group>
      </group>

      {/* Lighting setup */}
      <ambientLight intensity={0.5} />
      <directionalLight
        castShadow
        intensity={40.0}
        position={[5, 10, 7]} // Set light position for better contrast and shadow
      />

      {/* Optional: PerspectiveCamera */}
      <PerspectiveCamera makeDefault={false} far={100000} near={70} fov={45} />
    </group>
  );
}

useGLTF.preload("/models/scene2.glb");
