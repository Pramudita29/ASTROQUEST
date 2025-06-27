import { useNavigate } from "react-router-dom";
import asteroidImg from "../assets/asteroid.png";
import cometImg from "../assets/comet.png";
import meteorImg from "../assets/meteor.png";
import spaceBg from "../assets/videos/space-bg.mp4";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

const SpaceObjects = () => {
    const navigate = useNavigate();

    const objects = [
        {
            name: "COMETS",
            image: cometImg,
            description: "Icy objects that form glowing tails near the Sun.",
            path: "/space-object/comets",
        },
        {
            name: "ASTEROIDS",
            image: asteroidImg,
            description: "Rocky bodies in the asteroid belt between Mars & Jupiter.",
            path: "/space-object/asteroids",
        },
        {
            name: "METEORS",
            image: meteorImg,
            description: "Streaks of light when space rocks burn in Earth's atmosphere.",
            path: "/space-object/meteors",
        },
    ];

    return (
        <div className="text-white font-serif relative overflow-hidden">
            <Navbar />
            {/* HERO SECTION with video + title + cards */}
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center px-6">
                <video
                    src={spaceBg}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                />
                <div className="relative z-10 w-full">

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">
                        SPACE OBJECTS
                    </h1>

                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
                        Space objects are smaller bodies found in our solar system. <br />
                        Comets are icy and glow near the Sun. Asteroids are rocky bodies in the belt. <br />
                        Meteors are streaks of light that burn in Earth’s atmosphere.
                    </p>

                    {/* Cards inside hero */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {objects.map((item) => (
                            <div
                                key={item.name}
                                className="bg-black/30 rounded-xl border border-white/20 backdrop-blur-md hover:scale-105 transition-transform duration-300 p-4 text-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-40 h-40 object-cover rounded-md mb-4 mx-auto"
                                />
                                <p className="text-sm text-gray-300 mb-3 px-2">
                                    {item.description}
                                </p>
                                <button
                                    onClick={() => navigate(item.path)}
                                    className="px-6 py-2 bg-[#a08c95] hover:bg-[#cbbac3] text-white font-semibold rounded-full tracking-wide"
                                >
                                    {item.name}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Section */}
            <BackgroundLayout>
                <section className="pt-30 pb-24 px-6 text-white">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 border-l-4 border-indigo-500 pl-4">
                                Comets vs Asteroids vs Meteors
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                Although they may seem similar, comets, asteroids, and meteors are very different in how they form, where they exist, and how they appear from Earth.
                                <br /><br />
                                <strong>Comets</strong> are icy travelers from the outer edges of the solar system. When they approach the Sun, the heat causes their icy surfaces to vaporize, creating a glowing coma and a long tail that always points away from the Sun.
                                <br /><br />
                                <strong>Asteroids</strong> are rocky or metallic objects, mainly found in the asteroid belt between Mars and Jupiter. They do not have tails and come in various sizes and shapes.
                                <br /><br />
                                <strong>Meteors</strong> are space particles that enter Earth’s atmosphere. The friction causes them to burn up, resulting in a flash of light — what we call a shooting star. If they reach the ground, they're called meteorites.
                            </p>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-semibold mb-4 text-indigo-400">
                                Key Differences
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-base list-disc ml-6">
                                <li><strong>Comets:</strong> Ice + dust, glowing tails, outer solar system</li>
                                <li><strong>Asteroids:</strong> Rocky/metallic, no tails, mostly asteroid belt</li>
                                <li><strong>Meteors:</strong> Light from space debris burning in atmosphere</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </BackgroundLayout>
        </div>
    );
};

export default SpaceObjects;
