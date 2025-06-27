import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import starVideo from "../assets/videos/stars.mp4";
import BackgroundLayout from "../components/BackgroundLayout";
import majorStars from "../components/majorStars";
import Navbar from "../components/Navbar";
import StarCard from "../components/StarCard"; // Assuming StarCard is in the same directory


const categories = [
    { key: "blue", label: "🔵 Blue Giants" },
    { key: "white", label: "⚪ White Stars" },
    { key: "yellow", label: "🟡 Yellow Stars" },
    { key: "red", label: "🔴 Red Supergiants" },
];

const MajorStars = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("blue");
    const [flipStates, setFlipStates] = useState({});

    const filtered = majorStars.filter((s) => s.type === selectedCategory);

    // Handle card flip
    const handleFlip = (name) => {
        setFlipStates((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    // Reset flip states when category changes
    useEffect(() => {
        setFlipStates({});
    }, [selectedCategory]);

    // Handle Add to Favorites logic
    const handleAddToFavorites = async (name) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch("http://localhost:3000/api/favorites/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    itemId: name.toLowerCase().replace(/\s+/g, '-'), // Convert to slug
                    itemType: "star",
                }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(`${name} has been added to your favorites!`);
            } else {
                alert(`⚠️ ${data.error || "Failed to add to favorites"}`);
            }
        } catch (err) {
            alert("❌ Something went wrong while adding to favorites.");
        }
    };

    return (
        <div className="bg-black text-white font-['Inknut_Antiqua'] min-h-screen">
            <Navbar />

            {/* Hero Section with Video */}
            <section className="relative h-screen w-full overflow-hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={starVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-black/70 z-10" />
                <button
                    onClick={() => navigate("/stars&galaxy")}
                    className="absolute top-20 left-6 z-50 text-white text-base px-4 py-2 bg-black/50 rounded hover:bg-white hover:text-black transition"
                >
                    ← Back to Stars And Galaxy
                </button>
                <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6">
                    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold">MAJOR STARS</h1>
                    </div>
                    <div className="absolute top-[24%] left-10 max-w-md text-lg md:text-xl leading-relaxed">
                        <p>🌟 These are some of the most famous, useful, and brightest stars in the sky.</p>
                    </div>
                    <div className="absolute bottom-[35%] right-10 max-w-md text-lg md:text-xl leading-relaxed text-right">
                        <p>✨ Filter stars based on their color and type.</p>
                    </div>
                </div>
            </section>

            {/* Main Section */}
            <BackgroundLayout className="px-6 py-10 max-w-7xl mx-auto">
                {/* Filter Buttons */}
                <div className="flex justify-center gap-4 flex-wrap mb-10">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setSelectedCategory(cat.key)}
                            className={`px-5 py-2 rounded-full border transition-all duration-300 whitespace-nowrap ${selectedCategory === cat.key
                                ? "bg-white text-black scale-105 shadow-md"
                                : "bg-transparent text-white border-white hover:bg-white/10"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Cards Grid - Centered */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                    {filtered.map((star) => (
                        <StarCard
                            key={star.name}
                            star={star}
                            flipped={!!flipStates[star.name]}
                            onFlip={() => handleFlip(star.name)}
                            onAddToFavorites={() => handleAddToFavorites(star.name)}
                        />
                    ))}
                </div>
            </BackgroundLayout>
        </div>
    );
};

export default MajorStars;
