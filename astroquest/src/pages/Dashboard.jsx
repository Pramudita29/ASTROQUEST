import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout';
import Navbar from '../components/Navbar';

// Map of paths to human-readable names
const prettyNames = {
    '/': 'Landing Page',
    '/dashboard': 'Dashboard',
    '/explore': 'Explore',
    '/learn': 'Learn',
    '/learn/astronomy': 'Astronomy Details',
    '/stars&galaxy': 'Stars & Galaxies',
    '/stars&galaxy/constellations': 'Constellations',
    '/stars&galaxy/major-stars': 'Major Stars',
    '/stars&galaxy/galaxies': 'Galaxies',
    '/space-object': 'Space Objects',
    '/space-object/asteroids': 'Asteroids',
    '/space-object/comets': 'Comets',
    '/space-object/meteors': 'Meteors',
    '/planet/sun': 'Sun',
    '/planet/mercury': 'Mercury',
    '/planet/venus': 'Venus',
    '/planet/earth': 'Earth',
    '/planet/mars': 'Mars',
    '/planet/jupiter': 'Jupiter',
    '/planet/saturn': 'Saturn',
    '/planet/uranus': 'Uranus',
    '/planet/neptune': 'Neptune',
    '/planet/pluto': 'Pluto',
    '/earth/moons': 'Earth Moons',
    '/mars/moons': 'Mars Moons',
    '/jupiter/moons': 'Jupiter Moons',
    '/saturn/moons': 'Saturn Moons',
    '/uranus/moons': 'Uranus Moons',
    '/neptune/moons': 'Neptune Moons',
    '/pluto/moons': 'Pluto Moons',
    '/sun/mission': 'Sun Missions',
    '/mercury/mission': 'Mercury Missions',
    '/venus/mission': 'Venus Missions',
    '/earth/mission': 'Earth Missions',
    '/mars/mission': 'Mars Missions',
    '/jupiter/mission': 'Jupiter Missions',
    '/saturn/mission': 'Saturn Missions',
    '/uranus/mission': 'Uranus Missions',
    '/neptune/mission': 'Neptune Missions',
    '/pluto/mission': 'Pluto Missions',
};

