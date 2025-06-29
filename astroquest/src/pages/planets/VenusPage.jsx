import { useNavigate } from 'react-router-dom';
import venusImage from '../../assets/venus.png';
import venusVideo from '../../assets/videos/venus.mov';
import BackgroundLayout from '../../components/BackgroundLayout';
import Navbar from '../../components/Navbar';

export default function VenusPage() {
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
                    src={venusVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute top-[-28px] right-[-50px] w-[720px] h-screen object-cover z-0"
                />


                <div className="relative z-10 text-center mb-12">
                    <h1 className="text-6xl font-bold mb-2">VENUS</h1>
                    <p className="text-3xl text-gray-300">The Morning/Evening STAR</p>
                </div>
                <div className="relative z-10 md:w-2/3 mt-16 rounded-xl p-8 mb-24">
                    <h2 className="text-3xl font-bold text-yellow-400 mb-4">🪐 Basic Characteristics</h2>
                    <ul className="list-disc list-inside space-y-4 text-xl leading-relaxed">
                        <li><strong>Name:</strong> Venus (named after the Roman goddess of love and beauty)</li>
                        <li><strong>Nicknames:</strong> Earth's Twin, Morning Star, Evening Star</li>
                        <li><strong>Position:</strong> 2nd planet from the Sun</li>
                        <li><strong>Diameter:</strong> ~12,104 km (very close to Earth's diameter)</li>
                        <li><strong>Day Length:</strong> ~243 Earth days (rotates very slowly, longer than its year)</li>
                        <li><strong>Year Length:</strong> ~225 Earth days</li>
                        <li><strong>Moons:</strong> None</li>
                    </ul>
                </div>
                <div className="relative z-50 w-full h-[2px] bg-white opacity-20 -mt-8 mb-10" />
                <div className="relative z-10 grid md:grid-cols-2 gap-12 mb-24">
                    <div>
                        <h2 className="text-3xl font-bold text-yellow-300 mb-3">🟡 Surface & Appearance</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Color:</strong> Pale yellow or creamy white due to thick clouds of sulfuric acid</li>
                            <li><strong>Surface Features:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Maxwell Montes: Tallest mountain (~11 km high)</li>
                                <li>Vast volcanic plains, possibly active volcanoes</li>
                                <li>Few impact craters due to dense atmosphere</li>
                                <li>No water bodies; surface is dry and rocky</li>
                                <li>Very bright in the night sky, often seen before sunrise or after sunset</li>
                            </ul>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-pink-200 mb-3">🧪 Atmosphere & Climate</h2>
                        <ul className="list-disc list-inside space-y-3 text-xl leading-relaxed">
                            <li><strong>Atmosphere:</strong> Extremely thick, ~96.5% carbon dioxide, ~3.5% nitrogen, clouds of sulfuric acid</li>
                            <li><strong>Temperature Range:</strong></li>
                            <ul className="ml-6 list-[circle] space-y-2">
                                <li>Average: ~465°C (869°F)</li>
                                <li>Extremes: Little to no variation; temperatures remain around 465°C day and night</li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="relative z-10 text-center">
                    <h2 className="text-3xl font-bold mb-10">Learn More About Venus</h2>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                        {/* Venus Mission Card */}
                        <div className="border border-white/30 p-6 rounded-md w-72 space-y-4">
                            <img
                                src={venusImage}
                                alt="Venus Mission"
                                className="w-full h-40 object-contain"
                            />
                            <button className="bg-yellow-700 px-6 py-2 rounded-full text-white font-bold w-full hover:scale-105 transition"
                                onClick={() => navigate('/venus/mission')}
                            >
                                Venus Mission
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
}
