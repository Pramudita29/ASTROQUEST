import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import saturnImg from '../../assets/half-saturn.png';
import iapetusImg from '../../assets/iapetus.png';
import mimasImg from '../../assets/mimas.png';
import rheaImg from '../../assets/rhea.png';
import titanImg from '../../assets/titan.png';

export default function SaturnMoonsPage() {
    const navigate = useNavigate();

    const majorMoons = [
        {
            title: 'Titan (The Largest Moon of Saturn)',
            img: titanImg,
            facts: [
                'Discovered: 1655 by Christiaan Huygens',
                'Diameter: ~5,150 km',
                'Orbit: Thick atmosphere with methane lakes',
                'Key Facts:',
                'Only moon with a dense atmosphere',
                'Surface has rivers and lakes of liquid methane',
            ],
        },
        {
            title: 'Rhea (The Second Largest Moon)',
            img: rheaImg,
            facts: [
                'Discovered: 1672 by Giovanni Cassini',
                'Diameter: ~1,527 km',
                'Orbit: Close to Saturn',
                'Key Facts:',
                'Heavily cratered icy surface',
                'Possible thin atmosphere',
            ],
        },
        {
            title: 'Iapetus (The Two-Toned Moon)',
            img: iapetusImg,
            facts: [
                'Discovered: 1671 by Giovanni Cassini',
                'Diameter: ~1,469 km',
                'Orbit: Unique color dichotomy',
                'Key Facts:',
                'One side is very dark, the other is bright',
                'Surface has large equatorial ridge',
            ],
        },
        {
            title: 'Mimas (The Death Star Moon)',
            img: mimasImg,
            facts: [
                'Discovered: 1789 by William Herschel',
                'Diameter: ~396 km',
                'Orbit: Close to Saturn',
                'Key Facts:',
                'Dominated by the large Herschel Crater',
                'Looks strikingly similar to the Death Star from Star Wars',
            ],
        },
    ];

    const smallerMoons = [
        { name: 'Enceladus', diameter: '~504 km', discovery: '1789', notes: 'Cryovolcanic activity' },
        { name: 'Tethys', diameter: '~1,062 km', discovery: '1684', notes: 'Icy surface' },
        { name: 'Hyperion', diameter: '~270 km', discovery: '1848', notes: 'Irregular shape' },
    ];

    return (
        <BackgroundLayout>
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="w-screen bg-black text-white font-serif pt-8 pb-[180px]">
                <div className="w-full">
                    <button
                        onClick={() => navigate(-1)}
                        className="ml-10 text-white text-sm px-4 py-2 bg-white/10 rounded hover:bg-white hover:text-black transition mb-1"
                    >
                        ← Back to Saturn
                    </button>

                    {/* Title and Image */}
                    <div className="relative w-full mb-24">
                        <img
                            src={saturnImg}
                            alt="Saturn"
                            className="absolute top-[20px] right-[-160px] w-[580px] md:w-[680px] lg:w-[780px] h-auto opacity-90 z-0 pointer-events-none transform rotate-90"
                        />

                        <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
                            SATURN MOONS
                        </h1>
                    </div>

                    {/* Overview */}
                    <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
                        <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
                            <span className="mr-2">🔸</span> Overview of Saturn’s Moons
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Total Moons:</strong> 80+ known</li>
                            <li><strong>Major Moons:</strong> Titan, Rhea, Iapetus, Dione, Mimas</li>
                            <li><strong>Types:</strong> Large icy moons and numerous smaller satellites</li>
                        </ul>
                        <p className="mt-6 text-white/80">
                            Saturn has a large number of moons with diverse characteristics. Titan is the largest and has a dense atmosphere, while others show icy and cratered surfaces.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <section className="w-screen text-center font-serif -mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Major Moons of Saturn</h2>
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