export default function Dashboard() {
    const [isReturningUser, setIsReturningUser] = useState(false);
    const [username, setUsername] = useState('Explorer');
    const [lastVisited, setLastVisited] = useState(null);
    const [quizResult, setQuizResult] = useState(null);
    const [xp, setXp] = useState(0);
    const [dailyFact, setDailyFact] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [loadingFavorites, setLoadingFavorites] = useState(true);

    const navigate = useNavigate();

    const greetings = [
        "Ready for liftoff",
        "Galactic transmissions received",
        "Scanning nebulae",
        "Charting constellations",
        "Powering up warp drive"
    ];

    const spaceFacts = [
        "Neptune has winds faster than the speed of sound!",
        "Venus spins backwards — a day there is longer than its year.",
        "Jupiter's moon Europa may have an ocean beneath its icy crust.",
        "Saturn's rings are made mostly of ice and dust.",
        "The Sun makes up 99.8% of our solar system's mass."
    ];

    useEffect(() => {
        setDailyFact(spaceFacts[Math.floor(Math.random() * spaceFacts.length)]);

        const token = localStorage.getItem('token');
        const fetchUserInfo = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/auth/me', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error('User fetch failed');
                const data = await res.json();
                console.log('User data:', data);  // Check user data
                setIsReturningUser(true);
                setUsername(data.username);
                const lastVisitedPath = data.lastVisitedPage || '/explore';
                setLastVisited(lastVisitedPath);
                console.log('Last visited:', lastVisited);  // Check the value of lastVisited
            } catch (err) {
                console.error('Failed to fetch user info', err);
            }
        };

        const fetchFavorites = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/favorites', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                if (!res.ok) throw new Error('Favorites fetch failed');
                const data = await res.json();
                const mapped = data.map(fav => ({
                    id: fav.itemId,
                    name: fav.itemId.charAt(0).toUpperCase() + fav.itemId.slice(1),
                    viewPath:
                        fav.itemType === 'planet'
                            ? `/planet/${fav.itemId}`
                            : fav.itemType === 'constellation'
                                ? `/constellations/${fav.itemId}`
                                : `/learn`,
                }));
                setFavorites(mapped);
            } catch (err) {
                console.error('Failed to fetch favorites', err);
            } finally {
                setLoadingFavorites(false);
            }
        };

        fetchUserInfo();
        fetchFavorites();

        const quiz = localStorage.getItem('quizScore');
        if (quiz) {
            try {
                const parsed = JSON.parse(quiz);
                if (parsed?.score !== undefined && parsed?.total !== undefined) {
                    setQuizResult(parsed);
                    setXp(parsed.score * 10);
                }
            } catch (e) {
                console.error('Invalid quiz data');
            }
        }
    }, []);

    useEffect(() => {
        if (lastVisited) {
            // Only navigate if lastVisited is set
            console.log('Navigating to:', lastVisited);
            navigate(lastVisited);
        }
    }, [lastVisited, navigate]); // Will run when lastVisited changes

    const handleExploreClick = () => {
        navigate(lastVisited || '/explore');
    };

    const greeting = greetings[Math.floor(Math.random() * greetings.length)];

    return (
        <>
            <Navbar />
            <BackgroundLayout>
                <section className="w-full max-w-7xl mx-auto px-6 py-16 text-white space-y-12">
                    {/* Header */}
                    <div className="text-center space-y-2 animate-fade-in-down">
                        <h1 className="text-4xl md:text-5xl font-bold font-['Inknut_Antiqua'] tracking-wide">
                            {isReturningUser ? `${greeting}, ${username}!` : `Welcome aboard, ${username} 🚀`}
                        </h1>
                        <p className="text-base md:text-lg text-gray-300">
                            {isReturningUser
                                ? `Last explored: ${prettyNames[lastVisited] || lastVisited}`
                                : "Begin your first space mission. Adventure awaits!"}
                        </p>
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start animate-fade-in-up">
                        {/* Left: Explore */}
                        <div className="md:col-span-2 space-y-6">
                            <div className="rounded-2xl p-6 bg-white/5 border border-white/20 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02]">
                                <h2 className="text-2xl font-bold font-['Inknut_Antiqua'] mb-3">
                                    {isReturningUser ? 'Continue Exploring' : 'Your First Mission'}
                                </h2>
                                <p className="text-sm text-gray-300 mb-4">
                                    {isReturningUser
                                        ? `Pick up where you left off and uncover more cosmic secrets.`
                                        : 'Click to launch your first journey among the stars.'}
                                </p>
                                <button
                                    onClick={handleExploreClick}
                                    className="bg-[#FFD369] hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full font-['Inknut_Antiqua'] transition shadow-md hover:shadow-lg"
                                >
                                    {isReturningUser ? 'Continue' : 'Explore Now'}
                                </button>
                            </div>
                        </div>

                        {/* Right Side Cards */}
                        <div className="space-y-6">
                            {/* Favorites Card */}
                            <div className="rounded-2xl p-6 bg-white/5 border border-white/20 backdrop-blur-sm shadow-md hover:shadow-xl transition">
                                <h2 className="text-xl font-bold font-['Inknut_Antiqua'] mb-4">Favorites</h2>
                                {loadingFavorites ? (
                                    <p className="text-gray-400 text-center">Loading favorites...</p>
                                ) : favorites.length === 0 ? (
                                    <p className="text-gray-400 text-center">No favorites yet.</p>
                                ) : (
                                    <div className="flex flex-col space-y-4 max-h-[300px] overflow-y-auto pr-2">
                                        {favorites.slice(0, 3).map((fav) => (
                                            <div
                                                key={fav.id}
                                                className="flex items-center gap-4 cursor-pointer hover:bg-white/10 rounded-md p-2 transition"
                                                onClick={() => navigate(fav.viewPath)}
                                                title={`Go to ${fav.name}`}
                                            >
                                                <div className="flex flex-col">
                                                    <span className="font-semibold text-yellow-300">{fav.name}</span>
                                                    <small className="text-gray-400">{prettyNames[fav.viewPath] || 'Unknown'}</small>
                                                </div>
                                            </div>
                                        ))}
                                        {favorites.length > 3 && (
                                            <button
                                                onClick={() => navigate('/favorites')}
                                                className="mt-2 self-start bg-[#FFD369] hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full transition shadow-md hover:shadow-lg"
                                            >
                                                View All Favorites
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Quiz Center */}
                            <div className="rounded-2xl p-6 bg-white/5 border border-white/20 backdrop-blur-sm shadow-md hover:shadow-xl transition">
                                <h2 className="text-xl font-bold font-['Inknut_Antiqua'] mb-3">Quiz Center</h2>
                                {quizResult ? (
                                    <>
                                        <p className="text-sm text-gray-300 mb-1">
                                            Last Score: <span className="font-bold text-yellow-300">{quizResult.score}/{quizResult.total}</span>
                                        </p>
                                        <p className="text-sm text-gray-300 mb-4">Impressive work, cadet!</p>
                                        <button
                                            className="bg-[#FFD369] hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full transition shadow-md hover:shadow-lg"
                                        >
                                            Review
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="text-sm text-gray-300 mb-4">
                                            Take your first quiz and join the ranks of AstroGeniuses!
                                        </p>
                                        <button
                                            className="bg-[#FFD369] hover:bg-yellow-300 text-black font-semibold py-2 px-6 rounded-full transition shadow-md hover:shadow-lg"
                                            onClick={() => navigate('/quiz')}
                                        >
                                            Start Quiz
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </BackgroundLayout>
        </>
    );
}
