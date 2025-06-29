import { useNavigate } from 'react-router-dom';

import HeliosImg from '../../assets/helios.png';
import ParkerSolarProbeImg from '../../assets/parker_probe.png';
import SolarOrbiterImg from '../../assets/solar_orbiter.png';
import UlyssesImg from '../../assets/ulysses.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function SunMissions() {
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
                        SUN MISSIONS
                    </h1>

                    {/* ☀️ Early Solar Observations */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            ☀️ Early Solar Observations (1970s–1990s)
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-12">
                            {/* Helios Missions */}
                            <div className="w-full md:w-1/2 text-center md:text-left text-[16px]">
                                <img src={HeliosImg} alt="Helios Missions" className="w-full max-w-[460px] mx-auto mb-4" />
                                <h3 className="text-lg font-bold mb-2">🇩🇪 Germany & 🇺🇸 USA – Helios 1 & 2</h3>
                                <ul className="list-disc list-inside space-y-1 leading-relaxed px-4 md:px-0">
                                    <li>Launched in 1974 & 1976 to study solar wind and fields.</li>
                                    <li>Closest approach to Sun at the time (~0.3 AU).</li>
                                    <li>Studied solar plasma, magnetic fields, and cosmic rays.</li>
                                </ul>
                            </div>

                            {/* Ulysses Mission */}
                            <div className="w-full md:w-1/2 text-center md:text-left text-[16px] md:ml-24">
                                <img src={UlyssesImg} alt="Ulysses Mission" className="w-full max-w-[460px] mx-auto mb-4" />
                                <h3 className="text-lg font-bold mb-2">🇪🇺 ESA/🇺🇸 NASA Ulysses (1990)</h3>
                                <ul className="list-disc list-inside space-y-1 leading-relaxed px-4 md:px-0">
                                    <li>Studied solar wind from high solar latitudes.</li>
                                    <li>Orbited over Sun's poles using Jupiter gravity assist.</li>
                                    <li>Provided new views of heliosphere structure.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 🚀 Recent Solar Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-6 font-bold text-center">
                            🚀 Modern Solar Missions (2010s–Present)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-14 text-[17px] leading-relaxed">
                            {/* Parker Solar Probe */}
                            <div className="space-y-2">
                                <img src={ParkerSolarProbeImg} alt="Parker Solar Probe" className="mx-auto w-90" />
                                <h3 className="font-bold text-lg">🇺🇸 United States – NASA Parker Solar Probe (2018)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Closest spacecraft to the Sun ever (~6 million km).</li>
                                    <li>Directly samples solar atmosphere (corona).</li>
                                    <li>Measures magnetic fields, plasma, particles, waves.</li>
                                    <li>Unlocks mysteries behind solar wind acceleration.</li>
                                </ul>
                            </div>

                            {/* Solar Orbiter */}
                            <div className="space-y-2">
                                <img src={SolarOrbiterImg} alt="Solar Orbiter" className="mx-auto w-86" />
                                <h3 className="font-bold text-lg">🇪🇺 ESA Solar Orbiter (2020)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Studies Sun's polar regions and heliosphere.</li>
                                    <li>Provides high-resolution imagery and magnetometer data.</li>
                                    <li>Examines solar eruptions and solar cycle activity.</li>
                                    <li>Works alongside Parker Probe for complementary data.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
