"use client";
import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';

export default function AboutModel(props) {
  const groupRef = useRef();
  const screenRef = useRef();
  const particlesRef = useRef();

  // Create laptop materials
  const laptopMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#2d2d2d',
    metalness: 0.8,
    roughness: 0.2,
  }), []);

  const screenMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#000000',
    metalness: 0.1,
    roughness: 0.1,
  }), []);

  const keyboardMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.6,
    roughness: 0.3,
  }), []);

  const accentMaterial = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#FEFE5B',
    metalness: 0.9,
    roughness: 0.1,
    emissive: '#FEFE5B',
    emissiveIntensity: 0.2,
  }), []);

  // Create floating particles
  const particles = useMemo(() => {
    const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8);
    const particlePositions = [];
    for (let i = 0; i < 20; i++) {
      particlePositions.push({
        position: [
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4,
          (Math.random() - 0.5) * 4
        ],
        speed: 0.5 + Math.random() * 0.5
      });
    }
    return { geometry: particleGeometry, positions: particlePositions };
  }, []);

  // Animation
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }

    if (screenRef.current) {
      // Screen glow animation
      screenRef.current.material.emissiveIntensity = 0.1 + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }

    if (particlesRef.current) {
      // Animate particles
      particlesRef.current.children.forEach((particle, index) => {
        const time = state.clock.elapsedTime * particles.positions[index].speed;
        particle.position.y += Math.sin(time + index) * 0.001;
        particle.position.x += Math.cos(time + index) * 0.001;
      });
    }
  });

  return (
    <group {...props} ref={groupRef} scale={[1.5, 1.5, 1.5]} position={[0, 0, 0]}>
      {/* Laptop Base */}
      <mesh position={[0, -0.8, 0]} material={laptopMaterial}>
        <boxGeometry args={[2, 0.1, 1.4]} />
      </mesh>

      {/* Laptop Screen Back */}
      <mesh position={[0, -0.2, -0.7]} rotation={[-0.1, 0, 0]} material={laptopMaterial}>
        <boxGeometry args={[2, 1.2, 0.05]} />
      </mesh>

      {/* Screen */}
      <mesh 
        ref={screenRef}
        position={[0, -0.2, -0.67]} 
        rotation={[-0.1, 0, 0]} 
        material={new THREE.MeshStandardMaterial({
          color: '#0a0a0a',
          emissive: '#FEFE5B',
          emissiveIntensity: 0.1,
        })}
      >
        <boxGeometry args={[1.8, 1, 0.01]} />
      </mesh>

      {/* Keyboard Keys */}
      {Array.from({ length: 6 }, (_, row) =>
        Array.from({ length: 10 }, (_, col) => (
          <mesh
            key={`${row}-${col}`}
            position={[
              -0.8 + col * 0.18,
              -0.74,
              -0.2 + row * 0.12
            ]}
            material={keyboardMaterial}
          >
            <boxGeometry args={[0.12, 0.02, 0.1]} />
          </mesh>
        ))
      )}

      {/* Trackpad */}
      <mesh position={[0, -0.72, 0.3]} material={laptopMaterial}>
        <boxGeometry args={[0.6, 0.01, 0.4]} />
      </mesh>

      {/* Accent Strips */}
      <mesh position={[0, -0.75, -0.7]} material={accentMaterial}>
        <boxGeometry args={[2.1, 0.02, 0.02]} />
      </mesh>

      <mesh position={[0, -0.85, 0]} material={accentMaterial}>
        <boxGeometry args={[2.1, 0.02, 0.02]} />
      </mesh>

      {/* Floating Code Symbols */}
      <group ref={particlesRef}>
        {particles.positions.map((particle, index) => (
          <mesh
            key={index}
            position={particle.position}
            material={accentMaterial}
          >
            <primitive object={particles.geometry} />
          </mesh>
        ))}
      </group>

      {/* Floating Text Elements */}
      <Text
        position={[1.5, 0.5, 0]}
        rotation={[0, -0.3, 0]}
        fontSize={0.15}
        color="#FEFE5B"
        anchorX="center"
        anchorY="middle"
      >
        {"< Code />"}
      </Text>

      <Text
        position={[-1.5, 0, 0.5]}
        rotation={[0, 0.3, 0]}
        fontSize={0.12}
        color="#FEFE5B"
        anchorX="center"
        anchorY="middle"
      >
        React
      </Text>

      <Text
        position={[0, 1, -1]}
        rotation={[-0.2, 0, 0]}
        fontSize={0.1}
        color="#FEFE5B"
        anchorX="center"
        anchorY="middle"
      >
        JavaScript
      </Text>

      {/* Ambient Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight 
        position={[2, 2, 2]} 
        intensity={1} 
        color="#FEFE5B" 
        distance={10}
        decay={2}
      />
      <pointLight 
        position={[-2, 1, 2]} 
        intensity={0.5} 
        color="#ffffff" 
        distance={8}
        decay={2}
      />
    </group>
  );
}