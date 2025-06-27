import { useNavigate } from 'react-router-dom';
import earthImage from '../../assets/icesat.png';
import moon from '../../assets/moon.png';
import earthVideo from '../../assets/videos/earth-bg.mp4';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function EarthPage() {
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
                    src={earthVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-30 right-[-500px] w-[20000px] h-screen object-cover z-0"
                />
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">EARTH</h1>
                    <p className="text-3xl text-gray-300">The Blue Planet</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">🌍 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Earth (from Old English and Germanic words for “ground”)</li>
                        <li><strong>Nicknames:</strong> The Blue Planet, Terra</li>
                        <li><strong>Position:</strong> 3rd planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~12,742 km</li>
                        <li><strong>Day Length:</strong> 24 hours</li>
                        <li><strong>Year Length:</strong> 365.25 days</li>
                        <li><strong>Moons:</strong> 1 (The Moon)</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-blue-300 mb-3">🌊 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Blue, white, green, brown (water, clouds, land)</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>71% covered by water (oceans, lakes, rivers)</li>
                                <li>Continents, mountains, deserts, forests</li>
                                <li>Polar ice caps</li>
                                <li>Active geology (volcanoes, earthquakes, plate tectonics)</li>
                            </ul>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-green-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> 78% nitrogen, 21% oxygen, 1% other gases</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Average: ~15°C (59°F)</li>
                                <li>Extremes: -89°C (-128°F) to 56°C (134°F)</li>
                            </ul>
                            <li>Weather: Dynamic, with clouds, precipitation, storms</li>
                        </ul>
                    </div>
                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Earth</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {/* Explore Moons Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <div className="h-40 flex items-center justify-center">
                                <img
                                    src={moon}
                                    alt="Moon"
                                    className="h-32 object-contain"
                                />
                            </div>
                            <button
                                className="bg-blue-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/earth/moons')}
                            >
                                Explore Moons
                            </button>
                            <p className="text-gray-300 text-base">Earth has one moon, known as "The Moon".</p>
                        </div>

                        {/* Mars Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={earthImage}
                                alt="Earth Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-blue-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/earth/mission')}
                            >
                                Earth Mission
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
