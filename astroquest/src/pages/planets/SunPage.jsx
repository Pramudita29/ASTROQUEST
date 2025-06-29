import { useNavigate } from 'react-router-dom';
import parkerImage from '../../assets/parker_probe.png'; // adjust path as needed
import sunVideo from '../../assets/videos/sun.mp4';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';


export default function SunPage() {
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

                {/* 🔆 Right-Aligned Background Video */}
                <video
                    src={sunVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-30 right-[-150px] w-[1000px] h-[550px] object-cover z-0"
                />



                {/* Back Button
                <button
                    onClick={() => navigate(-1)}
                    className="text-white text-sm mt-2 mb-6 hover:underline relative z-10"
                >
                    ← Back to Solar System
                </button> */}

                {/* Title & Subtitle at Top */}
                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">SUN</h1>
                    <p className="text-3xl text-gray-300">The HEART of the Solar System</p>
                </div>

                {/* Basic Characteristics over Video */}
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-green-400 mb-4">🌿 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Sun (also known as Sol, from Latin)</li>
                        <li><strong>Nicknames:</strong> The Yellow Dwarf, The Heart of the Solar System, Our Star</li>
                        <li><strong>Position:</strong> Center of the solar system</li>
                        <li><strong>Diameter:</strong> ~1.39 million km (about 109 times Earth’s diameter)</li>
                        <li><strong>Day Length:</strong> ~25 Earth days at the equator, ~35 days at the poles (rotates differentially)</li>
                        <li><strong>Year Length:</strong> N/A — the Sun doesn’t orbit the Sun!</li>
                    </ul>
                </div>

                {/* Horizontal Divider Line */}
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />


                {/* Bottom Grid: Surface & Atmosphere */}
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    {/* 🔴 Surface & Appearance */}
                    <div>
                        <h2 className="text-3xl font-bold text-red-400 mb-3">🔴 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Appears yellow-white from Earth; actually white in space</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li><strong>Photosphere:</strong> The visible "surface" of the Sun</li>
                                <li><strong>Sunspots:</strong> Cooler, dark patches caused by magnetic activity</li>
                                <li><strong>Solar Flares:</strong> Sudden, powerful eruptions of energy</li>
                                <li><strong>Prominences:</strong> Loops of glowing gas</li>
                                <li><strong>Corona:</strong> The outer atmosphere, visible during solar eclipses</li>
                            </ul>
                        </ul>
                    </div>


                    {/* 🧪 Atmosphere & Climate */}
                    <div>
                        <h2 className="text-3xl font-bold text-lime-300 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Made of ionized gases (plasma), mainly hydrogen (~74%) and helium (~24%)</li>
                            <li><strong>Temperature Range:</strong></li>
                            <li className="ml-6 list-[circle]"><strong>Photosphere (surface):</strong> ~5,500°C (9,932°F)</li>
                            <li className="ml-6 list-[circle]"><strong>Core:</strong> ~15 million °C (27 million °F)</li>
                            <li className="ml-6 list-[circle]"><strong>Corona:</strong> ~1 to 3 million °C (1.8 to 5.4 million °F)</li>
                        </ul>
                    </div>
                </div>

                {/* 📚 Learn More Section */}
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Sun</h2>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {/* Sun Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={parkerImage}
                                alt="Sun Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-orange-500 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/sun/mission')}
                            >
                                Sun Mission
                            </button>
                        </div>


                        
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
