import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

const GOLD = '#FFD700';
const DARK_METAL  = { color: '#7a8494', metalness: 0.85, roughness: 0.2  };
const MID_METAL   = { color: '#9aa4b2', metalness: 0.8,  roughness: 0.25 };
const LIGHT_METAL = { color: '#b0bcc8', metalness: 0.75, roughness: 0.2  };
const ACCENT      = { color: '#c2cdd8', metalness: 0.7,  roughness: 0.2  };

function Eye({ position }) {
  const core = useRef();
  useFrame(({ clock }) => {
    if (core.current)
      core.current.material.emissiveIntensity = 1.2 + Math.sin(clock.elapsedTime * 2) * 0.4;
  });
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.065, 0.065, 0.04, 24]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh ref={core} position={[0, 0, 0.022]}>
        <circleGeometry args={[0.042, 32]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={1.4} roughness={0.05} />
      </mesh>
    </group>
  );
}

function Head() {
  const ref = useRef();
  useFrame(({ clock: c }) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(c.elapsedTime * 0.5) * 0.1;
      ref.current.rotation.z = Math.sin(c.elapsedTime * 0.35) * 0.03;
    }
  });
  return (
    <group ref={ref} position={[0, 1.02, 0]}>
      <mesh>
        <boxGeometry args={[0.78, 0.62, 0.68]} />
        <meshStandardMaterial {...MID_METAL} />
      </mesh>
      <mesh position={[0, 0.24, 0.3]}>
        <boxGeometry args={[0.72, 0.1, 0.12]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[0, 0.06, 0.33]}>
        <boxGeometry args={[0.64, 0.2, 0.04]} />
        <meshStandardMaterial color="#0a0c10" metalness={0.1} roughness={0.05} />
      </mesh>
      <Eye position={[-0.17, 0.06, 0.35]} />
      <Eye position={[ 0.17, 0.06, 0.35]} />
      <mesh position={[-0.34, 0.02, 0.22]}>
        <boxGeometry args={[0.1, 0.28, 0.36]} />
        <meshStandardMaterial {...LIGHT_METAL} />
      </mesh>
      <mesh position={[ 0.34, 0.02, 0.22]}>
        <boxGeometry args={[0.1, 0.28, 0.36]} />
        <meshStandardMaterial {...LIGHT_METAL} />
      </mesh>
      <mesh position={[0, -0.22, 0.28]}>
        <boxGeometry args={[0.52, 0.12, 0.18]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      {[-0.14, -0.05, 0.04, 0.13].map((x, i) => (
        <mesh key={i} position={[x, -0.22, 0.35]}>
          <boxGeometry args={[0.035, 0.04, 0.01]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.3} />
        </mesh>
      ))}
      <mesh position={[-0.41, 0.04, 0]}>
        <boxGeometry args={[0.04, 0.36, 0.42]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[ 0.41, 0.04, 0]}>
        <boxGeometry args={[0.04, 0.36, 0.42]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[0, 0.34, 0]}>
        <boxGeometry args={[0.44, 0.06, 0.56]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[0, 0.37, 0]}>
        <boxGeometry args={[0.44, 0.02, 0.08]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.25} roughness={0.1} />
      </mesh>
    </group>
  );
}

