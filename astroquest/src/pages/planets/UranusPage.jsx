import { useNavigate } from 'react-router-dom';
import moon from '../../assets/oberon.png';
import uranusVideo from '../../assets/videos/uranus.mp4';
import uranusImage from '../../assets/voyager2.png';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function UranusPage() {
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
                    src={uranusVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-30 right-[-280px] w-[1200px] h-[650px] object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">URANUS</h1>
                    <p className="text-3xl text-gray-300">The Sideways Planet</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-cyan-400 mb-4">🔵 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Uranus (named after the Greek god of the sky)</li>
                        <li><strong>Nicknames:</strong> The Ice Giant, The Sideways Planet</li>
                        <li><strong>Position:</strong> 7th planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~50,724 km</li>
                        <li><strong>Day Length:</strong> ~17.2 hours</li>
                        <li><strong>Year Length:</strong> ~84 Earth years</li>
                        <li><strong>Moons:</strong> 27 (including Titania, Oberon, Miranda)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-cyan-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Pale blue-green due to methane in the atmosphere</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>No solid surface; icy and gaseous layers</li>
                                <li>Faint rings and mostly featureless appearance</li>
                                <li>Extreme axial tilt – rotates on its side</li>
                            </ul>
                            <li><strong>Visibility:</strong> Barely visible to the naked eye; best seen through a telescope</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-blue-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Hydrogen (83%), helium (15%), methane (2%)</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Cloud tops: -224°C (-371°F)</li>
                            </ul>
                            <li><strong>Other:</strong> Coldest atmosphere in the solar system, with minimal storm activity</li>
                        </ul>
                    </div>

                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Uranus</h2>
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
                            <button className="bg-cyan-600 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/uranus/moons')}

                            >
                                Explore Moons
                            </button>
                            <p className="text-gray-300 text-base">Uranus has 27 known moons, including Titania and Oberon.</p>
                        </div>
                        {/* Sun Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={uranusImage}
                                alt="Uranus Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-cyan-600 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/uranus/mission')}
                            >
                                Uranus Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
