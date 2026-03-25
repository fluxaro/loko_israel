import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float } from '@react-three/drei';
import * as THREE from 'three';

// Silver material shared across body parts
const SILVER = { color: '#c8cdd4', metalness: 0.7, roughness: 0.25 };
const SILVER_DARK = { color: '#9aa0a8', metalness: 0.8, roughness: 0.2 };
const SILVER_LIGHT = { color: '#dde1e6', metalness: 0.6, roughness: 0.3 };
const YELLOW = '#FFD700';

function Eye({ position }) {
  const meshRef = useRef();
  const glowRef = useRef();
  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (meshRef.current) meshRef.current.material.emissiveIntensity = 0.7 + Math.sin(t * 2.5) * 0.3;
    if (glowRef.current) glowRef.current.material.opacity = 0.18 + Math.sin(t * 2.5) * 0.08;
  });
  return (
    <group position={position}>
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshBasicMaterial color={YELLOW} transparent opacity={0.2} />
      </mesh>
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.075, 20, 20]} />
        <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.8} metalness={0.2} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0, 0.065]}>
        <sphereGeometry args={[0.03, 12, 12]} />
        <meshBasicMaterial color="#111" />
      </mesh>
    </group>
  );
}

function Antenna({ position }) {
  const ballRef = useRef();
  useFrame((s) => {
    if (ballRef.current)
      ballRef.current.material.emissiveIntensity = 0.5 + Math.sin(s.clock.elapsedTime * 3) * 0.45;
  });
  return (
    <group position={position}>
      <mesh>
        <cylinderGeometry args={[0.016, 0.016, 0.3, 8]} />
        <meshStandardMaterial {...SILVER_DARK} />
      </mesh>
      <mesh ref={ballRef} position={[0, 0.19, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.6} roughness={0.1} />
      </mesh>
    </group>
  );
}

function ChestPanel() {
  const orbRef = useRef();
  useFrame((s) => {
    if (orbRef.current)
      orbRef.current.material.emissiveIntensity = 0.5 + Math.sin(s.clock.elapsedTime * 1.8) * 0.3;
  });
  return (
    <group position={[0, 0.08, 0.295]}>
      <mesh>
        <boxGeometry args={[0.52, 0.36, 0.025]} />
        <meshStandardMaterial color="#b0b6be" metalness={0.6} roughness={0.35} />
      </mesh>
      <mesh ref={orbRef} position={[0, 0.04, 0.018]}>
        <circleGeometry args={[0.085, 32]} />
        <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.5} roughness={0.1} />
      </mesh>
      {[-0.15, 0, 0.15].map((x, i) => (
        <mesh key={i} position={[x, -0.1, 0.018]}>
          <circleGeometry args={[0.022, 16]} />
          <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.4} />
        </mesh>
      ))}
      <mesh position={[0, -0.04, 0.018]}>
        <boxGeometry args={[0.4, 0.01, 0.01]} />
        <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
}

function Arm({ side = 1 }) {
  const lowerRef = useRef();
  useFrame((s) => {
    if (lowerRef.current)
      lowerRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 1.2 + (side > 0 ? 0 : Math.PI)) * 0.18;
  });
  return (
    <group position={[side * 0.72, 0.1, 0]}>
      <mesh position={[side * -0.04, 0.38, 0]}>
        <sphereGeometry args={[0.13, 16, 16]} />
        <meshStandardMaterial {...SILVER_DARK} />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.22, 0.42, 0.2]} />
        <meshStandardMaterial {...SILVER} />
      </mesh>
      <mesh position={[0, -0.08, 0]}>
        <sphereGeometry args={[0.1, 14, 14]} />
        <meshStandardMaterial {...SILVER_DARK} />
      </mesh>
      <group ref={lowerRef} position={[0, -0.08, 0]}>
        <mesh position={[0, -0.22, 0]}>
          <boxGeometry args={[0.18, 0.38, 0.17]} />
          <meshStandardMaterial {...SILVER_LIGHT} />
        </mesh>
        <mesh position={[0, -0.44, 0]}>
          <boxGeometry args={[0.2, 0.16, 0.18]} />
          <meshStandardMaterial {...SILVER} />
        </mesh>
        {[-0.06, 0, 0.06].map((x, i) => (
          <mesh key={i} position={[x, -0.44, 0.1]}>
            <boxGeometry args={[0.04, 0.04, 0.04]} />
            <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.25} />
          </mesh>
        ))}
      </group>
    </group>
  );
}

function Leg({ side = 1 }) {
  const lowerRef = useRef();
  useFrame((s) => {
    if (lowerRef.current)
      lowerRef.current.rotation.x = Math.sin(s.clock.elapsedTime * 1.2 + (side > 0 ? Math.PI : 0)) * 0.1;
  });
  return (
    <group position={[side * 0.26, -0.82, 0]}>
      <mesh position={[0, 0.06, 0]}>
        <sphereGeometry args={[0.13, 14, 14]} />
        <meshStandardMaterial {...SILVER_DARK} />
      </mesh>
      <mesh position={[0, -0.2, 0]}>
        <boxGeometry args={[0.26, 0.44, 0.24]} />
        <meshStandardMaterial {...SILVER} />
      </mesh>
      <mesh position={[0, -0.44, 0]}>
        <sphereGeometry args={[0.11, 14, 14]} />
        <meshStandardMaterial {...SILVER_DARK} />
      </mesh>
      <group ref={lowerRef} position={[0, -0.44, 0]}>
        <mesh position={[0, -0.22, 0]}>
          <boxGeometry args={[0.22, 0.4, 0.22]} />
          <meshStandardMaterial {...SILVER_LIGHT} />
        </mesh>
        <mesh position={[0, -0.44, 0.06]}>
          <boxGeometry args={[0.26, 0.12, 0.34]} />
          <meshStandardMaterial {...SILVER} />
        </mesh>
      </group>
    </group>
  );
}

