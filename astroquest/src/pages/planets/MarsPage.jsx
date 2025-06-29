import { useNavigate } from 'react-router-dom';
import marsImage from '../../assets/perseverance.png';
import marsMoon from '../../assets/phobos.png';
import marsVideo from '../../assets/videos/mars.mp4';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function MarsPage() {
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
                    src={marsVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute -top-10 right-[-220px] w-[1100px] h-[800px] object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">MARS</h1>
                    <p className="text-3xl text-gray-300">The Red Planet</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-red-400 mb-4">🔴 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Mars (named after the Roman god of war)</li>
                        <li><strong>Nicknames:</strong> The Red Planet</li>
                        <li><strong>Position:</strong> 4th planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~6,779 km (about half of Earth's diameter)</li>
                        <li><strong>Day Length:</strong> ~24.6 hours</li>
                        <li><strong>Year Length:</strong> ~687 Earth days</li>
                        <li><strong>Moons:</strong> 2 (Phobos, Deimos)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-red-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Reddish, due to iron oxide (rust) on the surface</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Olympus Mons – largest volcano in the solar system</li>
                                <li>Valles Marineris – massive canyon system</li>
                                <li>Polar ice caps, dust storms, craters, valleys</li>
                            </ul>
                            <li><strong>Visibility:</strong> Often visible from Earth as a bright reddish dot in the night sky</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-orange-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Thin, mostly carbon dioxide (95%), nitrogen (3%), argon (1.6%)</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Average: -63°C (-81°F)</li>
                                <li>Extremes: -143°C (-226°F) to 35°C (95°F)</li>
                            </ul>
                            <li><strong>Other:</strong> Frequent dust storms, sometimes planet-wide; low atmospheric pressure and no liquid water</li>
                        </ul>
                    </div>

                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Mars</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {/* Explore Moons Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={marsMoon}
                                alt="Mars Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button
                                className="bg-red-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/mars/moons')}
                            >                                Explore Moons
                            </button>
                            <p className="text-gray-300 text-base">Mars has two small moons: Phobos and Deimos.</p>
                        </div>
                        {/* Mars Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={marsImage}
                                alt="Mars Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-red-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/mars/mission')}
                            >
                                Mars Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
