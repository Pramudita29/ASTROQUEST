import { useNavigate } from 'react-router-dom';

import AkatsukiImg from '../../assets/akatsuki.png';
import EnVisionImg from '../../assets/envision.png';
import MagellanImg from '../../assets/magellan.png';
import Mariner2Img from '../../assets/mariner2.png';
import VeneraImg from '../../assets/venera.png';
import VeritasImg from '../../assets/veritas.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function VenusMissions() {
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
                        ← Back to Venus
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        VENUS MISSIONS
                    </h1>

                    {/* 🚀 Early Missions (1960s–1980s) */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🚀 Early Missions (1960s–1980s)
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                            {/* Mariner 2 */}
                            <div className="w-full md:w-1/2 text-center space-y-4">
                                <img src={Mariner2Img} alt="Mariner 2" className="w-full max-w-[460px] mx-auto rounded-md" />
                                <h3 className="text-lg font-bold">🇺🇸 Mariner 2 (1962)</h3>
                                <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                    <li>First successful mission to another planet.</li>
                                    <li>Confirmed high surface temperatures and thick cloud cover.</li>
                                </ul>
                            </div>
                            {/* Venera Series */}
                            <div className="w-full md:w-1/2 text-center space-y-4">
                                <img src={VeneraImg} alt="Venera" className="w-full max-w-[460px] mx-auto rounded-md" />
                                <h3 className="text-lg font-bold">🇷🇺 Venera Series (1961–1985)</h3>
                                <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                    <li>Multiple Soviet missions, many successful landings.</li>
                                    <li>Venera 7: First soft landing on another planet (1970).</li>
                                    <li>Venera 9 & 10: First images from Venus’ surface.</li>
                                    <li>Measured atmospheric pressure, composition, and temperature.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 🛰️ Orbiters & Radar Mapping (1990s) */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🛰️ Radar Mapping & Orbiters (1990s)
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={MagellanImg} alt="Magellan" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🇺🇸 Magellan (1989–1994)</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li>Mapped 98% of Venus’ surface using radar imaging.</li>
                                <li>Studied topography, gravity, and internal structure.</li>
                                <li>Ended with planned atmospheric entry and data collection.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🌐 Recent Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🌐 Recent Missions
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={AkatsukiImg} alt="Akatsuki" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🇯🇵 Akatsuki (2010–Present)</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li>Japan’s first successful Venus orbiter.</li>
                                <li>Studies Venusian weather patterns and atmospheric dynamics.</li>
                                <li>Returned valuable infrared and ultraviolet data.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🔮 Future Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🔮 Future Missions (2020s–2030s)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 text-[17px] leading-relaxed">
                            {/* VERITAS */}
                            <div className="space-y-4 text-center">
                                <img src={VeritasImg} alt="VERITAS" className="w-full max-w-[420px] mx-auto rounded-md" />
                                <h3 className="text-lg font-bold">🇺🇸 VERITAS (Launch: ~2031)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Will map Venus’ surface in high resolution.</li>
                                    <li>Search for tectonic and volcanic activity.</li>
                                    <li>Study internal geologic processes.</li>
                                </ul>
                            </div>
                            {/* EnVision */}
                            <div className="space-y-4 text-center">
                                <img src={EnVisionImg} alt="EnVision" className="w-full max-w-[420px] mx-auto rounded-md" />
                                <h3 className="text-lg font-bold">🇪🇺 EnVision (ESA – Launch: 2031)</h3>
                                <ul className="list-disc list-inside">
                                    <li>ESA orbiter to study Venus’ interior and atmosphere.</li>
                                    <li>Focus on volcanic, tectonic, and atmospheric evolution.</li>
                                    <li>Complementary mission to NASA’s VERITAS.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
