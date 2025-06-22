
const StarCard = ({ star, flipped, onFlip, onAddToFavorites }) => {
    // Function to determine background and text color based on the star type
    const getStarColor = (type) => {
        switch (type) {
            case "blue":
                return { bgColor: "from-blue-400 to-indigo-400", textColor: "text-black" }; // Blue
            case "white":
                return { bgColor: "from-white to-gray-200", textColor: "text-black" }; // White
            case "yellow":
                return { bgColor: "from-yellow-300 to-yellow-500", textColor: "text-black" }; // Yellow
            case "red":
                return { bgColor: "from-red-400 to-red-600", textColor: "text-white" }; // Red
            default:
                return { bgColor: "from-gray-600 to-gray-800", textColor: "text-white" }; // Default
        }
    };

    const { bgColor, textColor } = getStarColor(star.type);

    return (
        <div className="perspective cursor-pointer w-64 h-80 mx-auto" onClick={onFlip}>
            <div
                className={`relative w-full h-full rounded-2xl shadow-lg transition-transform duration-700 transform-style-preserve-3d ${flipped ? "rotate-y-180" : ""}`}
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Front Face */}
                <div
                    className={`absolute inset-0 bg-gradient-to-br ${bgColor} rounded-2xl text-white flex flex-col justify-center items-center p-6 text-center`}
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <h3 className={`text-xl font-bold ${textColor} mb-2`}>🌟 {star.name}</h3>
                    <p className={`text-base font-semibold ${textColor}`}>{star.spectralType}</p>
                    <p className={`text-sm mt-3 ${textColor}`}>Tap to view details</p>
                </div>

                {/* Back Face */}
                <div
                    className={`absolute inset-0 bg-gradient-to-tr ${bgColor} rounded-2xl ${textColor} p-6 flex flex-col justify-between`}
                    style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                >
                    <p className="text-sm mb-3">{star.description}</p>
                    <div className="text-xs space-y-1">
                        <p>
                            <strong>Magnitude:</strong> {star.magnitude}
                        </p>
                        <p>
                            <strong>Distance:</strong> {star.distance}
                        </p>
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation(); // Prevent card flip when clicking the button
                            onAddToFavorites(); // Call the add to favorites function
                        }}
                        className="mt-4 bg-yellow-400 text-black px-5 py-2 rounded-full hover:bg-yellow-300 transition"
                    >
                        Add to Favorites
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StarCard;
