import { useNavigate } from "react-router-dom";
import longPeriodCometImg from "../assets/long-period.png";
import shortPeriodCometImg from "../assets/short-period.png"; // replace with your comet images
import cometVideo from "../assets/videos/comet-bg.mp4";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

const Comets = () => {
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
                    src={cometVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-20 flex items-center justify-center h-full text-center px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl md:text-8xl font-extrabold mb-6 text-white drop-shadow-[0_1px_10px_rgba(255,255,255,0.25)] tracking-wide">
                            Comets
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 mb-8">
                            Icy Wanderers of the Solar System
                        </p>
                    </div>
                </div>
            </section>

            <BackgroundLayout>
                {/* What Are Comets */}
                <section className="pt-30 pb-24 px-6 text-white">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 border-l-4 border-indigo-500 pl-4">
                                What Are Comets?
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Comets are icy bodies that originate from the outer regions of the solar
                                system. When they approach the Sun, they heat up and release gases, creating
                                glowing comas and spectacular tails that can stretch millions of kilometers.
                                They offer a glimpse into the primordial materials that formed the planets.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                                Key Characteristics
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-base list-disc ml-6">
                                <li>Composed of ice, dust, and rocky material</li>
                                <li>Develop bright comas and tails near the Sun</li>
                                <li>Originate mainly from Kuiper Belt and Oort Cloud</li>
                                <li>Highly elliptical orbits</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Comet Classification with Images */}
                <section className="pt-16 pb-24 px-6 text-white bg-gradient-to-b from-black via-gray-900 to-black">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Comet Classifications</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            Comets are classified based on their orbital periods and origins within the solar system.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                        {/* Short-period Comets */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={shortPeriodCometImg}
                                alt="Short-period Comet"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-indigo-300 mb-4 text-center">
                                Short-Period Comets
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                Short-period comets have orbital periods of less than 200 years, often
                                originating from the Kuiper Belt beyond Neptune. Famous examples include
                                Halley's Comet.
                                <br />
                                <br />
                                These comets tend to have more frequent visits to the inner solar system,
                                allowing astronomers to study their evolution over time.
                            </p>
                        </div>

                        {/* Long-period Comets */}
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl backdrop-blur-md hover:shadow-xl transition flex flex-col items-center">
                            <img
                                src={longPeriodCometImg}
                                alt="Long-period Comet"
                                className="rounded-md mb-4 w-full h-48 object-cover shadow-lg"
                            />
                            <h3 className="text-2xl font-semibold text-green-300 mb-4 text-center">
                                Long-Period Comets
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed text-center">
                                Long-period comets originate from the distant Oort Cloud and have orbits
                                lasting thousands to millions of years. Their visits to the inner solar
                                system are rare and unpredictable.
                                <br />
                                <br />
                                These comets provide clues about the outermost edges of our solar system and
                                the early solar system's conditions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="pt-16 pb-24 px-6 text-white bg-black">
                    <div className="max-w-6xl mx-auto text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold">Comets By the Numbers</h2>
                        <p className="text-lg text-gray-400 mt-4">
                            A glimpse into the scale and diversity of the comet population.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                        {[
                            { label: "Known Comets", value: "4,000+" },
                            { label: "Length of Comet Tails", value: "Millions of km" },
                            { label: "Orbital Period Range", value: "Years to Millions of years" },
                            { label: "Visible from Earth", value: "Several per year" },
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

export default Comets;
