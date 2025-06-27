import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout';
import Navbar from '../components/Navbar';

export default function FavoritesPage() {
    const navigate = useNavigate();
    const [favorites, setFavorites] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [toastMessage, setToastMessage] = useState(null);

    // Auto-hide toast
    useEffect(() => {
        if (toastMessage) {
            const timeout = setTimeout(() => setToastMessage(null), 3000);
            return () => clearTimeout(timeout);
        }
    }, [toastMessage]);

    const fetchFavorites = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:3000/api/favorites', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const data = await response.json();

            // Map response and include itemType
            const mapped = data.map((fav) => ({
                id: fav.itemId,
                name: fav.itemId.charAt(0).toUpperCase() + fav.itemId.slice(1),
                itemType: fav.itemType,  // Keep itemType here
                viewPath: getItemPath(fav.itemType),  // Dynamically determine the view path
            }));

            setFavorites(mapped);
        } catch (err) {
            console.error('Failed to load favorites', err);
        } finally {
            setLoading(false);
        }
    };

    // Dynamic routing based on item type
    const getItemPath = (itemType) => {
        switch (itemType) {
            case 'constellation':
                return '/stars&galaxy/constellations';
            case 'major-star':
                return '/stars&galaxy/major-stars';
            case 'galaxy':
                return '/stars&galaxy/galaxies';
            default:
                return '/learn';
        }
    };

    const handleRemoveClick = (item) => {
        setSelectedItem(item);
        setShowModal(true);
    };

    const confirmRemove = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`http://localhost:3000/api/favorites/remove`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    itemId: selectedItem.id,
                    itemType: selectedItem.itemType,  // Use itemType from state
                }),
            });

            if (response.ok) {
                setFavorites((prev) => prev.filter((f) => f.id !== selectedItem.id));
                setToastMessage(`${selectedItem.name} has been removed from favorites.`);
            } else {
                const errorData = await response.json();
                setToastMessage(`⚠️ ${errorData.error || 'Failed to remove favorite'}`);
            }
        } catch (err) {
            setToastMessage('❌ Error while removing favorite');
        } finally {
            setShowModal(false);
            setSelectedItem(null);
        }
    };

    const cancelRemove = () => {
        setShowModal(false);
        setSelectedItem(null);
    };

    useEffect(() => {
        fetchFavorites();
    }, []);

    return (
        <BackgroundLayout>
            <Navbar />

            {/* Toast Message */}
            {toastMessage && (
                <div className="fixed top-20 right-6 bg-yellow-100 text-black font-medium px-6 py-3 rounded-xl shadow-lg z-[1000] font-['Inknut_Antiqua'] animate-fade-in">
                    {toastMessage}
                </div>
            )}

            <div className="pt-24 pb-10 px-6 text-white min-h-screen bg-black">
                <h1 className="text-3xl md:text-5xl font-bold text-center mb-12">Your Favorites</h1>

                {loading ? (
                    <p className="text-center text-gray-300">Loading favorites...</p>
                ) : favorites.length === 0 ? (
                    <p className="text-center text-gray-400">You haven't added any favorites yet.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
                        {favorites.map((item) => (
                            <div
                                key={item.id}
                                className="border rounded-2xl p-6 flex flex-col justify-between items-center bg-opacity-10 backdrop-blur-lg border-white w-[280px] h-[360px]"
                            >
                                {/* Text Instead of Image */}
                                <div className="h-32 w-32 bg-gray-700 flex items-center justify-center mb-4 rounded-md">
                                    <span className="text-white font-semibold text-xl">
                                        {item.name}
                                    </span>
                                </div>

                                <h2 className="text-xl font-bold mb-4">{item.name}</h2>

                                <button
                                    onClick={() => navigate(item.viewPath)}
                                    className="bg-[#FDD365] text-black font-bold py-2 px-6 rounded-full mb-3 hover:bg-yellow-500"
                                >
                                    View
                                </button>

                                <button
                                    onClick={() => handleRemoveClick(item)}
                                    className="bg-[#FDD365] text-red-700 font-bold py-2 px-6 rounded-full hover:bg-yellow-500"
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Confirmation Modal */}
                {showModal && selectedItem && (
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 flex-col gap-4">
                        <div className="bg-[#e6ecfa] text-black rounded-[2.5rem] px-10 py-6 text-center shadow-2xl w-[90%] max-w-[460px] font-['Inknut_Antiqua'] border border-black/10">
                            <h2 className="text-3xl font-bold uppercase mb-4 tracking-wider">
                                {selectedItem.name}
                            </h2>
                            <p className="text-[1.1rem] leading-relaxed mb-6">
                                Do you want to remove <strong>{selectedItem.name.toUpperCase()}</strong> from favorites?
                            </p>

                            <div className="flex justify-center gap-6 max-w-md mx-auto">
                                <button
                                    onClick={confirmRemove}
                                    className="bg-[#FDD365] text-black text-lg font-semibold px-6 py-3 rounded-full min-w-[140px] hover:brightness-105 transition-all"
                                >
                                    Yes
                                </button>
                                <button
                                    onClick={cancelRemove}
                                    className="bg-[#FDD365] text-red-600 text-lg font-semibold px-6 py-3 rounded-full min-w-[140px] hover:brightness-105 transition-all"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </BackgroundLayout>
    );
}
