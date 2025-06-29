import { useNavigate } from "react-router-dom";
import fireballImg from "../assets/fireball.png"; // replace with your meteor images
import shootingStarImg from "../assets/shooting-star.png";
import meteorVideo from "../assets/videos/meteor-bg.mp4";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

const Meteors = () => {
    const navigate = useNavigate();

    return (
        <div className="text-white font-sans relative overflow-hidden">
            <Navbar />
            <button
                onClick={() => navigate("/space-object")}
                className="absolute top-20 left-6 z-50 text-white text-base px-4 py-2 bg-black/50 rounded hover:bg-white hover:text-black transition"
            >
                ← Back to Space Object
            </button>

            {/* HERO SECTION */}
            <section className="relative w-full h-screen overflow-hidden">
                <video
                    src={meteorVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-[0_1px_10px_rgba(255,255,255,0.25)] tracking-wide">
                            Meteors
                        </h1>
                        <p className="text-xl md:text-2xl text-white-300 mb-8">
                            Shooting Stars and Space Debris Burning Bright
                        </p>
                    </div>
                </div>
            </section>

            <BackgroundLayout>
                {/* What Are Meteors */}
                <section className="pt-30 pb-24 px-6 text-white">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 border-l-4 border-indigo-500 pl-4">
                                What Are Meteors?
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Meteors are the streaks of light we see when small rocks or debris
                                from space enter Earth’s atmosphere and burn up due to friction.
                                These are commonly called "shooting stars" but are actually space
                                rocks lighting up in our atmosphere.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                                Key Characteristics
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-base list-disc ml-6">
                                <li>Small space debris burning in Earth’s atmosphere</li>
                                <li>Can create bright fireballs if large enough</li>
                                <li>Often result from comet or asteroid fragments</li>
                                <li>Occur daily but are more visible during meteor showers</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Meteor Types with Images */}
                <section className="pt-16 pb-24 px-6 text-white bg-gradient-to-b from-black via-gray-900 to-black">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Meteor Types</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Meteors can vary in size, brightness, and origin. Here are common types.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {/* Fireball */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={fireballImg}
                                alt="Fireball Meteor"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-indigo-300 mb-4 text-center">
                                Fireballs
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                Fireballs are exceptionally bright meteors, often brighter than
                                Venus. They can sometimes explode in the atmosphere, producing
                                sonic booms and spectacular light shows.
                            </p>
                        </div>

                        {/* Shooting Star */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={shootingStarImg}
                                alt="Shooting Star Meteor"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-green-300 mb-4 text-center">
                                Shooting Stars
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                The common “shooting star” is a small meteor burning up, visible
                                as a brief streak of light across the night sky, often seen during
                                meteor showers.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="pt-16 pb-24 px-6 text-white bg-black">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Meteors By the Numbers</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Facts highlighting the fascinating world of meteors.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                        {[
                            { label: "Meteors Entering Earth's Atmosphere Daily", value: "Up to 100 tons" },
                            { label: "Visible Meteors Per Hour", value: "5–10 (typical nights)" },
                            { label: "Meteor Showers Annually", value: "30+" },
                            { label: "Largest Recorded Fireball", value: "Chelyabinsk Meteor, 2013" },
                        ].map((item, idx) => (
                            <div
                                key={idx}
                                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:scale-105 transition"
                            >
                                <h4 className="text-3xl font-bold text-indigo-400">{item.value}</h4>
                                <p className="text-gray-300 mt-2">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </BackgroundLayout>
        </div>
    );
};

export default Meteors;