function Robot({ mousePos }) {
  const rootRef = useRef();
  const headRef = useRef();
  const bodyRef = useRef();

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (rootRef.current) {
      rootRef.current.rotation.y = THREE.MathUtils.lerp(rootRef.current.rotation.y, mousePos.x * 0.4, 0.06);
      rootRef.current.rotation.x = THREE.MathUtils.lerp(rootRef.current.rotation.x, mousePos.y * 0.2, 0.06);
    }
    if (headRef.current) {
      headRef.current.rotation.y = Math.sin(t * 0.6) * 0.12;
      headRef.current.rotation.z = Math.sin(t * 0.4) * 0.04;
    }
    if (bodyRef.current) bodyRef.current.scale.y = 1 + Math.sin(t * 1.4) * 0.012;
  });

  return (
    <Float speed={1.2} rotationIntensity={0} floatIntensity={0.4}>
      <group ref={rootRef}>
        <Leg side={-1} />
        <Leg side={1} />

        {/* Pelvis */}
        <mesh position={[0, -0.72, 0]}>
          <boxGeometry args={[0.62, 0.22, 0.42]} />
          <meshStandardMaterial {...SILVER_DARK} />
        </mesh>

        {/* Torso */}
        <group ref={bodyRef}>
          <mesh position={[0, 0.1, 0]}>
            <boxGeometry args={[0.88, 0.9, 0.52]} />
            <meshStandardMaterial {...SILVER} />
          </mesh>
          {/* Yellow side strips */}
          <mesh position={[-0.455, 0.1, 0]}>
            <boxGeometry args={[0.04, 0.7, 0.44]} />
            <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.2} metalness={0.5} roughness={0.3} />
          </mesh>
          <mesh position={[0.455, 0.1, 0]}>
            <boxGeometry args={[0.04, 0.7, 0.44]} />
            <meshStandardMaterial color={YELLOW} emissive={YELLOW} emissiveIntensity={0.2} metalness={0.5} roughness={0.3} />
          </mesh>
          <ChestPanel />
          {/* Shoulder plates */}
          <mesh position={[-0.56, 0.46, 0]}>
            <boxGeometry args={[0.22, 0.14, 0.54]} />
            <meshStandardMaterial {...SILVER_DARK} />
          </mesh>
          <mesh position={[0.56, 0.46, 0]}>
            <boxGeometry args={[0.22, 0.14, 0.54]} />
            <meshStandardMaterial {...SILVER_DARK} />
          </mesh>
        </group>

        <Arm side={-1} />
        <Arm side={1} />

        {/* Neck */}
        <mesh position={[0, 0.62, 0]}>
          <cylinderGeometry args={[0.12, 0.16, 0.18, 12]} />
          <meshStandardMaterial {...SILVER_DARK} />
        </mesh>

        {/* Head */}
        <group ref={headRef} position={[0, 0.88, 0]}>
          <mesh>
            <boxGeometry args={[0.72, 0.66, 0.62]} />
            <meshStandardMaterial {...SILVER} />
          </mesh>
          {/* Visor */}
          <mesh position={[0, 0.04, 0.32]}>
            <boxGeometry args={[0.62, 0.18, 0.02]} />
            <meshStandardMaterial color="#1a1a2e" metalness={0.3} roughness={0.1} />
          </mesh>
          <Eye position={[-0.18, 0.04, 0.33]} />
          <Eye position={[0.18, 0.04, 0.33]} />
          {/* Mouth grill */}
          {[-0.12, -0.04, 0.04, 0.12].map((x, i) => (
            <mesh key={i} position={[x, -0.18, 0.32]}>
              <boxGeometry args={[0.04, 0.06, 0.02]} />
              <meshStandardMaterial {...SILVER_DARK} />
            </mesh>
          ))}
          {/* Ear panels */}
          <mesh position={[-0.38, 0.04, 0]}>
            <boxGeometry args={[0.06, 0.3, 0.3]} />
            <meshStandardMaterial {...SILVER_DARK} />
          </mesh>
          <mesh position={[0.38, 0.04, 0]}>
            <boxGeometry args={[0.06, 0.3, 0.3]} />
            <meshStandardMaterial {...SILVER_DARK} />
          </mesh>
          {/* Top ridge */}
          <mesh position={[0, 0.36, 0]}>
            <boxGeometry args={[0.5, 0.08, 0.5]} />
            <meshStandardMaterial {...SILVER_DARK} />
          </mesh>
          <Antenna position={[0.2, 0.44, 0]} />
        </group>
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
    <Canvas camera={{ position: [0, 0.2, 5.2], fov: 52 }} style={{ background: 'transparent' }} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 8, 5]} intensity={2.0} color="#ffffff" castShadow />
      <directionalLight position={[-5, 3, -3]} intensity={1.0} color="#e8eeff" />
      <directionalLight position={[0, -3, 4]} intensity={0.6} color="#ffffff" />
      <pointLight position={[0, 2, 3]} intensity={0.8} color={YELLOW} distance={8} />
      <Suspense fallback={null}>
        <Robot mousePos={mousePos} />
      </Suspense>
      <ContactShadows position={[0, -2.1, 0]} opacity={0.15} scale={7} blur={2.5} color="#aaa" />
    </Canvas>
  );
}
