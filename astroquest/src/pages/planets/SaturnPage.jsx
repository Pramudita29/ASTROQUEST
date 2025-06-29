import { useNavigate } from 'react-router-dom';
import saturnImage from '../../assets/dragonfly.png';
import moon from '../../assets/titan.png';
import saturnVideo from '../../assets/videos/saturn.mp4';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function SaturnPage() {
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
                    src={saturnVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-30 right-[-150px] w-[1000px] h-[550px] object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">SATURN</h1>
                    <p className="text-3xl text-gray-300">The Ringed Planet</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">🪐 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Saturn (named after the Roman god of agriculture)</li>
                        <li><strong>Nicknames:</strong> The Ringed Planet</li>
                        <li><strong>Position:</strong> 6th planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~116,460 km</li>
                        <li><strong>Day Length:</strong> ~10.7 hours</li>
                        <li><strong>Year Length:</strong> ~29.5 Earth years</li>
                        <li><strong>Moons:</strong> 146 (including Titan, Enceladus)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-yellow-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Pale gold with prominent rings</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>No solid surface; gaseous outer layers</li>
                                <li>Extensive, bright ring system made of ice and rock</li>
                                <li>Cloud bands, storms, and a hexagonal polar vortex</li>
                            </ul>
                            <li><strong>Visibility:</strong> Easily visible from Earth with the naked eye; rings seen through a telescope</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Hydrogen (96%), helium (3%), with traces of methane and ammonia</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Cloud tops: -178°C (-288°F)</li>
                            </ul>
                            <li><strong>Other:</strong> Strong winds (up to 1,800 km/h), lightning, and massive long-lasting storms</li>
                        </ul>
                    </div>

                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Saturn</h2>
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
                            <button className="bg-yellow-700 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/saturn/moons')}

                            >
                                Explore Moons
                            </button>
                            <p className="text-gray-300 text-base">Saturn has 146 known moons, including Titan and Enceladus.</p>
                        </div>
                        {/* Saturn Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={saturnImage}
                                alt="Saturn Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-yellow-700 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/saturn/mission')}
                            >
                                Saturn Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
