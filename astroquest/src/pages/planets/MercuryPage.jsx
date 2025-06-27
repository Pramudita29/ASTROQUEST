import { useNavigate } from 'react-router-dom';
import messengerImage from '../../assets/messenger_probe.png'; // Adjust path as needed
import mercuryVideo from '../../assets/videos/mercury.mp4'; // Replace with your Mercury video asset
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function MercuryPage() {
    const navigate = useNavigate();

    return (
        <BackgroundLayout>
            <Navbar />

            <div className="relative min-h-screen text-white font-serif px-6 md:px-20 pt-4 overflow-hidden">
                {/* Back Button - Top Left */}
                <button
                    onClick={() => navigate(-1)}
                    className="absolute top-6 left-6 z-50 text-white text-base px-4 py-2 bg-black/50 rounded hover:bg-white hover:text-black transition"
                >
                    ← Back to Solar System
                </button>

                {/* Right-Aligned Background Video */}
                {/* Right-Aligned Background Video */}
                <video
                    src={mercuryVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute -top-10 right-[-250px] w-[1000px] h-[750px] object-cover z-0"
                />


                {/* Title & Subtitle at Top */}
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">MERCURY</h1>
                    <p className="text-3xl text-gray-300">The Swiftest Planet</p>
                </div>

                {/* Basic Characteristics over Video */}
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">🌿 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Mercury (named after the Roman messenger god)</li>
                        <li><strong>Nicknames:</strong> The Swift Planet, The Elusive Planet</li>
                        <li><strong>Position:</strong> Closest planet to the Sun (1st planet)</li>
                        <li><strong>Diameter:</strong> ~4,880 km (about 38% of Earth’s diameter)</li>
                        <li><strong>Day Length:</strong> ~59 Earth days (sidereal day)</li>
                        <li><strong>Year Length:</strong> ~88 Earth days</li>
                        <li><strong>Moons:</strong> None</li>
                    </ul>
                </div>

                {/* Horizontal Divider Line */}
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />

                {/* Bottom Grid: Surface & Atmosphere */}
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    {/* Surface & Appearance */}
                    <div>
                        <h2 className="text-3xl font-bold text-yellow-300 mb-3">🪨 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Greyish-brown, similar to Earth's Moon</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Heavily cratered, with bright "crater rays" and vast impact basins (e.g., Caloris Basin)</li>
                                <li>Giant scarps (cliffs) hundreds of miles long and up to a mile high</li>
                                <li>Large smooth plains and hills</li>
                                <li>No volcanoes or water bodies</li>
                            </ul>
                            <li><strong>Visibility:</strong> Difficult to spot from Earth; best seen near sunrise or sunset</li>
                        </ul>
                    </div>

                    {/* Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-lime-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Extremely thin exosphere, mostly oxygen, sodium, hydrogen, helium, and potassium</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Daytime: up to 430°C (800°F)</li>
                                <li>Nighttime: down to -180°C (-290°F)</li>
                                <li>Extreme temperature swings due to lack of atmosphere</li>
                            </ul>
                            <li><strong>Other:</strong> Weak magnetic field, intense solar wind interaction</li>
                        </ul>
                    </div>
                </div>

                {/* Learn More Section */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Mercury</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">


                        {/* Mercury Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={messengerImage}
                                alt="Mercury Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-yellow-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/mercury/mission')}
                            >
                                Mercury Mission
                            </button>
                        </div>

                        
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
