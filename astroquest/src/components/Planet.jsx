import { Html } from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { useRef } from 'react';
import { TextureLoader } from 'three';

export default function Planet({ texture, radius = 1, position = [0, 0, 0], name, onClick }) {
    const mesh = useRef();
    const ringRef = useRef();
    const map = useLoader(TextureLoader, texture);

    useFrame(() => {
        if (mesh.current) mesh.current.rotation.y += 0.003;
        if (ringRef.current) ringRef.current.rotation.z += 0.001;
    });

    return (
        <group position={position}>
            {/* Main planet */}
            <mesh
                ref={mesh}
                onClick={onClick}
                scale={[radius, radius, radius]}
            >
                <sphereGeometry args={[1, 130, 130]} />
                <meshStandardMaterial map={map} />
            </mesh>

            {/* Saturn's rings */}
            {name === 'Saturn' && (
                <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
                    <ringGeometry args={[radius * 1.2, radius * 1.8, 64]} />
                    <meshBasicMaterial
                        color="#D4A574"
                        transparent
                        opacity={0.7}
                        side={2}
                    />
                </mesh>
            )}

            {/* Planet label below the planet */}
            <Html position={[0, -radius - 5, 0]} center style={{ pointerEvents: 'none' }}>
                <div style={{
                    color: 'white',
                    fontWeight: 700,
                    textAlign: 'center',
                    fontSize: 15,
                    fontFamily: 'Inknut Antiqua, serif',
                    textShadow: '0 2px 8px #000',
                    letterSpacing: '0.04em',
                    background: 'none',
                    padding: 0,
                    borderRadius: 0,
                    border: 'none',
                    boxShadow: 'none',
                    minWidth: '0',
                    marginTop: '0.3rem',
                    textTransform: 'uppercase'
                }}>
                    {name}
                </div>
            </Html>
        </group>
    );
}
