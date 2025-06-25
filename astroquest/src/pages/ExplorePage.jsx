import { Canvas } from '@react-three/fiber';
import { Suspense, useState } from 'react';
import BackgroundLayout from '../components/BackgroundLayout';
import Navbar from '../components/Navbar';
import Planet from '../components/Planet';
import PlanetModal from '../components/PlanetModal';
import { planets } from '../components/planetData';

export default function Explore() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="w-full h-screen relative overflow-hidden bg-black font-['Inknut_Antiqua']">
            <BackgroundLayout>
                {/* Navbar */}
                <Navbar />

                {/* Title at top left */}
                <div className="absolute top-[8.3rem] left-10 z-10">
                    <h1 className="text-3xl font-bold font-['Inknut_Antiqua'] text-white drop-shadow-2xl tracking-wide">
                        Solar System Explorer
                    </h1>
                </div>

                {/* Prompt box at bottom left */}
                <div className="fixed bottom-10 left-10 z-30">
                    <div className="px-7 py-5 border-2 border-white rounded-2xl bg-transparent text-white font-['Inknut_Antiqua'] text-xl shadow-lg">
                        Please select a planet to<br />learn about it!
                    </div>
                </div>

                {/* Planets */}
                <div className="absolute top-0 left-0 w-full h-full z-0">
                    <Canvas camera={{ position: [0, 0, 120], fov: 60 }}>
                        <ambientLight intensity={0.6} />
                        <pointLight intensity={4} position={[-70, 0, 20]} color="#FFD700" />

                        <directionalLight intensity={1.2} position={[50, 30, 30]} color="#87CEEB" />
                        <directionalLight intensity={0.8} position={[-50, -30, 30]} color="#DDA0DD" />
                        <pointLight intensity={0.5} position={[0, 0, -50]} color="#FFFFFF" distance={200} />

                        <Suspense fallback={null}>
                            {planets.map((planet, index) => (
                                <Planet
                                    key={index}
                                    texture={planet.texture}
                                    radius={planet.radius}
                                    position={planet.position}
                                    name={planet.name}
                                    onClick={() => setSelected(planet.name)}
                                />
                            ))}
                        </Suspense>

                        {/* <OrbitControls
                            enableZoom={true}
                            enablePan={true}
                            minDistance={40}
                            maxDistance={180}
                            enableDamping={true}
                            dampingFactor={0.03}
                            autoRotate={false}
                            maxPolarAngle={Math.PI * 0.8}
                            minPolarAngle={Math.PI * 0.2}
                        /> */}
                    </Canvas>
                </div>

                {selected && <PlanetModal name={selected} onClose={() => setSelected(null)} />}

                {/* Floating particles effect
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(50)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-pulse"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 2}s`,
                                animationDuration: `${2 + Math.random() * 3}s`,
                            }}
                        />
                    ))}
                </div> */}
            </BackgroundLayout>
        </div>
    );
}
