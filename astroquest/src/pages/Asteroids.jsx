import { useNavigate } from "react-router-dom";
import cTypeImg from "../assets/c-type.png";
import mTypeImg from "../assets/m-type.png";
import sTypeImg from "../assets/s-type.png";
import asteroidVideo from "../assets/videos/asteroid-bg.mp4";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";



const Asteroids = () => {
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
                    src={asteroidVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-[0_1px_10px_rgba(255,255,255,0.25)] tracking-wide">
                            Asteroids
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">
                            Shadows of the Early Solar System
                        </p>
                    </div>
                </div>
            </section>

            <BackgroundLayout>
                {/* What Are Asteroids */}
                <section className="pt-30 pb-24 px-6 text-white">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 border-l-4 border-indigo-500 pl-4">
                                What Are Asteroids?
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Asteroids are rocky remnants from the early formation of our solar
                                system about 4.6 billion years ago. Most reside in the asteroid belt
                                between Mars and Jupiter, ranging in size from pebbles to nearly 1000
                                km across.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                                Key Characteristics
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-base list-disc ml-6">
                                <li>Irregular shape & no atmosphere</li>
                                <li>Can have moons or rings</li>
                                <li>Composed of rock, metal, or carbon</li>
                                <li>Some cross Earth’s orbit (Near-Earth Objects)</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Asteroid Classification with Images */}
                <section className="pt-16 pb-24 px-6 text-white bg-gradient-to-b from-black via-gray-900 to-black">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Asteroid Classifications</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Scientists categorize asteroids based on their composition, surface
                            reflectivity, and where they’re found in the solar system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
                        {/* C-type */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={cTypeImg}
                                alt="C-type Asteroid"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-indigo-300 mb-4 text-center">
                                C-type (Carbonaceous)
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                C-type asteroids are the most common, accounting for over 75% of all
                                known asteroids. They are rich in carbon, giving them a very dark
                                appearance.
                                <br />
                                <br />
                                These ancient rocks are some of the oldest objects in the solar system,
                                thought to be nearly unchanged since it formed 4.6 billion years ago.
                                C-types are usually found in the outer regions of the asteroid belt and
                                may contain water-bearing minerals, making them key targets for
                                exploration.
                            </p>
                        </div>

                        {/* S-type */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={sTypeImg}
                                alt="S-type Asteroid"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-green-300 mb-4 text-center">
                                S-type (Silicaceous)
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                S-type asteroids are made up of silicate (rocky) material and metallic
                                nickel-iron. They are brighter than C-types and comprise around 17% of
                                known asteroids.
                                <br />
                                <br />
                                These asteroids are usually found in the inner asteroid belt and have
                                highly reflective surfaces. Their composition provides clues to the
                                crust and mantle materials of early planetary bodies.
                            </p>
                        </div>

                        {/* M-type */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={mTypeImg}
                                alt="M-type Asteroid"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-yellow-300 mb-4 text-center">
                                M-type (Metallic)
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                M-type asteroids are relatively rare and composed mostly of metallic
                                iron and nickel, similar to Earth’s core. They represent about 8% of
                                all asteroids.
                                <br />
                                <br />
                                Scientists believe some M-types may be the exposed cores of larger
                                asteroids or protoplanets that were shattered in past collisions. These
                                metal-rich bodies are highly reflective and are found primarily in the
                                central region of the asteroid belt.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="pt-16 pb-24 px-6 text-white bg-black">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Asteroids By the Numbers</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            A glimpse into the scale and diversity of the asteroid population.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                        {[
                            { label: "Known Asteroids", value: "1,300,000+" },
                            { label: "Diameter of Ceres", value: "940 km" },
                            { label: "Near-Earth Objects", value: "30,000+" },
                            { label: "Trojan Asteroids", value: "10,000+" },
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

export default Asteroids;
