import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundLayout from "../components/BackgroundLayout";
import Navbar from "../components/Navbar";

const QuizZone = () => {
    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch quizzes data
    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await fetch('/api/quiz', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setQuizzes(data);
                } else {
                    setError(data.error || 'Failed to fetch quizzes');
                }
            } catch (err) {
                setError('Error fetching quizzes');
            } finally {
                setLoading(false);
            }
        };
        fetchQuizzes();
    }, []);

    // Display loading state
    if (loading) {
        return (
            <BackgroundLayout>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full bg-black text-white p-8">
                    <p className="text-2xl">Loading quizzes...</p>
                </div>
            </BackgroundLayout>
        );
    }

    // Display error state
    if (error) {
        return (
            <BackgroundLayout>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full text-white p-8">
                    <p className="text-2xl">Error: {error}</p>
                </div>
            </BackgroundLayout>
        );
    }

    return (
        <BackgroundLayout>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full text-white p-8">
                <h2 className="text-4xl font-semibold mb-6 text-center">Quiz Zone</h2>

                {/* Responsive Grid Layout for Quizzes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                    {quizzes.length === 0 ? (
                        <p className="text-xl col-span-full text-center">No quizzes available</p>
                    ) : (
                        quizzes.map((quiz) => (
                            <div
                                key={quiz._id}
                                className="bg-transparent border-2 border-white p-6 rounded-lg shadow-lg flex flex-col justify-between items-center aspect-square"
                            >
                                <h3 className="text-2xl font-bold mb-4 text-white text-center">{quiz.title}</h3>
                                <p className="text-lg mb-4 text-white text-center">{quiz.description || "No description available"}</p>
                                <Link
                                    to={`/quiz/${quiz._id}`}
                                    className="bg-[#FDD365] text-black px-6 py-2 rounded-lg hover:bg-yellow-300 w-full text-center"
                                >
                                    Start Quiz
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </BackgroundLayout>
    );
};

export default QuizZone;
