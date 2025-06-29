import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import larissaImg from '../../assets/larissa.png';
import neptuneTopImg from '../../assets/neptune-top.png';
import nereidImg from '../../assets/nereid.png';
import proteusImg from '../../assets/proteus.png';
import tritonImg from '../../assets/triton.png';

export default function NeptuneMoonsPage() {
    const navigate = useNavigate();

    const smallerMoons = [
        { name: 'Galatea', diameter: '~174 km', discovery: '1989 (Voyager 2)', notes: 'May help maintain Neptune\'s rings.' },
        { name: 'Despina', diameter: '~150 km', discovery: '1989', notes: 'Inner moon, irregular orbit.' },
        { name: 'Thalassa', diameter: '~80 km', discovery: '1989', notes: 'Orbits just above Neptune’s atmosphere.' },
        { name: 'Naiad', diameter: '~60 km', discovery: '1989', notes: 'Very close orbit; interacts with Thalassa.' },
    ];

    return (
        <BackgroundLayout>
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="w-screen text-white font-serif pt-8 pb-[130px]">
                <div className="w-full">
                    <button
                        onClick={() => navigate(-1)}
                        className="ml-10 text-white text-sm px-4 py-2 bg-white/10 rounded hover:bg-white hover:text-black transition mb-1"
                    >
                        ← Back to Neptune
                    </button>

                    {/* Title and Top Image */}
                    <div className="relative w-full mb-24">
                        <img
                            src={neptuneTopImg}
                            alt="Neptune"
                            className="absolute -top-[175px] right-0 w-[300px] md:w-[400px] lg:w-[480px] h-auto opacity-90 z-0 pointer-events-none"
                        />
                        <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
                            NEPTUNE MOONS
                        </h1>
                    </div>

                    {/* Overview */}
                    <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
                        <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
                            <span className="mr-2">🔵</span> Overview of Neptune’s Moons
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Total Moons:</strong> 14</li>
                            <li><strong>Largest Moon:</strong> Triton</li>
                            <li><strong>Types:</strong> Regular (orbit in Neptune’s equatorial plane) and Irregular (inclined or retrograde orbits)</li>
                        </ul>
                        <p className="mt-6 text-white/80">
                            Neptune's moons exhibit diverse characteristics, from the icy and geologically active Triton to smaller, irregularly shaped satellites. Many were discovered during Voyager 2's 1989 flyby.
                        </p>
                        <div className="mt-6 italic text-sm text-gray-400">
                            Fun Fact: Triton's retrograde orbit suggests it was captured by Neptune's gravity, making it a unique example among large moons.
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <section className="w-screen text-center font-serif -mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Major Moons of Neptune</h2>
            </section>

            {/* MAJOR MOONS */}
            <section className="w-screen font-serif text-base md:text-lg">
                {[{
                    title: 'Triton (The King of Neptune’s Moons)',
                    img: tritonImg,
                    facts: [
                        'Discovered: 1846 by William Lassell (just days after Neptune’s discovery)',
                        'Size: ~2,710 km in diameter (bigger than Pluto!)',
                        'Orbit: Retrograde – opposite Neptune’s rotation',
                        'Key Facts:',
                        'Likely a captured Kuiper Belt Object',
                        'Has geysers that spew nitrogen – indicating subsurface activity',
                        'Extremely cold: ~ -235°C',
                        'Very young and smooth surface due to cryovolcanism and resurfacing'
                    ]
                }, {
                    title: 'Proteus (Neptune’s Second Largest Moon)',
                    img: proteusImg,
                    facts: [
                        'Discovered: 1989 by Voyager 2',
                        'Size: ~420 km in diameter',
                        'Orbit: Prograde, close to Neptune (~117,000 km), nearly circular',
                        'Key Facts:',
                        'Very dark surface; reflects only ~10% of sunlight',
                        'One of the largest irregularly shaped moons'
                    ]
                }, {
                    title: 'Nereid (The Eccentric Voyager)',
                    img: nereidImg,
                    facts: [
                        'Discovered: 1949 by Gerard Kuiper',
                        'Size: ~340 km in diameter',
                        'Orbit: Extremely eccentric; varies between ~1.3 million to ~9.6 million km from Neptune',
                        'Key Facts:',
                        'Most eccentric orbit of any known moon',
                        'Possibly affected by Triton’s capture',
                        'Thought to be a captured object'
                    ]
                }, {
                    title: 'Larissa (The Fragmented Survivor)',
                    img: larissaImg,
                    facts: [
                        'Discovered: 1981 (stellar occultation); confirmed by Voyager 2 in 1989',
                        'Size: ~195 km in diameter',
                        'Orbit: Prograde; very close to Neptune (~74,000 km)',
                        'Key Facts:',
                        'Irregular shape and heavily cratered',
                        'Possibly a fragment from a destroyed larger moon',
                        'May not survive long-term gravitational interactions'
                    ]
                }].map((moon, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section
                            key={index}
                            className="mb-20 px-4 md:px-20"
                        >
                            <div className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center justify-center gap-10`}>
                                <div className="text-center">
                                    <img src={moon.img} alt={moon.title} className="w-60 md:w-72 rounded-full mx-auto shadow-xl" />
                                    <p className="mt-4 text-xl font-bold text-white text-center">{moon.title}</p>
                                </div>
                                <div className="max-w-2xl text-left text-white/90 space-y-2">
                                    <ul className="list-disc list-inside">
                                        {moon.facts.map((fact, i) => (
                                            <li key={i}>{fact}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </section>

            {/* SMALLER MOONS TABLE */}
            <section className="w-screen flex justify-center mb-10 z-10 relative font-serif text-base md:text-lg">
                <div className="overflow-x-auto max-w-4xl w-full px-4 md:px-10">
                    <h2 className="text-lg md:text-xl text-yellow-300 font-semibold mb-4 flex items-center">
                        <span className="mr-2">🪐</span> Smaller & Inner Moons
                    </h2>
                    <table className="min-w-full border border-white/20 bg-black/70 text-left mx-auto">
                        <thead className="bg-white/10 text-blue-200">
                            <tr>
                                <th className="py-2 px-4">Moon</th>
                                <th className="py-2 px-4">Diameter</th>
                                <th className="py-2 px-4">Discovery Year</th>
                                <th className="py-2 px-4">Notes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {smallerMoons.map((moon, i) => (
                                <tr key={i} className="border-t border-white/10 text-white">
                                    <td className="py-2 px-4 font-semibold">{moon.name}</td>
                                    <td className="py-2 px-4">{moon.diameter}</td>
                                    <td className="py-2 px-4">{moon.discovery}</td>
                                    <td className="py-2 px-4">{moon.notes}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </BackgroundLayout>
    );
}
