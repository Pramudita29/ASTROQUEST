import { useNavigate } from 'react-router-dom';

import GalileoImg from '../../assets/galileo.png';
import JUICEImg from '../../assets/juice.png';
import JunoImg from '../../assets/juno.png';
import NewHorizonsImg from '../../assets/newhorizons.png';
import PioneerImg from '../../assets/pioneer.png';
import VoyagerImg from '../../assets/voyager.png';

import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function JupiterMissions() {
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
                        ← Back to Jupiter
                    </button>

                    <h1 className="text-center text-5xl font-bold mt-12 mb-8 tracking-wide">
                        JUPITER MISSIONS
                    </h1>

                    {/* 🌀 Early Missions (1970s–1980s) */}
                    <section className="mt-12">
                        <h2 className="text-3xl mb-12 font-bold text-center">
                            🌀 Early Missions (1970s–1980s)
                        </h2>
                        <div className="flex flex-col md:flex-row justify-between items-start mt-12 gap-12">
                            {/* Pioneer Missions */}
                            <div className="w-full md:w-1/2 text-center md:text-left text-[16px]">
                                <img src={PioneerImg} alt="Pioneer Missions" className="w-full max-w-[460px] mx-auto mb-4" />
                                <h3 className="text-lg font-bold mb-2">🇺🇸 United States – Pioneer 10 & 11</h3>
                                <ul className="list-disc list-inside space-y-1 leading-relaxed px-4 md:px-0">
                                    <li><strong>Pioneer 10 (1973):</strong> First spacecraft to fly past Jupiter; collected data on radiation belts and magnetic fields.</li>
                                    <li><strong>Pioneer 11 (1974):</strong> Improved images and magnetic measurements, providing key data for later missions.</li>
                                </ul>
                            </div>

                            {/* Voyager Missions */}
                            <div className="w-full md:w-1/2 text-center md:text-left text-[16px] md:ml-24">
                                <img src={VoyagerImg} alt="Voyager Missions" className="w-full max-w-[460px] mx-auto mb-4" />
                                <h3 className="text-lg font-bold mb-2">🇺🇸 United States – Voyager 1 & 2</h3>
                                <ul className="list-disc list-inside space-y-1 leading-relaxed px-4 md:px-0">
                                    <li><strong>Voyager 1 & 2 (1979):</strong> Conducted flybys that revealed Jupiter's faint ring system and volcanically active moon Io.</li>
                                    <li>Captured high-resolution images of Jupiter’s cloud bands and Great Red Spot.</li>
                                    <li>Detected complex interactions in Jupiter's magnetosphere.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 🚀 Orbiters & Flybys (1990s–2000s) */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-6 font-bold text-center">
                            🚀 Orbiters & Flybys (1990s–2000s)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-start">
                            <div className="text-center space-y-4">
                                <img src={GalileoImg} alt="Galileo Mission" className="w-full max-w-[460px] mx-auto rounded-md" />
                                <h3 className="font-bold text-lg">🇺🇸 NASA – Galileo (1995–2003)</h3>
                                <ul className="list-disc list-inside text-[17px] leading-relaxed">
                                    <li>First spacecraft to orbit Jupiter.</li>
                                    <li>Studied atmosphere, magnetosphere, and major moons.</li>
                                    <li>Dropped a probe into Jupiter’s atmosphere for direct data.</li>
                                </ul>
                            </div>
                            <div className="text-center space-y-4">
                                <img src={NewHorizonsImg} alt="New Horizons Mission" className="w-full max-w-[460px] mx-auto rounded-md" />
                                <h3 className="font-bold text-lg">🇺🇸 NASA – New Horizons (2007)</h3>
                                <ul className="list-disc list-inside text-[17px] leading-relaxed">
                                    <li>Used Jupiter flyby for gravity assist en route to Pluto.</li>
                                    <li>Captured atmospheric dynamics, auroras, and volcanic activity on Io.</li>
                                    <li>Helped test onboard systems ahead of Pluto encounter.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 🛸 Recent & Future Missions (2010–Present) */}
                    <section className="mt-24">
                        <h2 className="text-3xl mb-8 font-bold text-center">
                            🛸 Recent & Future Missions (2010–Present)
                        </h2>
                        <div className="grid md:grid-cols-2 gap-14 text-[17px] leading-relaxed">
                            {/* NASA – Juno */}
                            <div className="space-y-2">
                                <img src={JunoImg} alt="Juno Mission" className="mx-auto w-90" />
                                <h3 className="font-bold text-lg">🇺🇸 United States – Juno (2016–Present)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Polar orbit to study internal structure and atmosphere.</li>
                                    <li>Observed Jupiter's auroras and strong magnetic field.</li>
                                    <li>Provided unprecedented close-up imagery of cloud formations.</li>
                                </ul>
                            </div>

                            {/* ESA – JUICE */}
                            <div className="space-y-2">
                                <img src={JUICEImg} alt="JUICE Mission" className="mx-auto w-90" />
                                <h3 className="font-bold text-lg">🇪🇺 Europe – JUICE (2023–2031)</h3>
                                <ul className="list-disc list-inside">
                                    <li>Focus on icy moons: Ganymede, Callisto, and Europa.</li>
                                    <li>Will orbit Ganymede — first for any moon beyond Earth.</li>
                                    <li>Investigating subsurface oceans and habitability potential.</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </BackgroundLayout>
        </div>
    );
}
