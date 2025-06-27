import { useNavigate } from 'react-router-dom';

import TridentImg from '../../assets/trident.png'; // hypothetical placeholder
import Voyager2Img from '../../assets/voyager2.png';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function NeptuneMissions() {
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
                        ← Back to Neptune
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        NEPTUNE MISSIONS
                    </h1>

                    {/* 🪐 First and Only Flyby */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🪐 Historic Flyby (1989)
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={Voyager2Img} alt="Voyager 2" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🇺🇸 Voyager 2 (NASA)</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li><strong>Launched:</strong> 1977 | <strong>Neptune Flyby:</strong> 1989</li>
                                <li>First and only spacecraft to visit Neptune directly.</li>
                                <li>Discovered 6 new moons and confirmed rings around Neptune.</li>
                                <li>Observed massive storms including the Great Dark Spot.</li>
                                <li>Captured the first close-up images of Neptune and Triton.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🛰️ Proposed Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-10 font-bold text-center">
                            🛰️ Proposed & Future Missions (2020s–2030s)
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={TridentImg} alt="Trident Mission" className="w-full max-w-[420px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🛰️ Trident Mission (NASA – Proposed)</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li><strong>Target:</strong> Neptune’s moon Triton</li>
                                <li>Would conduct a flyby to study Triton's potential subsurface ocean.</li>
                                <li>Part of NASA's Discovery Program finalists (2020); not yet selected.</li>
                                <li>Would map surface, analyze thin atmosphere, and search for plumes.</li>
                            </ul>
                        </div>
                    </section>

                    {/* ❄️ Conceptual Future Orbiters */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-10 font-bold text-center">
                            ❄️ Long-Term Concepts (2030s–2040s)
                        </h2>
                        <div className="text-[17px] leading-relaxed space-y-4 px-4 text-center max-w-[900px] mx-auto">
                            <p><strong>NASA Ice Giant Missions (Concept Studies):</strong></p>
                            <ul className="list-disc list-inside text-left space-y-2">
                                <li><strong>Neptune Orbiter + Probe:</strong> Proposed to study Neptune’s deep atmosphere, rings, and magnetic field.</li>
                                <li><strong>Would launch in the 2030s–2040s</strong> using gravity assists and long-duration cruise phase (~12 years).</li>
                                <li>Still in early concept stage, awaiting funding and approval.</li>
                            </ul>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
