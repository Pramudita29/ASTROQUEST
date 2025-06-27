import { useNavigate } from 'react-router-dom';
import moon from '../../assets/triton.png';
import neptuneVideo from '../../assets/videos/neptune.mp4';
import neptuneImage from '../../assets/voyager2.png';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function NeptunePage() {
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
                    src={neptuneVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-30 right-[-270px] w-[1200px] h-[645px] object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">NEPTUNE</h1>
                    <p className="text-3xl text-gray-300">The Windy Blue Giant</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">🔵 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Neptune (named after the Roman god of the sea)</li>
                        <li><strong>Nicknames:</strong> The Blue Giant, The Windy Planet</li>
                        <li><strong>Position:</strong> 8th planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~49,244 km</li>
                        <li><strong>Day Length:</strong> ~16.1 hours</li>
                        <li><strong>Year Length:</strong> ~164.8 Earth years</li>
                        <li><strong>Moons:</strong> 14 (including Triton)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Deep blue due to methane in the atmosphere</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>No solid surface; icy and gaseous layers</li>
                                <li>Dark spots (storms), bright clouds, and extremely fast winds</li>
                                <li>Faint rings encircling the planet</li>
                            </ul>
                            <li><strong>Visibility:</strong> Not visible to the naked eye; requires a telescope</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Hydrogen (80%), helium (19%), methane (1%)</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Cloud tops: -214°C (-353°F)</li>
                            </ul>
                            <li><strong>Other:</strong> Strongest winds in the solar system (up to 2,100 km/h), dynamic storms</li>
                        </ul>
                    </div>

                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Neptune</h2>
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
                            <button
                                onClick={() => navigate("/neptune/moons")}
                                className="bg-blue-700 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                            >
                                Explore Moons
                            </button>

                            <p className="text-gray-300 text-base">Neptune has 14 known moons, including Triton.</p>
                        </div>

                        {/* Mercury Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={neptuneImage}
                                alt="Neptune Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-blue-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/neptune/mission')}
                            >
                                Neptune Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
