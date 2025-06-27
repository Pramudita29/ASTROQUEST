import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import charonImg from '../../assets/charon.png';
import plutoImg from '../../assets/half-pluto.png';
import kerberosImg from '../../assets/kerberos.png';
import nixImg from '../../assets/nix.png';

export default function PlutoMoonsPage() {
    const navigate = useNavigate();

    const majorMoons = [
        {
            title: 'Charon (The Giant Companion)',
            img: charonImg,
            facts: [
                'Discovered: 1978 by James Christy',
                'Diameter: ~1,212 km',
                'Orbit: Tidally locked with Pluto',
                'Key Facts:',
                'Largest of Pluto’s moons (over half Pluto’s diameter)',
                'Pluto-Charon system considered a binary dwarf planet system',
                'Surface shows canyons and reddish patches',
            ],
        },
        {
            title: 'Nix (The Mysterious Reflector)',
            img: nixImg,
            facts: [
                'Discovered: 2005 (Hubble Space Telescope)',
                'Diameter: ~49.8 km',
                'Key Facts:',
                'Highly reflective surface',
                'Irregular shape with chaotic rotation',
            ],
        },
        {
            title: 'Kerberos (Double-Lobed Mystery)',
            img: kerberosImg,
            facts: [
                'Discovered: 2011',
                'Diameter: ~19 km',
                'Key Facts:',
                'Double-lobed shape (possibly two bodies fused)',
                'Dark surface unlike Nix or Hydra',
            ],
        },
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
                        ← Back to Pluto
                    </button>

                    {/* Title and Image */}
                    <div className="relative w-full mb-24">
                        <img
                            src={plutoImg}
                            alt="Pluto"
                            className="absolute top-[20px] right-[-225px] w-[680px] md:w-[780px] lg:w-[880px] h-auto opacity-90 z-0 pointer-events-none transform -rotate-90"
                        />

                        <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
                            PLUTO MOONS
                        </h1>
                    </div>

                    {/* Overview */}
                    <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
                        <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
                            <span className="mr-2">🔵</span> Overview of Pluto’s Moons
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Total Moons:</strong> 5 known</li>
                            <li><strong>Major Moon:</strong> Charon</li>
                            <li><strong>Smaller Moons:</strong> Nix, Hydra, Kerberos, Styx</li>
                            <li><strong>System Type:</strong> Pluto-Charon binary system with smaller satellites orbiting both</li>
                        </ul>
                        <p className="mt-6 text-white/80">
                            Pluto may be a dwarf planet, but its moon system is surprisingly complex. Charon is so massive that the Pluto-Charon duo orbit a point outside Pluto itself.
                        </p>
                        <div className="mt-6 italic text-sm text-gray-400">
                            Fun Fact: All five moons are named after mythological figures associated with the underworld.
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <section className="w-screen text-center font-serif -mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Moons of Pluto</h2>
            </section>

            {/* MAJOR MOONS */}
            <section className="w-screen font-serif text-base md:text-lg">
                {majorMoons.map((moon, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <section key={index} className="mb-20 px-4 md:px-20">
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

            {/* SMALLER & INNER MOONS TABLE */}
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
                            {[
                                { name: 'Hydra', diameter: '~51 km', discovery: '2005', notes: 'Bright surface, irregular shape' },
                                { name: 'Styx', diameter: '~16 km', discovery: '2012', notes: 'Smallest of Pluto’s moons, chaotic orbit' }
                            ].map((moon, i) => (
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
