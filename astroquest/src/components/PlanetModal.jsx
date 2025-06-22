import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function PlanetModal({ name, onClose }) {
    const [isAdding, setIsAdding] = useState(false);
    const [message, setMessage] = useState(null);

    const getPlanetInfo = (planetName) => {
        const facts = {
            Sun: "☀️ The Sun makes up 99.8% of the solar system's mass.",
            Mercury: "🧊 Mercury has no atmosphere and extreme temperatures.",
            Venus: "🌫️ Venus spins in the opposite direction to most planets.",
            Earth: "🌍 Earth is the only planet known to support life.",
            Mars: "🌋 The Red Planet has the largest volcano in our solar system.",
            Jupiter: "🌀 Jupiter’s Great Red Spot is a giant storm.",
            Saturn: "💍 Saturn's rings are made of ice and rock.",
            Uranus: "❄️ Uranus rotates on its side!",
            Neptune: "💨 Neptune has supersonic winds over 1,200 mph.",
            Pluto: "🪐 Pluto is smaller than Earth’s moon, but has five of its own!",
        };
        return facts[planetName] || "✨ A mysterious celestial object!";
    };

    const handleAddToFavorites = async () => {
        setIsAdding(true);
        setMessage(null);

        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/favorites/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    itemId: name.toLowerCase(),
                    itemType: 'planet'
                })
            });

            const data = await response.json();

            if (response.ok) {
                setMessage(`${name} has been added to favorites.`);
            } else {
                setMessage(`⚠️ ${data.error || 'Failed to add to favorites'}`);
            }
        } catch (err) {
            setMessage('❌ Something went wrong');
        } finally {
            setIsAdding(false);
        }
    };

    // Auto-hide toast after 3 seconds
    useEffect(() => {
        if (message) {
            const timeout = setTimeout(() => setMessage(null), 3000);
            return () => clearTimeout(timeout);
        }
    }, [message]);

    return (
        <>
            {/* Toast Message Top-Right */}
            {message && (
                <div className="fixed top-20 right-6 bg-yellow-100 text-black font-medium px-6 py-3 rounded-xl shadow-lg z-[1000] font-['Inknut_Antiqua'] animate-fade-in">
                    {message}
                </div>
            )}

            {/* Modal Background */}
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 flex-col gap-4">
                {/* Main Box */}
                <div className="bg-[#e6ecfa] rounded-[2.5rem] px-10 py-6 text-center shadow-2xl w-[90%] max-w-[460px] font-['Inknut_Antiqua'] border border-black/10">
                    <h2 className="text-3xl font-bold text-black mb-4 tracking-wider">
                        {name.toUpperCase()}
                    </h2>

                    <p className="text-[1.1rem] text-black leading-relaxed mb-6">
                        {getPlanetInfo(name)}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex justify-center gap-6 max-w-md mx-auto">
                        <Link to={`/planet/${name.toLowerCase()}`}>
                            <button
                                className="bg-[#FDD365] text-black text-lg font-semibold px-8 py-3 rounded-full min-w-[180px] whitespace-nowrap hover:brightness-105 transition-all"
                                type="button"
                            >
                                Learn More
                            </button>
                        </Link>

                        <button
                            onClick={handleAddToFavorites}
                            disabled={isAdding}
                            className="bg-[#FDD365] text-black text-lg font-semibold px-2 py-3 rounded-full min-w-[180px] whitespace-nowrap hover:brightness-105 transition-all disabled:opacity-50"
                            type="button"
                        >
                            {isAdding ? 'Adding...' : 'Add to Favorites'}
                        </button>
                    </div>

                </div>

                {/* Cancel Button */}
                <button
                    onClick={onClose}
                    className="bg-[#e6ecfa] text-red-600 text-lg font-bold px-6 py-2 rounded-full shadow-md hover:scale-105 transition-transform"
                >
                    Cancel
                </button>
            </div>
        </>
    );
}
