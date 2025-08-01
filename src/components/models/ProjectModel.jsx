"use client";
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function ProjectModel(props) {
  const groupRef = useRef();
  const blocksRef = useRef();
  const connectionsRef = useRef();

  // Create materials
  const blockMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#2a2a2a',
    metalness: 0.8,
    roughness: 0.2,
  }), []);

  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#FEFE5B',
    metalness: 0.9,
    roughness: 0.1,
    emissive: '#FEFE5B',
    emissiveIntensity: 0.3,
  }), []);

  const glassMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ffffff',
    metalness: 0.1,
    roughness: 0,
    transparent: true,
    opacity: 0.3,
  }), []);

  const connectionMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#FEFE5B',
    emissive: '#FEFE5B',
    emissiveIntensity: 0.2,
    transparent: true,
    opacity: 0.6,
  }), []);

  // Project block positions and data
  const projectBlocks = useMemo(() => [
    { position: [0, 1, 0], scale: [0.8, 0.8, 0.8], label: "Mobile", rotation: [0, 0, 0] },
    { position: [-1.5, 0, 1], scale: [0.6, 0.6, 0.6], label: "Web", rotation: [0.2, 0, 0.1] },
    { position: [1.2, -0.5, 0.8], scale: [0.7, 0.7, 0.7], label: "API", rotation: [-0.1, 0.3, 0] },
    { position: [-0.8, -1, -0.5], scale: [0.5, 0.5, 0.5], label: "PWA", rotation: [0.1, -0.2, 0.2] },
    { position: [1.8, 0.5, -0.8], scale: [0.6, 0.6, 0.6], label: "AI", rotation: [0, 0.4, -0.1] },
    { position: [0, -0.8, 1.5], scale: [0.5, 0.5, 0.5], label: "3D", rotation: [0.3, 0, 0] },
  ], []);

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Main rotation
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }

    if (blocksRef.current) {
      // Individual block animations
      blocksRef.current.children.forEach((block, index) => {
        const time = state.clock.elapsedTime + index * 0.5;
        const originalY = projectBlocks[index].position[1];
        block.position.y = originalY + Math.sin(time * 2) * 0.1;
        block.rotation.x = projectBlocks[index].rotation[0] + Math.sin(time) * 0.1;
        block.rotation.z = projectBlocks[index].rotation[2] + Math.cos(time) * 0.1;
      });
    }
  });

  return (
    <group {...props} ref={groupRef} scale={[1.5, 1.5, 1.5]} position={[0, -1, 0]}>
      {/* Central Hub */}
      <mesh position={[0, 0, 0]} material={accentMaterial}>
        <octahedronGeometry args={[0.4, 1]} />
      </mesh>

      {/* Project Blocks */}
      <group ref={blocksRef}>
        {projectBlocks.map((block, index) => (
          <group key={index} position={block.position} rotation={block.rotation}>
            {/* Main Block */}
            <mesh material={blockMaterial} scale={block.scale}>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
            </mesh>
            
            {/* Glass Overlay */}
            <mesh material={glassMaterial} scale={[...block.scale.map(s => s * 1.02)]}>
              <boxGeometry args={[0.8, 0.8, 0.8]} />
            </mesh>

            {/* Accent Corner Spheres */}
            {[
              [-0.4, -0.4, -0.4], [0.4, -0.4, -0.4], [-0.4, 0.4, -0.4], [0.4, 0.4, -0.4],
              [-0.4, -0.4, 0.4], [0.4, -0.4, 0.4], [-0.4, 0.4, 0.4], [0.4, 0.4, 0.4]
            ].map((pos, i) => (
              <mesh key={i} position={pos.map(p => p * block.scale[0])} material={accentMaterial}>
                <sphereGeometry args={[0.03, 8, 8]} />
              </mesh>
            ))}

            {/* Floating Label */}
            <Text
              position={[0, block.scale[1] * 0.6 + 0.4, 0]}
              fontSize={0.2}
              color="#FEFE5B"
              anchorX="center"
              anchorY="middle"
            >
              {block.label}
            </Text>
          </group>
        ))}
      </group>

      {/* Connection Lines using Cylinders instead of Lines */}
      <group ref={connectionsRef}>
        <mesh position={[-0.75, 0.5, 0.5]} rotation={[0, 0, -0.5]} material={connectionMaterial}>
          <cylinderGeometry args={[0.01, 0.01, 1.8, 8]} />
        </mesh>
        <mesh position={[0.6, 0.25, 0.4]} rotation={[0, 0, 0.3]} material={connectionMaterial}>
          <cylinderGeometry args={[0.01, 0.01, 1.5, 8]} />
        </mesh>
        <mesh position={[-1.15, -0.5, 0.25]} rotation={[0, 0, -0.8]} material={connectionMaterial}>
          <cylinderGeometry args={[0.01, 0.01, 1.2, 8]} />
        </mesh>
        <mesh position={[1.5, 0, 0]} rotation={[0, 0, 1.2]} material={connectionMaterial}>
          <cylinderGeometry args={[0.01, 0.01, 1.3, 8]} />
        </mesh>
      </group>

      {/* Orbiting Particles */}
      <group>
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 2.5;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 0.5) * 0.3,
                Math.sin(angle) * radius
              ]}
              material={accentMaterial}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
            </mesh>
          );
        })}
      </group>

      {/* Technology Labels */}
      <Text
        position={[2, 1.5, 0]}
        rotation={[0, -0.3, 0]}
        fontSize={0.15}
        color="#888888"
        anchorX="center"
        anchorY="middle"
      >
        React Native
      </Text>

      <Text
        position={[-2, -1, 1.5]}
        rotation={[0, 0.3, 0]}
        fontSize={0.15}
        color="#888888"
        anchorX="center"
        anchorY="middle"
      >
        Next.js
      </Text>

      <Text
        position={[0, -2.5, -1.5]}
        rotation={[0.2, 0, 0]}
        fontSize={0.15}
        color="#888888"
        anchorX="center"
        anchorY="middle"
      >
        TypeScript
      </Text>

      {/* Project Count Display */}
      <group position={[0, 2.2, 0]}>
        <mesh material={glassMaterial}>
          <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
        </mesh>
        <Text
          position={[0, 0.1, 0]}
          fontSize={0.4}
          color="#FEFE5B"
          anchorX="center"
          anchorY="middle"
        >
          14
        </Text>
        <Text
          position={[0, -0.15, 0]}
          fontSize={0.12}
          color="#888888"
          anchorX="center"
          anchorY="middle"
        >
          Projects
        </Text>
      </group>

      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight 
        position={[3, 3, 3]} 
        intensity={1.5} 
        color="#FEFE5B" 
        distance={15}
        decay={2}
      />
      <pointLight 
        position={[-3, 2, -2]} 
        intensity={0.8} 
        color="#ffffff" 
        distance={12}
        decay={2}
      />
      <directionalLight
        position={[5, 5, 5]}
        intensity={0.5}
        color="#ffffff"
        castShadow
      />
    </group>
  );
}