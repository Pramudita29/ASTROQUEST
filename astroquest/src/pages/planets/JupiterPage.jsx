import { useNavigate } from 'react-router-dom';
import jupiterImage from '../../assets/galileo.png';
import moon from '../../assets/ganymede.png';
import jupiterVideo from '../../assets/videos/jupiter.mp4';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function JupiterPage() {
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
                    src={jupiterVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-30 right-[-180px] w-[1020px] h-[680px] object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">JUPITER</h1>
                    <p className="text-3xl text-gray-300">The Gas Giant King</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">🟤 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Jupiter (named after the king of the Roman gods)</li>
                        <li><strong>Nicknames:</strong> The Gas Giant, King of the Planets</li>
                        <li><strong>Position:</strong> 5th planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~139,820 km (largest planet)</li>
                        <li><strong>Day Length:</strong> ~9.9 hours (fastest rotation)</li>
                        <li><strong>Year Length:</strong> ~11.9 Earth years</li>
                        <li><strong>Moons:</strong> 95 (including Io, Europa, Ganymede, Callisto)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-yellow-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Bands of brown, yellow, white, and red</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>No solid surface; gaseous outer layers</li>
                                <li>Great Red Spot – giant storm larger than Earth</li>
                                <li>Colorful cloud bands, storms, and vortices</li>
                            </ul>
                            <li><strong>Visibility:</strong> Very bright; easily seen from Earth with the naked eye</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Hydrogen (~90%), helium (~10%), with traces of methane, ammonia, and water vapor</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Cloud tops: -145°C (-234°F)</li>
                                <li>Core: ~24,000°C (43,000°F)</li>
                            </ul>
                            <li><strong>Other:</strong> Extremely powerful winds, lightning, and persistent storms (like the Great Red Spot)</li>
                        </ul>
                    </div>

                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Jupiter</h2>
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
                            <button className="bg-yellow-600 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/jupiter/moons')}
                            >
                                Explore Moons
                            </button>
                            <p className="text-gray-300 text-base">Jupiter has 95 known moons, including the four Galilean moons.</p>
                        </div>
                        {/* Jupiter Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={jupiterImage}
                                alt="Jupiter Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-yellow-600 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/jupiter/mission')}
                            >
                                Jupiter Mission
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
