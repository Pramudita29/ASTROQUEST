import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import starsHero from "../assets/stars_hero.png";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";
import constellations from "../components/constellations"; // Adjust path if needed

const Constellations = () => {
    const navigate = useNavigate();
    const [selectedHemisphere, setSelectedHemisphere] = useState("northern");
    const [toast, setToast] = useState(null);
    const [loadingFavs, setLoadingFavs] = useState({}); // Track loading per item

    const filtered = constellations.filter(
        (c) => c.hemisphere === selectedHemisphere || c.hemisphere === "both"
    );

    // Add to favorites handler
    const handleAddToFavorites = async (name) => {
        setLoadingFavs((prev) => ({ ...prev, [name]: true }));
        setToast(null);

        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/api/favorites/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    itemId: name.toLowerCase(),
                    itemType: "constellation",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setToast(`${name} has been added to favorites.`);
            } else {
                setToast(data.error || "Failed to add to favorites");
            }
        } catch (err) {
            setToast("Something went wrong.");
        } finally {
            setLoadingFavs((prev) => ({ ...prev, [name]: false }));

            // Auto hide toast after 3 seconds
            setTimeout(() => setToast(null), 3000);
        }
    };

    return (
        <div className="bg-black text-white font-['Inknut_Antiqua'] min-h-screen flex flex-col">
            <Navbar />

            {/* Toast Message - top right, below navbar */}
            <div className="fixed top-[72px] right-6 z-50">
                <AnimatePresence>
                    {toast && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="bg-green-600 text-white rounded px-4 py-2 shadow-lg font-semibold select-none max-w-xs"
                        >
                            {toast}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Hero Section */}
            <section className="relative h-screen w-full text-white font-serif overflow-hidden">
                <button
                    onClick={() => navigate("/stars&galaxy")}
                    className="absolute top-20 left-6 z-50 text-white text-base px-4 py-2 bg-black/50 rounded hover:bg-white hover:text-black transition"
                >
                    ← Back to Stars And Galaxy
                </button>
                {/* Background image */}
                <img
                    src={starsHero}
                    alt="Starry night sky"
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Content Overlay */}
                <div className="relative z-10 h-full w-full">
                    {/* Centered title */}
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">CONSTELLATIONS</h1>
                    </div>

                    {/* Top-left paragraph */}
                    <div className="absolute top-[24%] left-10 max-w-md text-lg md:text-xl leading-relaxed">
                        <p>
                            🌟 <span className="font-medium">Constellations</span> are groups of stars that form patterns in the
                            <br />
                            sky, like animals or shapes.
                        </p>
                    </div>

                    {/* Bottom-right paragraph */}
                    <div className="absolute bottom-[35%] right-10 max-w-md text-lg md:text-xl leading-relaxed text-right">
                        <p>
                            ✨ There are <span className="font-medium">88 official constellations</span> in total.
                        </p>
                    </div>

                    {/* Bottom-left paragraph */}
                    <div className="absolute bottom-[18%] left-10 max-w-md text-lg md:text-xl leading-relaxed">
                        <p>Astronomers use them to map the sky and find stars.</p>
                    </div>
                </div>
            </section>

            {/* Main content section */}
            <BackgroundLayout className="flex-grow">
                {/* Hemisphere toggle buttons */}
                <div className="mt-6 flex justify-center gap-4">
                    {["northern", "southern"].map((type) => (
                        <button
                            key={type}
                            onClick={() => setSelectedHemisphere(type)}
                            className={`px-5 py-2 rounded-full border transition-all duration-300 ${selectedHemisphere === type
                                    ? "bg-white text-black scale-105 shadow-md"
                                    : "bg-transparent text-white border-white hover:bg-white/10"
                                }`}
                        >
                            {type === "northern" ? "Northern Sky" : "Southern Sky"}
                        </button>
                    ))}
                </div>

                {/* Constellation list */}
                <section className="mt-12 pb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                        {selectedHemisphere === "northern"
                            ? "Northern Hemisphere Constellations"
                            : "Southern Hemisphere Constellations"}
                    </h2>

                    <AnimatePresence mode="wait">
                        {filtered.map((item) => (
                            <motion.div
                                key={item.name}
                                className="flex flex-col md:flex-row gap-10 mb-20 border-b border-white/20 pb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                {/* Image & Button */}
                                <div className="md:w-1/2 space-y-4 flex flex-col items-center">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="rounded-md shadow-lg w-full object-contain aspect-[4/3] max-h-[800px]"
                                        />
                                    ) : (
                                        <div className="w-full h-[250px] bg-gray-800 rounded-md flex items-center justify-center text-gray-400 italic">
                                            No Image Available
                                        </div>
                                    )}
                                    <button
                                        onClick={() => handleAddToFavorites(item.name)}
                                        disabled={loadingFavs[item.name]}
                                        className="mt-4 px-8 py-3 bg-yellow-400 text-black rounded-full text-sm hover:bg-yellow-300 transition disabled:opacity-50"
                                    >
                                        {loadingFavs[item.name] ? "Adding..." : "Add to Favorites"}
                                    </button>
                                </div>

                                {/* Info + Stars */}
                                <div className="md:w-1/2 space-y-6">
                                    <h3 className="text-2xl font-bold">🌌 {item.name}</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">{item.description}</p>
                                    <div className="space-y-2">
                                        <h4 className="text-xl font-semibold text-white">
                                            🌟 Main Stars in {item.name}
                                        </h4>
                                        <ol className="list-decimal list-inside text-base text-gray-200 space-y-1">
                                            {item.stars.map((star, i) => (
                                                <li key={i}>{star}</li>
                                            ))}
                                        </ol>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </section>
            </BackgroundLayout>
        </div>
    );
};

export default Constellations;
