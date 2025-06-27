import { useNavigate } from 'react-router-dom';

import CassiniImg from '../../assets/cassini.png';
import DragonflyImg from '../../assets/dragonfly.png';
import PioneerImg from '../../assets/pioneer.png';
import VoyagerImg from '../../assets/voyager.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function SaturnMissions() {
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
                        ← Back to Saturn
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        SATURN MISSIONS
                    </h1>

                    {/* 🌌 Early Flybys */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🌌 Early Flybys (1970s–1980s)
                        </h2>
                        <div className="flex flex-col md:flex-row justify-center items-start gap-12">
                            <div className="w-full md:w-1/2 text-center space-y-4">
                                <img src={PioneerImg} alt="Pioneer" className="w-full max-w-[460px] mx-auto rounded-md" />
                                <h3 className="text-lg font-bold">🇺🇸 Pioneer 11 (1979)</h3>
                                <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                    <li>First spacecraft to fly by Saturn.</li>
                                    <li>Discovered new Saturnian moons and magnetic field.</li>
                                    <li>Captured first close-up images of Saturn and rings.</li>
                                </ul>
                            </div>

                            <div className="w-full md:w-1/2 text-center space-y-4">
                                <img src={VoyagerImg} alt="Voyager" className="w-full max-w-[460px] mx-auto rounded-md" />
                                <h3 className="text-lg font-bold">🇺🇸 Voyager 1 & 2 (1980–1981)</h3>
                                <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                    <li>High-resolution images of Saturn, rings, and moons.</li>
                                    <li>Discovered Titan’s thick atmosphere and icy moons.</li>
                                    <li>Voyager 2 revealed detailed ring structure and outer moons.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 🛰️ Cassini-Huygens Orbiter */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🛰️ Cassini-Huygens Orbiter (1997–2017)
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={CassiniImg} alt="Cassini-Huygens" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🇺🇸🇪🇺 Cassini-Huygens</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li>Orbited Saturn for 13 years (2004–2017).</li>
                                <li>Studied atmosphere, rings, magnetosphere, and over 60 moons.</li>
                                <li>Discovered plumes on Enceladus and methane lakes on Titan.</li>
                                <li>Huygens probe landed on Titan — first outer solar system landing.</li>
                                <li>Ended with plunge into Saturn's atmosphere to protect moons.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🚀 Future Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🚀 Future Missions
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={DragonflyImg} alt="Dragonfly" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🇺🇸 NASA Dragonfly (Launch: 2027, Arrival: 2034)</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li>Rotorcraft mission to fly across Titan’s surface.</li>
                                <li>Will explore prebiotic chemistry and search for signs of life.</li>
                                <li>Focus on organic molecules and habitability on icy moons.</li>
                                <li>First multi-site exploration with an aerial drone on another world.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
