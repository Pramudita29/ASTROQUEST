import { useNavigate } from 'react-router-dom';

import NewHorizonsImg from '../../assets/newhorizons.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function PlutoMissions() {
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
                        ← Back to Pluto
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        PLUTO MISSIONS
                    </h1>

                    {/* 🛰️ Historic Flyby Mission */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🛰️ First & Only Pluto Flyby (2006–2015)
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-12">
                            {/* Left Side: Text */}
                            <div className="w-full md:w-1/2 text-left text-[16px] px-2">
                                <h3 className="text-lg font-bold mb-4">🇺🇸 NASA – New Horizons</h3>
                                <ul className="list-disc list-inside space-y-2 leading-relaxed">
                                    <li><strong>Launched:</strong> 2006 • <strong>Pluto Flyby:</strong> July 14, 2015</li>
                                    <li><strong>Fastest spacecraft launched:</strong> ~58,000 km/h</li>
                                    <li>Captured first high-resolution images of Pluto and its largest moon, Charon.</li>
                                    <li>Discovered icy plains, mountain ranges, and Pluto’s thin nitrogen atmosphere.</li>
                                    <li>Studied Pluto’s five moons: Charon, Styx, Nix, Kerberos, Hydra.</li>
                                    <li>Continued into the Kuiper Belt, visiting Arrokoth (2019).</li>
                                </ul>
                            </div>

                            {/* Right Side: Image */}
                            <div className="w-full md:w-1/2 text-center">
                                <img
                                    src={NewHorizonsImg}
                                    alt="New Horizons"
                                    className="w-full max-w-[460px] mx-auto rounded-md"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 🚀 Proposed or Future Missions */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🚀 Future or Proposed Missions
                        </h2>
                        <ul className="list-disc list-inside text-[17px] leading-relaxed px-6 space-y-3">
                            <li><strong>Pluto Orbiter & Lander (NASA Concept):</strong> Proposed mission to orbit Pluto and study its geology, cryovolcanism, and atmosphere in detail. Still unapproved.</li>
                            <li><strong>New Horizons 2 (Cancelled):</strong> A proposed twin to the original New Horizons, was dropped due to budget issues.</li>
                            <li><strong>Kuiper Belt Tour Missions:</strong> Future missions might revisit Pluto as part of broader Kuiper Belt exploration, but none are confirmed yet.</li>
                        </ul>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
