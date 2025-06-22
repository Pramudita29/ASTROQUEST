// import { useLoader } from '@react-three/fiber';
// import { useRef } from 'react';
// import { TextureLoader } from 'three';

// export default function SaturnRings({ orbitRadius }) {
//     const mesh = useRef();
//     const texture = useLoader(TextureLoader, '/textures/saturn_ring.png');

//     return (
//         <mesh ref={mesh} rotation-x={Math.PI / 2} position={[orbitRadius, 0, 0]}>
//             <ringGeometry args={[1.9, 3.2, 64]} />
//             <meshBasicMaterial map={texture} side={2} transparent />
//         </mesh>
//     );
// }
