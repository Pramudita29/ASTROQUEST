import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import arielImg from '../../assets/ariel.png';
import uranusImg from '../../assets/half-uranus.png';
import oberonImg from '../../assets/oberon.png';
import titaniaImg from '../../assets/titania.png';
import umbrielImg from '../../assets/umbriel.png';

export default function UranusMoonsPage() {
    const navigate = useNavigate();

    const majorMoons = [
        {
            title: 'Titania (Largest Moon of Uranus)',
            img: titaniaImg,
            facts: [
                'Discovered: 1787 by William Herschel',
                'Diameter: ~1,578 km',
                'Orbit: Around 436,000 km from Uranus',
                'Key Facts:',
                'Heavily cratered with faults and valleys',
                'Named after a character in Shakespeare\'s *A Midsummer Night’s Dream*',
            ],
        },
        {
            title: 'Oberon (Second Largest)',
            img: oberonImg,
            facts: [
                'Discovered: 1787 by William Herschel',
                'Diameter: ~1,523 km',
                'Orbit: Farthest of Uranus’s major moons',
                'Key Facts:',
                'Dark surface with many impact craters',
                'Also named from Shakespeare’s works',
            ],
        },
        {
            title: 'Umbriel (The Darkest Moon)',
            img: umbrielImg,
            facts: [
                'Discovered: 1851 by William Lassell',
                'Diameter: ~1,169 km',
                'Key Facts:',
                'Very dark surface, reflects little sunlight',
                'Possibly contains water ice and rock',
            ],
        },
        {
            title: 'Ariel (Bright and Active)',
            img: arielImg,
            facts: [
                'Discovered: 1851 by William Lassell',
                'Diameter: ~1,158 km',
                'Key Facts:',
                'One of the brightest Uranian moons',
                'Shows signs of past tectonic activity',
            ],
        },
    ];

    const smallerMoons = [
        { name: 'Puck', diameter: '~162 km', discovery: '1985 (Voyager 2)', notes: 'Small inner moon' },
        { name: 'Portia', diameter: '~140 km', discovery: '1986', notes: 'Fast orbit, close to Uranus' },
        { name: 'Rosalind', diameter: '~72 km', discovery: '1986', notes: 'One of Uranus’s inner moons' },
        { name: 'Belinda', diameter: '~90 km', discovery: '1986', notes: 'Irregularly shaped' },
    ];

    return (
        <BackgroundLayout>
            <Navbar />

            {/* HERO SECTION */}
            <section id="hero" className="w-screen text-white font-serif pt-8 pb-[180px]">
                <div className="w-full">
                    <button
                        onClick={() => navigate(-1)}
                        className="ml-10 text-white text-sm px-4 py-2 bg-white/10 rounded hover:bg-white hover:text-black transition mb-1"
                    >
                        ← Back to Uranus
                    </button>

                    {/* Title and Image */}
                    <div className="relative w-full mb-24">
                        <img
                            src={uranusImg}
                            alt="Uranus"
                            className="absolute top-[-80px] right-[-359px] w-[980px] md:w-[1080px] lg:w-[1180px] h-auto opacity-90 z-0 pointer-events-none"
                        />
                        <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
                            URANUS MOONS
                        </h1>
                    </div>

                    {/* Overview */}
                    <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
                        <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
                            <span className="mr-2">🔵</span> Overview of Uranus’s Moons
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            <li><strong>Total Moons:</strong> 27 known</li>
                            <li><strong>Major Moons:</strong> Titania, Oberon, Umbriel, Ariel, Miranda</li>
                            <li><strong>Types:</strong> Mostly icy moons with dark or patchy surfaces</li>
                        </ul>
                        <p className="mt-6 text-white/80">
                            Uranus’s moons are named after characters from Shakespeare and Alexander Pope. They show a mix of geological activity, mysterious surface features, and dark coloration.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <section className="w-screen text-center font-serif -mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Major Moons of Uranus</h2>
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