function Neck() {
  return (
    <group position={[0, 0.72, 0]}>
      <mesh>
        <cylinderGeometry args={[0.1, 0.14, 0.22, 16]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <torusGeometry args={[0.16, 0.025, 8, 32]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.2} roughness={0.1} />
      </mesh>
    </group>
  );
}

function Torso() {
  const coreRef = useRef();
  useFrame(({ clock }) => {
    if (coreRef.current)
      coreRef.current.material.emissiveIntensity = 0.8 + Math.sin(clock.elapsedTime * 1.6) * 0.3;
  });
  return (
    <group position={[0, 0.12, 0]}>
      <mesh>
        <boxGeometry args={[0.96, 0.88, 0.56]} />
        <meshStandardMaterial {...MID_METAL} />
      </mesh>
      <mesh position={[0, 0.28, 0.29]}>
        <boxGeometry args={[0.82, 0.28, 0.04]} />
        <meshStandardMaterial {...LIGHT_METAL} />
      </mesh>
      <mesh position={[0, 0.04, 0.3]}>
        <boxGeometry args={[0.38, 0.38, 0.04]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh ref={coreRef} position={[0, 0.04, 0.33]}>
        <circleGeometry args={[0.1, 48]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.9} roughness={0.05} />
      </mesh>
      <mesh position={[0, 0.04, 0.325]}>
        <ringGeometry args={[0.11, 0.135, 48]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.4} roughness={0.1} />
      </mesh>
      <mesh position={[0, -0.28, 0.29]}>
        <boxGeometry args={[0.78, 0.24, 0.04]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[-0.5, 0.06, 0]}>
        <boxGeometry args={[0.04, 0.72, 0.5]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[ 0.5, 0.06, 0]}>
        <boxGeometry args={[0.04, 0.72, 0.5]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[0, -0.46, 0]}>
        <boxGeometry args={[0.9, 0.03, 0.5]} />
        <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.15} roughness={0.2} />
      </mesh>
      <mesh position={[-0.58, 0.44, 0]}>
        <boxGeometry args={[0.2, 0.12, 0.58]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[ 0.58, 0.44, 0]}>
        <boxGeometry args={[0.2, 0.12, 0.58]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
    </group>
  );
}

function Pelvis() {
  return (
    <group position={[0, -0.56, 0]}>
      <mesh>
        <boxGeometry args={[0.74, 0.2, 0.48]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[-0.28, 0, 0.25]}>
        <boxGeometry args={[0.18, 0.14, 0.04]} />
        <meshStandardMaterial {...ACCENT} />
      </mesh>
      <mesh position={[ 0.28, 0, 0.25]}>
        <boxGeometry args={[0.18, 0.14, 0.04]} />
        <meshStandardMaterial {...ACCENT} />
      </mesh>
    </group>
  );
}

function Arm({ side = 1 }) {
  const foreRef = useRef();
  useFrame(({ clock }) => {
    if (foreRef.current)
      foreRef.current.rotation.x = Math.sin(clock.elapsedTime * 1.1 + (side > 0 ? 0 : Math.PI)) * 0.14;
  });
  return (
    <group position={[side * 0.78, 0.12, 0]}>
      <mesh position={[side * -0.04, 0.36, 0]}>
        <sphereGeometry args={[0.14, 20, 20]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[side * 0.04, 0.42, 0]}>
        <boxGeometry args={[0.28, 0.1, 0.46]} />
        <meshStandardMaterial {...MID_METAL} />
      </mesh>
      <mesh position={[0, 0.14, 0]}>
        <boxGeometry args={[0.23, 0.4, 0.21]} />
        <meshStandardMaterial {...MID_METAL} />
      </mesh>
      <mesh position={[0, -0.1, 0]}>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <group ref={foreRef} position={[0, -0.1, 0]}>
        <mesh position={[0, -0.22, 0]}>
          <boxGeometry args={[0.19, 0.38, 0.18]} />
          <meshStandardMaterial {...LIGHT_METAL} />
        </mesh>
        <mesh position={[0, -0.22, 0.1]}>
          <boxGeometry args={[0.19, 0.38, 0.01]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.15} roughness={0.2} />
        </mesh>
        <mesh position={[0, -0.44, 0]}>
          <boxGeometry args={[0.21, 0.12, 0.2]} />
          <meshStandardMaterial {...DARK_METAL} />
        </mesh>
        <mesh position={[0, -0.56, 0]}>
          <boxGeometry args={[0.18, 0.14, 0.16]} />
          <meshStandardMaterial {...MID_METAL} />
        </mesh>
      </group>
    </group>
  );
}

function Leg({ side = 1 }) {
  const shinRef = useRef();
  useFrame(({ clock }) => {
    if (shinRef.current)
      shinRef.current.rotation.x = Math.sin(clock.elapsedTime * 1.1 + (side > 0 ? Math.PI : 0)) * 0.08;
  });
  return (
    <group position={[side * 0.28, -0.76, 0]}>
      <mesh position={[0, 0.08, 0]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <mesh position={[0, -0.18, 0]}>
        <boxGeometry args={[0.28, 0.46, 0.26]} />
        <meshStandardMaterial {...MID_METAL} />
      </mesh>
      <mesh position={[0, -0.14, 0.14]}>
        <boxGeometry args={[0.22, 0.34, 0.04]} />
        <meshStandardMaterial {...LIGHT_METAL} />
      </mesh>
      <mesh position={[0, -0.44, 0]}>
        <sphereGeometry args={[0.11, 16, 16]} />
        <meshStandardMaterial {...DARK_METAL} />
      </mesh>
      <group ref={shinRef} position={[0, -0.44, 0]}>
        <mesh position={[0, -0.24, 0]}>
          <boxGeometry args={[0.24, 0.42, 0.24]} />
          <meshStandardMaterial {...LIGHT_METAL} />
        </mesh>
        <mesh position={[0, -0.2, 0.13]}>
          <boxGeometry args={[0.18, 0.32, 0.04]} />
          <meshStandardMaterial {...MID_METAL} />
        </mesh>
        <mesh position={[0, -0.1, 0.15]}>
          <boxGeometry args={[0.18, 0.03, 0.01]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD} emissiveIntensity={0.2} roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.48, 0.06]}>
          <boxGeometry args={[0.28, 0.12, 0.36]} />
          <meshStandardMaterial {...DARK_METAL} />
        </mesh>
      </group>
    </group>
  );
}

function Robot({ mousePos }) {
  const rootRef = useRef();
  useFrame(() => {
    if (rootRef.current) {
      rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, mousePos.x * 0.35, 0.05);
      rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, mousePos.y * 0.15, 0.05);
    }
  });
  return (
    <Float speed={1.0} rotationIntensity={0} floatIntensity={0.3}>
      <group ref={rootRef} position={[0, 0.1, 0]}>
        <Leg side={-1} />
        <Leg side={1} />
        <Pelvis />
        <Torso />
        <Arm side={-1} />
        <Arm side={1} />
        <Neck />
        <Head />
      </group>
    </Float>
  );
}

export default function RobotCanvas() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0.3, 5.0], fov: 50 }} style={{ background: 'transparent' }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.2} />
      <directionalLight position={[4, 6, 4]} intensity={4.0} color="#ffffff" castShadow />
      <directionalLight position={[-4, 2, -2]} intensity={2.5} color="#ffffff" />
      <directionalLight position={[0, -2, 3]} intensity={1.5} color="#ffffff" />
      <pointLight position={[0, 0.1, 2.2]} intensity={0.6} color={GOLD} distance={5} />
      <Suspense fallback={null}>
        <Robot mousePos={mousePos} />
      </Suspense>
      <ContactShadows position={[0, -2.05, 0]} opacity={0.35} scale={6} blur={2.5} color="#000000" />
    </Canvas>
  );
}
