import { useNavigate } from 'react-router-dom';
import plutoImage from '../../assets/newhorizons.png';
import moon from '../../assets/nix.png';
import plutoVideo from '../../assets/videos/pluto.mp4';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function PlutoPage() {
    const navigate = useNavigate();

    return (
        <BackgroundLayout>
            <Navbar />
            <div className="relative min-h-screen text-white font-serif px-6 md:px-20 pt-4 overflow-hidden">
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-50 text-white text-base px-4 py-2 bg-black/50 rounded hover:bg-white hover:text-black transition"
                >
                    ← Back to Solar System
                </button>
                <video
                    src={plutoVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-[-150px] right-[-350px] w-[2000px] h-[1000px] object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">PLUTO</h1>
                    <p className="text-3xl text-gray-300">The Dwarf Planet</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-gray-400 mb-4">⚫ Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Pluto (named after the Roman god of the underworld)</li>
                        <li><strong>Nicknames:</strong> The Dwarf Planet</li>
                        <li><strong>Position:</strong> Dwarf planet in the Kuiper Belt</li>
                        <li><strong>Diameter:</strong> ~2,377 km</li>
                        <li><strong>Day Length:</strong> ~6.4 Earth days</li>
                        <li><strong>Year Length:</strong> ~248 Earth years</li>
                        <li><strong>Moons:</strong> 5 (Charon, Styx, Nix, Kerberos, Hydra)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Brownish-white, with dark and bright regions</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Mountains of water ice</li>
                                <li>Plains of nitrogen and methane ice</li>
                                <li>Large heart-shaped region (Tombaugh Regio)</li>
                                <li>Canyons, valleys, and possible cryovolcanoes</li>
                            </ul>
                            <li><strong>Visibility:</strong> Not visible to the naked eye; detected using powerful telescopes</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Thin, mainly nitrogen, with methane and carbon monoxide</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Average: -229°C (-380°F)</li>
                            </ul>
                            <li><strong>Other:</strong> Atmosphere expands when closer to the Sun, and collapses when farther away</li>
                        </ul>
                    </div>

                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Pluto</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {/* Explore Moons Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <div className="h-40 flex items-center justify-center">
                                <span className="text-4xl"></span>
                                <img
                                    src={moon}
                                    alt="Moon"
                                    className="h-32 object-contain"
                                />
                            </div>
                            <button className="bg-gray-600 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/pluto/moons')}

                            >
                                Explore Moons
                            </button>
                            <p className="text-gray-300 text-base">Pluto has five known moons, including Charon.</p>
                        </div>
                        {/* Pluto Mission Card */}



                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={plutoImage}
                                alt="Pluto Mission"
                                className="w-full h-40 object-contain"
                            />


                            <button className="bg-gray-600 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/pluto/mission')}
                            >
                                Pluto Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
