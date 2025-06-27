import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";
import SpaceGame from "./SpaceGame"; // Import SpaceGame

// Importing mascot images from the src/assets folder
import mascot1 from '../assets/mascot1.png';
import mascot2 from '../assets/mascot2.png';
import mascot3 from '../assets/mascot3.png';
import mascot4 from '../assets/mascot4.png';

// List of 4 mascot images
const mascotImages = [mascot1, mascot2, mascot3, mascot4];

// Function to get a random mascot avatar
const getRandomMascotAvatar = () => {
    const randomIndex = Math.floor(Math.random() * mascotImages.length); // Pick a random index
    return mascotImages[randomIndex];
};

export default function Profile() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [level, setLevel] = useState(1);
    const [xp, setXp] = useState(0);
    const [quizHistory, setQuizHistory] = useState([]); // Storing quiz history
    const [explorationStats, setExplorationStats] = useState({
        planets: 0,
        moons: 0,
        asteroids: 0,
        visited: 0,
        visitedPages: [],
    });
    const [gamePopupOpen, setGamePopupOpen] = useState(false);
    const [avatar, setAvatar] = useState(null);  // State to hold avatar image (null by default)

    const navigate = useNavigate();

    // Fetch user data including quiz history
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (token) {
                    const userResponse = await axios.get("http://localhost:3000/api/auth/me", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    const user = userResponse.data;
                    setUsername(user.username);
                    setEmail(user.email);
                    setExplorationStats(user.explorationStats || {}); // Ensure explorationStats is an object
                    setLevel(user.level || 1);  // If level and XP are part of user data
                    setXp(user.xp || 0);        // If XP is part of user data

                    // Fetch user's quiz history
                    const quizHistoryResponse = await axios.get("http://localhost:3000/api/quiz/quiz-history", {
                        headers: { Authorization: `Bearer ${token}` },
                    });
                    // Filter out quizzes with no title, and check if there are any quizzes with title
                    const validQuizzes = quizHistoryResponse.data.filter(quiz => quiz.quizId && quiz.quizId.title);
                    setQuizHistory(validQuizzes || []); // Store the valid quizzes

                    // Set a random mascot avatar for the user
                    const randomAvatar = getRandomMascotAvatar();
                    console.log('Random Avatar:', randomAvatar); // Check if avatar is correctly assigned
                    setAvatar(randomAvatar);  // Fetch random mascot avatar
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []); // Add [] to fetch once on component mount

    // Track page visits for exploration progress
    useEffect(() => {
        const trackPageVisit = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    console.log("User not authenticated");
                    return;
                }

                const page = window.location.pathname; // Get the current page URL (e.g., /explore/earth)

                // Send the visit to the backend to update the exploration progress
                const response = await axios.patch(
                    "http://localhost:3000/api/user/explore-page",
                    { page }, // Send the current page visited
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // If the response indicates the page was explored for the first time
                if (response.data.message !== "Page already explored") {
                    // Update the exploration stats after visiting the page
                    setExplorationStats(response.data);
                    setLevel(response.data.level);  // Update level based on the backend response
                    setXp(response.data.xp);        // Update XP based on the backend response
                }
            } catch (error) {
                console.error("Error tracking page visit:", error);
            }
        };

        trackPageVisit();
    }, [window.location.pathname]); // This will trigger whenever the page path changes

    const openGamePopup = () => {
        setGamePopupOpen(true);
    };

    const closeGamePopup = () => {
        setGamePopupOpen(false);
    };

    return (
        <>
            <Navbar />
            <BackgroundLayout>
                <section className="max-w-6xl mx-auto px-6 py-16 space-y-12 rounded-xl">
                    {/* Profile Header */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center">
                            <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-700">
                                {avatar ? (
                                    <img
                                        src={avatar}  // Only render if avatar is valid
                                        alt="Avatar"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex justify-center items-center bg-gray-500 text-white">Loading...</div>
                                )}
                            </div>
                        </div>
                        <h1 className="text-3xl font-semibold text-white">{username}'s Profile</h1>
                        <p className="text-lg text-gray-300">Email: {email}</p>
                        <p className="text-lg text-gray-300">Level {level} | XP: {xp}</p>
                    </div>

                    {/* Exploration Progress */}
                    <div className="text-center">
                        <h2 className="text-2xl text-white">Exploration Progress</h2>
                        <div className="w-full bg-gray-600 h-4 rounded-full overflow-hidden max-w-md mx-auto mt-5">
                            <div
                                className="h-full bg-yellow-400 transition-all duration-700"
                                style={{
                                    width: `${(explorationStats.visited % 5 === 0 ? explorationStats.visited / 5 : Math.floor(explorationStats.visited / 5)) * 100 / Math.ceil(explorationStats.visited / 5)}%`
                                }}
                            />
                        </div>
                        <p className="mt-2 text-gray-400">
                            {`${explorationStats.visited || 0} / ${Math.ceil(explorationStats.visited / 5) * 5} Pages Explored`} {/* Show increment in 5 pages */}
                        </p>
                    </div>

                    {/* Quiz Scores (Only show if there are quizzes with titles) */}
                    {quizHistory.length > 0 && (
                        <div className="text-center">
                            <h2 className="text-2xl text-white">Quiz Scores</h2>
                            {quizHistory.map((quiz, index) => (
                                <div key={index} className="max-w-lg mx-auto mb-9 mt-8 p-6 border-2 border-white rounded-lg bg-transparent">
                                    <div><strong>Quiz Title:</strong> {quiz.quizId ? quiz.quizId.title : 'No Title Available'}</div>
                                    <div><strong>Score:</strong> {quiz.score}</div>
                                    <div><strong>Correct Answers:</strong> {quiz.correctAnswers}</div>
                                    <div><strong>Wrong Answers:</strong> {quiz.wrongAnswers}</div>
                                    <div><strong>Total Questions:</strong> {quiz.totalQuestions}</div>
                                    <div><strong>Time Taken:</strong> {Math.floor(quiz.timeTaken / 60)}m {quiz.timeTaken % 60}s</div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* If no quizzes were found */}
                    {quizHistory.length === 0 && (
                        <p className="text-white text-center">No quizzes taken yet or all quizzes do not have titles.</p>
                    )}

                    {/* Play Game Button */}
                    <div className="text-center">
                        <button
                            onClick={openGamePopup}
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg"
                        >
                            Play Space Game
                        </button>
                    </div>

                    {/* Game Popup */}
                    {gamePopupOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                            <div className="bg-gray-900 rounded-lg p-6 w-96">
                                <h2 className="text-3xl text-white text-center">Space Adventure</h2>
                                <SpaceGame />
                                <button
                                    onClick={closeGamePopup}
                                    className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg px-4 py-2 mt-4"
                                >
                                    Close Game
                                </button>
                            </div>
                        </div>
                    )}
                </section>
            </BackgroundLayout>
        </>
    );
}
