import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

import MarinerImg from '../../assets/mariner10.png';
import MessengerImg from '../../assets/messenger.png';
import BepiColomboImg from '../../assets/bepicolombo.png';
import ParkerImg from '../../assets/parker_probe.png';
import HeliosImg from '../../assets/helios.png';

export default function MercuryMissions() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen text-white font-inknut relative">
            <BackgroundLayout>
                <Navbar />

                <div className="pt-50 px-4 md:px-20 max-w-[1200px] mx-auto pb-32 relative z-20">
                    <button
                        onClick={() => navigate(-1)}
                        className="absolute top-5 -left-24 text-sm bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition"
                    >
                        ← Back to Solar System
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        MERCURY MISSIONS
                    </h1>

                    {/* 🛰️ Early Exploration */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🛰️ Early Exploration (1970s)
                        </h2>
                        <div className="text-center space-y-4">
                            <img src={MarinerImg} alt="Mariner 10" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="font-bold text-lg">🇺🇸 NASA – Mariner 10 (1974–1975)</h3>
                            <ul className="list-disc list-inside text-[17px] leading-relaxed mt-4">
                                <li>First spacecraft to visit Mercury.</li>
                                <li>Completed three successful flybys using Venus gravity assist.</li>
                                <li>Mapped 45% of the surface and studied thin exosphere and magnetic field.</li>
                                <li>First spacecraft to visit two planets (Venus & Mercury).</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🧠 Modern Orbiters */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🧠 Orbital Exploration (2000s–2010s)
                        </h2>
                        <div className="text-center space-y-4">
                            <img src={MessengerImg} alt="MESSENGER" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="font-bold text-lg">🇺🇸 NASA – MESSENGER (2004–2015)</h3>
                            <ul className="list-disc list-inside text-[17px] leading-relaxed mt-4">
                                <li>First spacecraft to orbit Mercury.</li>
                                <li>Mapped the entire surface in high detail.</li>
                                <li>Studied Mercury’s core, geology, exosphere, and magnetosphere.</li>
                                <li>Used six flybys (Earth, Venus, Mercury) to slow down enough to enter orbit.</li>
                                <li>Revealed ice in permanently shadowed craters near poles.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🚀 Current & Upcoming */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🚀 Current & Future Missions (2020s)
                        </h2>
                        <div className="text-center space-y-4">
                            <img src={BepiColomboImg} alt="BepiColombo" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="font-bold text-lg">🇪🇺 🇯🇵 ESA–JAXA – BepiColombo (2018–2025)</h3>
                            <ul className="list-disc list-inside text-[17px] leading-relaxed mt-4">
                                <li>Dual-orbiter mission: MPO (planetary) and Mio (magnetospheric).</li>
                                <li>Launched in 2018; will arrive at Mercury in December 2025.</li>
                                <li>Will provide long-term observations of Mercury’s surface, interior, and magnetic field.</li>
                                <li>Has already completed 3 Mercury flybys as of 2024.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🔭 Related Missions (Non-Dedicated) */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🔭 Related Missions (Non-Dedicated)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-14 text-[17px] leading-relaxed text-center">
                            {/* Parker Solar Probe */}
                            <div className="space-y-2">
                                <img src={ParkerImg} alt="Parker Solar Probe" className="mx-auto w-full max-w-[300px] rounded-md" />
                                <h3 className="font-bold text-lg">🇺🇸 NASA – Parker Solar Probe (2018–Present)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Closest human-made object to the Sun.</li>
                                    <li>Uses multiple Venus flybys near Mercury’s orbit.</li>
                                    <li>Studies solar wind, corona, and Sun’s magnetic field.</li>
                                </ul>
                            </div>

                            {/* Helios Probes */}
                            <div className="space-y-2">
                                <img src={HeliosImg} alt="Helios Probes" className="mx-auto w-full max-w-[300px] rounded-md" />
                                <h3 className="font-bold text-lg">🇩🇪🇺🇸 NASA–DFVLR – Helios 1 & 2 (1974, 1976)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Studied solar wind and space environment in inner solar system.</li>
                                    <li>Entered elliptical orbits between Venus and Mercury.</li>
                                    <li>Still among the fastest spacecraft ever launched.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
