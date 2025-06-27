import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import galaxyVideo from '../assets/videos/galaxy.mp4';
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";
import galaxies from "../components/galaxies"; // update path if needed

const categories = [
    { key: "spiral", label: "Spiral" },
    { key: "elliptical", label: "Elliptical" },
    { key: "irregular", label: "Irregular" },
];

const Galaxies = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("spiral");
    const [toastMessage, setToastMessage] = useState(null);
    const [isAdding, setIsAdding] = useState(false);

    const filtered = galaxies.filter((g) => g.type === selectedCategory);

    const handleAddToFavorites = async (name) => {
        setIsAdding(true);
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/api/favorites/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    itemId: name.toLowerCase().replace(/\s+/g, '-'), // e.g. "Milky Way" → "milky-way"
                    itemType: "galaxy",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setToastMessage(`${name} has been added to favorites.`);
            } else {
                setToastMessage(`⚠️ ${data.error || "Failed to add to favorites"}`);
            }
        } catch (err) {
            setToastMessage("❌ Something went wrong");
        } finally {
            setIsAdding(false);
        }
    };

    useEffect(() => {
        if (toastMessage) {
            const timeout = setTimeout(() => setToastMessage(null), 3000);
            return () => clearTimeout(timeout);
        }
    }, [toastMessage]);

    return (
        <div className="bg-black text-white font-['Inknut_Antiqua'] min-h-screen flex flex-col">
            <Navbar />

            {/* Toast */}
            {toastMessage && (
                <div className="fixed top-20 right-6 bg-yellow-100 text-black font-medium px-6 py-3 rounded-xl shadow-lg z-[1000] font-['Inknut_Antiqua'] animate-fade-in">
                    {toastMessage}
                </div>
            )}

            {/* Hero Section */}
            <section className="relative h-screen w-full overflow-hidden">
                {/* Video Background */}
                <video
                    src={galaxyVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                />

                {/* Button for Navigation */}
                <button
                    onClick={() => navigate("/stars&galaxy")}
                    className="absolute top-20 left-6 z-50 text-white text-base px-4 py-2 bg-black/50 rounded hover:bg-white hover:text-black transition"
                >
                    ← Back to Stars And Galaxy
                </button>

                <div className="relative z-10 h-full w-full flex items-center justify-center">
                    <div className="text-center max-w-lg px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">Galaxies</h1>
                        <p className="text-lg md:text-xl mb-6">
                            Galaxies are massive systems of stars, gas, dust, and dark matter held together by gravity.
                        </p>
                        <p className="text-lg md:text-xl">
                            Explore galaxies by their shape and structure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <BackgroundLayout className="flex-grow">
                {/* Type Filter Buttons */}
                <div className="mt-6 flex justify-center gap-4 flex-wrap">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setSelectedCategory(cat.key)}
                            className={`px-5 py-2 rounded-full border transition-all duration-300 ${selectedCategory === cat.key
                                ? "bg-white text-black scale-105 shadow-md"
                                : "bg-transparent text-white border-white hover:bg-white/10"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Galaxy Cards */}
                <section className="mt-12 pb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center capitalize">
                        {categories.find((c) => c.key === selectedCategory)?.label} Galaxies
                    </h2>

                    <AnimatePresence mode="wait">
                        {filtered.map((galaxy) => (
                            <motion.div
                                key={galaxy.name}
                                className="flex flex-col md:flex-row gap-10 mb-20 border-b border-white/20 pb-12"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <div className="md:w-1/2 space-y-4 flex flex-col items-center">
                                    {galaxy.image ? (
                                        <img
                                            src={galaxy.image}
                                            alt={galaxy.name}
                                            className="rounded-md shadow-lg w-full aspect-[16/9] object-cover"
                                        />
                                    ) : (
                                        <div className="w-full aspect-[16/9] bg-gray-800 rounded-md flex items-center justify-center text-gray-400 italic">
                                            No Image Available
                                        </div>
                                    )}
                                    <button
                                        onClick={() => handleAddToFavorites(galaxy.name)}
                                        disabled={isAdding}
                                        className="mt-4 px-6 py-2 bg-[#FDD365] text-black rounded-full text-sm hover:bg-yellow-300 transition disabled:opacity-60"
                                    >
                                        {isAdding ? "Adding..." : "Add to Favorites"}
                                    </button>
                                </div>

                                <div className="md:w-1/2 space-y-6">
                                    <h3 className="text-2xl font-bold">{galaxy.name}</h3>
                                    <p className="text-lg text-gray-300 leading-relaxed">{galaxy.description}</p>
                                    <ul className="list-disc list-inside text-base text-gray-200 space-y-1">
                                        <li>Galaxy Type: {galaxy.type}</li>
                                        <li>Distance: {galaxy.distance}</li>
                                        <li>Size: {galaxy.size}</li>
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </section>
            </BackgroundLayout>
        </div>
    );
};

export default Galaxies;
