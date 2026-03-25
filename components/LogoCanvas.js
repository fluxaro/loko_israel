import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text3D, Center } from '@react-three/drei';
import * as THREE from 'three';

function RotatingLogo() {
  const meshRef = useRef();
  const ringRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.008;
      ringRef.current.rotation.x += 0.005;
    }
  });

  return (
    <group>
      {/* Central icosahedron */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color="#FFD700"
          emissive="#FFD700"
          emissiveIntensity={0.3}
          metalness={0.9}
          roughness={0.1}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <icosahedronGeometry args={[0.82, 1]} />
        <meshStandardMaterial color="#FFD700" wireframe opacity={0.3} transparent />
      </mesh>

      {/* Orbiting ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.3, 0.03, 16, 100]} />
        <meshStandardMaterial color="#FFD700" emissive="#FFD700" emissiveIntensity={0.5} />
      </mesh>

      {/* Second ring */}
      <mesh rotation={[Math.PI / 2, Math.PI / 4, 0]}>
        <torusGeometry args={[1.1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#ffffff" opacity={0.2} transparent />
      </mesh>
    </group>
  );
}

export default function LogoCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} style={{ background: 'transparent' }} gl={{ alpha: true }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[2, 2, 2]} intensity={2} color="#FFD700" />
      <pointLight position={[-2, -2, -2]} intensity={0.5} color="#ffffff" />
      <RotatingLogo />
    </Canvas>
  );
}
