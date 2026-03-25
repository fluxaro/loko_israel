import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const skills = [
  'React', 'Next.js', 'Tailwind', 'JavaScript', 'HTML/CSS',
  'Node.js', 'Express', 'MongoDB', 'REST API',
  'Three.js', 'GSAP', 'Framer', 'Git', 'GitHub',
  'SEO', 'Responsive',
];

function TagSphere() {
  const groupRef = useRef();

  const items = useMemo(() => {
    const n = skills.length;
    const golden = Math.PI * (3 - Math.sqrt(5));
    return skills.map((name, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      const radius = 1.85;
      return {
        name,
        position: new THREE.Vector3(
          r * Math.cos(theta) * radius,
          y * radius,
          r * Math.sin(theta) * radius
        ),
      };
    });
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe sphere — dark on white */}
      <mesh>
        <sphereGeometry args={[2.0, 28, 28]} />
        <meshBasicMaterial color="#d1d5db" wireframe transparent opacity={0.35} />
      </mesh>

      {items.map(({ name, position }) => (
        <group key={name} position={position}>
          <mesh>
            <sphereGeometry args={[0.045, 10, 10]} />
            <meshBasicMaterial color="#111827" />
          </mesh>
          <Html center distanceFactor={6.5} style={{ pointerEvents: 'none', userSelect: 'none' }}>
            <span style={{
              color: '#111827',
              fontSize: '11px',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              whiteSpace: 'nowrap',
              background: 'rgba(255,255,255,0.85)',
              padding: '2px 7px',
              borderRadius: '999px',
              border: '1px solid #e5e7eb',
              letterSpacing: '0.02em',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
            }}>
              {name}
            </span>
          </Html>
        </group>
      ))}
    </group>
  );
}

export default function SkillSphereCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 52 }}
      style={{ background: 'transparent' }}
      gl={{ alpha: true, antialias: true }}
    >
      <ambientLight intensity={1.2} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <TagSphere />
    </Canvas>
  );
}
