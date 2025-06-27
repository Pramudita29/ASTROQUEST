import { useNavigate } from 'react-router-dom';

import UranusOrbiterImg from '../../assets/uranus-orbiter.png'; // Placeholder for proposed missions
import Voyager2Img from '../../assets/voyager2.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function UranusMissions() {
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
                        ← Back to Uranus
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        URANUS MISSIONS
                    </h1>

                    {/* 👩‍🚀 Historic Flyby */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🚀 Historic Flyby (1986)
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={Voyager2Img} alt="Voyager 2" className="w-full max-w-[460px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🇺🇸 Voyager 2 (NASA)</h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li><strong>Launched:</strong> 1977 | <strong>Uranus Flyby:</strong> 1986</li>
                                <li>Only spacecraft to visit Uranus directly.</li>
                                <li>Discovered 10 new moons, 2 new rings, and Uranus' tilted magnetic field.</li>
                                <li>Captured the first close-up images of Uranus and its moons like Miranda and Ariel.</li>
                                <li>Studied Uranus’ atmosphere and found it to be mostly hydrogen and helium.</li>
                            </ul>
                        </div>
                    </section>

                    {/* 🚀 Proposed Future Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-10 font-bold text-center">
                            🌊 Proposed & Future Missions (2030s+)
                        </h2>
                        <div className="text-center space-y-6 max-w-[800px] mx-auto">
                            <img src={UranusOrbiterImg} alt="Uranus Orbiter" className="w-full max-w-[420px] mx-auto rounded-md" />
                            <h3 className="text-lg font-bold">🌌 Uranus Orbiter and Probe (NASA Flagship Concept)
                            </h3>
                            <ul className="list-disc list-inside text-[17px] space-y-2 leading-relaxed text-left">
                                <li>Recommended by the 2023 Planetary Science Decadal Survey as a top priority.</li>
                                <li>Would enter orbit around Uranus and deploy a probe into its atmosphere.</li>
                                <li>Goals include studying internal structure, weather, magnetic field, and moons.</li>
                                <li>Targeted launch window: early 2030s; would arrive late 2040s.</li>
                                <li>Mission would revolutionize our understanding of ice giants.</li>
                            </ul>
                        </div>
                    </section>

                </div>
            </BackgroundLayout>
        </div>
    );
}
