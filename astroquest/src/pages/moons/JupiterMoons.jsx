import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import callistoImg from '../../assets/callisto.png';
import europaImg from '../../assets/europa.png';
import ganymedeImg from '../../assets/ganymede.png';
import jupiterTopImg from '../../assets/half-jupiter.png';
import ioImg from '../../assets/io.png';

export default function JupiterMoonsPage() {
    const navigate = useNavigate();

    const majorMoons = [
        {
            title: 'Io (The Volcanic Moon)',
            img: ioImg,
            facts: [
                'Discovered: 1610 by Galileo Galilei',
                'Diameter: ~3,643 km',
                'Orbit: Closest Galilean moon',
                'Key Facts:',
                'Most geologically active body in the Solar System',
                'Hundreds of active volcanoes',
            ],
        },
        {
            title: 'Europa (The Icy Moon)',
            img: europaImg,
            facts: [
                'Discovered: 1610 by Galileo Galilei',
                'Diameter: ~3,122 km',
                'Orbit: Slightly smaller than Earth’s Moon',
                'Key Facts:',
                'Surface mostly ice, possible subsurface ocean',
                'Potential for extraterrestrial life',
            ],
        },
        {
            title: 'Ganymede (The Giant Moon)',
            img: ganymedeImg,
            facts: [
                'Discovered: 1610 by Galileo Galilei',
                'Diameter: ~5,268 km (largest moon in Solar System)',
                'Orbit: Largest and most massive moon',
                'Key Facts:',
                'Has a magnetic field',
                'Icy crust with rocky core',
            ],
        },
        {
            title: 'Callisto (The Cratered Moon)',
            img: callistoImg,
            facts: [
                'Discovered: 1610 by Galileo Galilei',
                'Diameter: ~4,821 km',
                'Orbit: Furthest Galilean moon',
                'Key Facts:',
                'Heavily cratered surface',
                'Oldest landscape in the Solar System',
            ],
        },
    ];

    const smallerMoons = [
        { name: 'Amalthea', diameter: '~167 km', discovery: '1892', notes: 'Irregular shape, inner moon' },
        { name: 'Himalia', diameter: '~170 km', discovery: '1904', notes: 'Irregular, outer moon' },
        { name: 'Elara', diameter: '~80 km', discovery: '1905', notes: 'Irregular, outer moon' },
        { name: 'Pasiphae', diameter: '~60 km', discovery: '1908', notes: 'Irregular, retrograde orbit' },
    ];

    return (
        <BackgroundLayout>
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="w-screen text-white font-serif pt-8 pb-[198px]">
                <div className="w-full">
                    <button
                        onClick={() => navigate(-1)}
                        className="ml-10 text-white text-sm px-4 py-2 bg-white/10 rounded hover:bg-white hover:text-black transition mb-1"
                    >
                        ← Back to Jupiter
                    </button>

                    {/* Title and Top Image */}
                    <div className="relative w-full mb-24">
                        <img
                            src={jupiterTopImg}
                            alt="Jupiter"
                            className="absolute -top-[50px] right-[-280px] w-[680px] md:w-[780px] lg:w-[880px] h-auto opacity-90 z-0 pointer-events-none"
                        />
                        <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
                            JUPITER MOONS
                        </h1>
                    </div>

                    {/* Overview */}
                    <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
                        <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
                            <span className="mr-2">🔵</span> Overview of Jupiter’s Moons
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Total Moons:</strong> 79+ known</li>
                            <li><strong>Major Moons:</strong> Io, Europa, Ganymede, Callisto (Galilean Moons)</li>
                            <li><strong>Types:</strong> Large Galilean moons and many smaller irregular moons</li>
                        </ul>
                        <p className="mt-6 text-white/80">
                            Jupiter’s moons range from huge Galilean satellites to many tiny irregular moons. The Galilean moons are some of the most interesting due to their size and geological activity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <section className="w-screen text-center font-serif -mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Major Moons of Jupiter</h2>
            </section>

            {/* MAJOR MOONS */}
            <section className="w-screen font-serif text-base md:text-lg">
                {majorMoons.map((moon, index) => {
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
                        <span className="mr-2">🪐</span> Smaller & Irregular Moons
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
