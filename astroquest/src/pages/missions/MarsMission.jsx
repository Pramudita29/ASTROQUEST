import { useNavigate } from 'react-router-dom';

import Hope from '../../assets/hope.png';
import Mangalyaan from '../../assets/mangalyaan.png';
import MarinerImg from '../../assets/mariner.png';
import MixImg from '../../assets/mixed.png';
import Perseverance from '../../assets/perseverance.png';
import Tianwen from '../../assets/tianwen.png';
import USSRImg from '../../assets/ussr.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function MarsMissions() {
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
                        ← Back to Mars
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        MARS MISSIONS
                    </h1>

                    {/* 🌕 Early Mars Missions */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🌕 Early Mars Missions (1960s–1980s)
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-12">
                            {/* USA – Mariner Missions */}
                            <div className="w-full md:w-1/2 text-center md:text-left text-[16px]">
                                <img src={MarinerImg} alt="Mariner Missions" className="w-full max-w-[460px] mx-auto mb-4" />
                                <h3 className="text-lg font-bold mb-2">🇺🇸 United States – NASA Mariner Missions</h3>
                                <ul className="list-disc list-inside space-y-1 leading-relaxed px-4 md:px-0">
                                    <li><strong>Mariner 4 (1964):</strong> First successful Mars flyby; first close-up images.</li>
                                    <li><strong>Mariner 6 & 7 (1969):</strong> Took detailed atmospheric/surface readings.</li>
                                    <li><strong>Mariner 9 (1971):</strong> First spacecraft to orbit another planet.</li>
                                </ul>
                            </div>

                            {/* USSR */}
                            <div className="w-full md:w-1/2 text-center md:text-left text-[16px] md:ml-24">
                                <img src={USSRImg} alt="USSR Missions" className="w-full max-w-[460px] mx-auto mb-4" />
                                <h3 className="text-lg font-bold mb-2">🇷🇺 Soviet Union (USSR) Missions</h3>
                                <ul className="list-disc list-inside space-y-1 leading-relaxed px-4 md:px-0">
                                    <li><strong>Mars 2 (1971):</strong> First to reach Mars’ surface (crashed).</li>
                                    <li><strong>Mars 3 (1971):</strong> First soft landing; lost contact after 14.5s.</li>
                                    <li><strong>Mars 5–7 (1973):</strong> Partial success and limited data return.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 🚀 Orbiters, Landers & Rovers */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-6 font-bold text-center">
                            🚀 Orbiters, Landers & Rovers (1990s–2010s)
                        </h2>
                        <div className="flex justify-center">
                            <img src={MixImg} alt="Mixed Mars Missions" className="w-full max-w-[1000px] h-auto object-contain" />
                        </div>
                        <ul className="mt-6 text-[17px] leading-relaxed list-disc list-inside px-6 space-y-3">
                            <li><strong>Mars Pathfinder (1997):</strong> Delivered Sojourner, the first Mars rover.</li>
                            <li><strong>Mars Odyssey (2001):</strong> Detected hydrogen; suggested water ice.</li>
                            <li><strong>Mars Express (2003):</strong> ESA’s orbiter still operational.</li>
                            <li><strong>Spirit & Opportunity (2004):</strong> Opportunity lasted nearly 15 years.</li>
                            <li><strong>Mars Reconnaissance Orbiter (2006):</strong> High-res images, still active.</li>
                            <li><strong>Phoenix Lander (2008):</strong> Found subsurface water ice.</li>
                            <li><strong>Curiosity Rover (2012):</strong> Still exploring Gale Crater.</li>
                        </ul>
                    </section>

                    {/* 🛰️ Recent & Current Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🛰️ Recent & Current Missions (2020–Present)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-14 text-[17px] leading-relaxed">
                            {/* NASA – Perseverance */}
                            <div className="space-y-2">
                                <img src={Perseverance} alt="Perseverance" className="mx-auto w-90" />
                                <h3 className="font-bold text-lg">🇺🇸 United States – NASA Perseverance (2020)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Landed in Jezero Crater (2021).</li>
                                    <li>Searching for past life evidence.</li>
                                    <li>MOXIE testing oxygen production.</li>
                                    <li>Ingenuity helicopter powered flights.</li>
                                    <li>Collecting rock samples for future return.</li>
                                </ul>
                            </div>

                            {/* UAE – Hope Orbiter */}
                            <div className="space-y-2">
                                <img src={Hope} alt="Hope Orbiter" className="mx-auto w-86" />
                                <h3 className="font-bold text-lg">🇦🇪 United Arab Emirates – Hope Orbiter (2020)</h3>
                                <ul className="list-disc list-inside">
                                    <li>First Arab interplanetary mission.</li>
                                    <li>Studying Mars' weather and climate.</li>
                                    <li>Provides open access to Mars data.</li>
                                </ul>
                            </div>

                            {/* India – Mangalyaan */}
                            <div className="space-y-2">
                                <img src={Mangalyaan} alt="Mars Orbiter Mission" className="mx-auto w-90" />
                                <h3 className="font-bold text-lg">🇮🇳 India – ISRO Mangalyaan (2013)</h3>
                                <ul className="list-disc list-inside">
                                    <li>India’s first interplanetary mission.</li>
                                    <li>Launched on ~$74M budget.</li>
                                    <li>Studied Martian surface and exosphere.</li>
                                    <li>Operated successfully till 2022.</li>
                                </ul>
                            </div>

                            {/* China – Tianwen-1 */}
                            <div className="space-y-2">
                                <img src={Tianwen} alt="Tianwen-1" className="mx-auto w-90" />
                                <h3 className="font-bold text-lg">🇨🇳 China – CNSA Tianwen-1 (2020)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Orbiter, lander & Zhurong rover in one mission.</li>
                                    <li>First Chinese Mars landing success.</li>
                                    <li>Zhurong explored for 1 year.</li>
                                    <li>Conducted geological and radar studies.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
