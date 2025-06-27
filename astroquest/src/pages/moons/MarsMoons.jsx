import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import deimosImg from '../../assets/deimos.png';
import marsImg from '../../assets/half-deimos.png';
import phobosImg from '../../assets/phobos.png';

export default function MarsMoonsPage() {
    const navigate = useNavigate();

    const majorMoons = [
        {
            title: 'Phobos 🌑 (The Larger Moon)',
            img: phobosImg,
            facts: [
                'Discovered: 1877 by Asaph Hall',
                'Diameter: ~22.4 km',
                'Orbit: Very close to Mars, orbital period ~7.7 hours',
                'Key Facts:',
                'Irregular shape',
                'Surface covered with grooves and craters',
            ],
        },
        {
            title: 'Deimos 🛰️ (The Smaller Moon)',
            img: deimosImg,
            facts: [
                'Discovered: 1877 by Asaph Hall',
                'Diameter: ~12.4 km',
                'Orbit: Further away than Phobos, orbital period ~30.3 hours',
                'Key Facts:',
                'Smaller and smoother than Phobos',
                'Likely a captured asteroid',
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
                        ← Back to Mars
                    </button>

                    {/* Title and Image */}
                    <div className="relative w-full mb-24">
                        <img
                            src={marsImg}
                            alt="Mars"
                            className="absolute -top-[70px] -right-[15%] w-[460px] md:w-[580px] lg:w-[660px] h-auto opacity-90 z-0 pointer-events-none transform rotate-90"
                        />

                        <h1 className="text-4xl md:text-5xl text-center font-bold z-10 relative tracking-wide">
                            MARS MOONS
                        </h1>
                    </div>

                    {/* Overview */}
                    <div className="mb-20 z-10 relative max-w-4xl mx-auto md:ml-24 px-6 md:px-10 text-left text-base md:text-lg">
                        <h2 className="text-blue-300 font-semibold mb-4 flex items-center text-lg md:text-xl">
                            <span className="mr-2">🔴</span> Overview of Mars’s Moons
                        </h2>
                        <ul className="list-disc list-inside space-y-1 max-w-xl">
                            <li>Mars has two natural satellites: Phobos and Deimos.</li>
                            <li>They are small, irregularly shaped, and likely captured asteroids.</li>
                            <li>Both moons orbit very close to Mars.</li>
                        </ul>
                        <p className="mt-6 text-white/80 max-w-xl">
                            Despite their size, Phobos and Deimos provide valuable insights into the history and evolution of Mars. Their composition and orbit patterns help scientists understand capture mechanics and surface features.
                        </p>
                        <div className="mt-6 italic text-sm text-gray-400 max-w-xl">
                            Fun Fact: Phobos is slowly spiraling inward and may crash into Mars or break apart into a ring in 30–50 million years!
                        </div>
                    </div>
                </div>
            </section>

            {/* Section Title */}
            <section className="w-screen text-center font-serif -mt-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">Major Moons of Mars</h2>
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
        </BackgroundLayout>
    );
}
