import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout';
import Navbar from '../components/Navbar';

const Quiz = () => {
    const { id } = useParams(); // Get quiz ID from URL
    const navigate = useNavigate();
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [answers, setAnswers] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [timeTaken, setTimeTaken] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [results, setResults] = useState(null);
    const [transitioning, setTransitioning] = useState(false);

    // Fetch quiz data
    useEffect(() => {
        const fetchQuiz = async () => {
            try {
                const response = await fetch(`/api/quiz/${id}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setQuiz(data);
                    setAnswers(new Array(data.questions.length).fill(null)); // Initialize answers array
                } else {
                    setError(data.error || 'Failed to fetch quiz');
                }
            } catch (err) {
                setError('Error fetching quiz');
            } finally {
                setLoading(false);
            }
        };
        fetchQuiz();
    }, [id]);

    // Timer for tracking time taken
    useEffect(() => {
        if (!submitted && quiz) {
            const timer = setInterval(() => {
                setTimeTaken((prev) => prev + 1);
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [submitted, quiz]);

    // Handle answer selection
    const handleAnswerChange = (questionIndex, optionIndex) => {
        const newAnswers = [...answers];
        newAnswers[questionIndex] = optionIndex;
        setAnswers(newAnswers);
    };

    // Handle quiz submission
    const handleSubmit = async () => {
        const correctAnswers = answers.filter(
            (answer, index) => answer === quiz.questions[index].correctAnswerIndex
        ).length; // Calculate correct answers by comparing selected answers to the correct answer index

        const totalQuestions = quiz.questions.length;
        const score = Math.round((correctAnswers / totalQuestions) * 100);

        setResults({
            score,
            correctAnswers,
            wrongAnswers: totalQuestions - correctAnswers,
            totalQuestions,
        });

        // Send answers and timeTaken to the backend
        try {
            const response = await fetch(`/api/quiz/${id}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({
                    answers: answers,  // Send the selected answers
                    timeTaken: timeTaken, // Send time taken to complete the quiz
                }),
            });

            const data = await response.json();
            if (response.ok) {
                setResults({
                    score: data.score,
                    correctAnswers: data.correctAnswers,
                    wrongAnswers: data.wrongAnswers,
                    totalQuestions,
                });
            } else {
                setError(data.error || 'Failed to submit quiz');
            }
        } catch (err) {
            setError('Error submitting quiz');
        }

        setSubmitted(true);
    };

    // Show loading state
    if (loading) {
        return (
            <BackgroundLayout>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full bg-black text-white p-8 animate-pulse">
                    <p className="text-3xl font-semibold">Loading quiz...</p>
                </div>
            </BackgroundLayout>
        );
    }

    // Show error state
    if (error) {
        return (
            <BackgroundLayout>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full bg-black text-white p-8">
                    <p className="text-3xl font-semibold">Error: {error}</p>
                </div>
            </BackgroundLayout>
        );
    }

    // Show results after quiz submission
    if (submitted && results) {
        const score = results.score;
        let resultMessage = "";

        // Provide a message based on the score range
        if (score === 100) {
            resultMessage = "Outstanding! Perfect score!";
        } else if (score >= 90) {
            resultMessage = "Excellent! Great job!";
        } else if (score >= 70) {
            resultMessage = "Well done! Keep it up!";
        } else if (score >= 50) {
            resultMessage = "Good try! You can do better!";
        } else {
            resultMessage = "Don't worry! Keep practicing!";
        }

        return (
            <BackgroundLayout>
                <Navbar />
                <div className="flex flex-col items-center justify-center h-full bg-black text-white p-8">
                    <div className="bg-transparent border-2 border-white p-8 rounded-3xl shadow-xl w-full max-w-md">
                        <div className="text-center">
                            <h2 className="text-3xl font-bold text-white mb-6">Congratulations!</h2>

                            {/* Animated Result Text */}
                            <div className="text-6xl font-extrabold text-white mb-4">
                                {results.score}%
                            </div>
                            <p className="text-2xl font-semibold text-white mb-4">{resultMessage}</p>

                            {/* Progress Bar */}
                            <div className="w-full bg-gray-300 rounded-full h-2.5 mb-6">
                                <div
                                    className="bg-yellow-400 h-2.5 rounded-full transition-all duration-500"
                                    style={{ width: `${results.score}%` }}
                                ></div>
                            </div>

                            {/* Correct / Wrong Answer Stats */}
                            <div className="text-white space-y-2 mb-6">
                                <p>Correct: {results.correctAnswers}</p>
                                <p>Wrong: {results.wrongAnswers}</p>
                                <p>Total: {results.totalQuestions}</p>
                                <p>Time: {Math.floor(timeTaken / 60)}m {timeTaken % 60}s</p>
                            </div>

                            {/* Try Again Button */}
                            <button
                                onClick={() => window.location.reload()}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 w-full"
                            >
                                Try Again
                            </button>
                        </div>
                    </div>
                </div>
            </BackgroundLayout>
        );
    }

    // Handle next and previous question navigation with page turn animation
    const handleNext = () => {
        setTransitioning(true);
        if (currentQuestionIndex < quiz.questions.length - 1) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setTransitioning(false);
            }, 500); // Wait for the transition effect
        }
    };

    const handlePrevious = () => {
        setTransitioning(true);
        if (currentQuestionIndex > 0) {
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex - 1);
                setTransitioning(false);
            }, 500); // Wait for the transition effect
        }
    };

    const currentQuestion = quiz.questions[currentQuestionIndex];
    const isLastQuestion = currentQuestionIndex === quiz.questions.length - 1;
    const canProceed = answers[currentQuestionIndex] !== null;

    return (
        <BackgroundLayout>
            <Navbar />
            <div className="flex flex-col items-center justify-center h-full bg-black text-white p-8">
                {/* Back Button */}
                <button
                    onClick={() => navigate('/quiz')} // Replace with the correct path to your quiz zone page
                    className="bg-gray-600 text-white py-2 px-4 rounded-full mb-6 hover:bg-gray-700 transition-all duration-300"
                >
                    Back to Quiz Zone
                </button>

                <div
                    className={`bg-white border-2 border-white rounded-3xl shadow-xl p-8 w-full max-w-md transition-all duration-500 ease-in-out transform ${transitioning ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
                        }`}
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-6 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
                    </div>

                    {/* Question Counter */}
                    <div className="text-sm text-gray-500 font-medium mb-4">
                        QUESTION {String(currentQuestionIndex + 1).padStart(2, '0')}
                    </div>

                    {/* Question Text */}
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 leading-tight">
                        {currentQuestion.questionText}
                    </h2>

                    {/* Selection Instruction */}
                    <div className="text-sm text-gray-500 mb-6">
                        SELECT ONLY ONE
                    </div>

                    {/* Options */}
                    <div className="space-y-3 mb-8">
                        {currentQuestion.options.map((option, optionIndex) => (
                            <label
                                key={optionIndex}
                                className="flex items-center space-x-4 cursor-pointer group"
                            >
                                <div className="relative">
                                    <input
                                        type="radio"
                                        name={`question-${currentQuestionIndex}`}
                                        value={optionIndex}
                                        checked={answers[currentQuestionIndex] === optionIndex}
                                        onChange={() => handleAnswerChange(currentQuestionIndex, optionIndex)}
                                        className="sr-only"
                                    />
                                    <div
                                        className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${answers[currentQuestionIndex] === optionIndex
                                            ? 'border-yellow-400 bg-yellow-400'
                                            : 'border-gray-300 group-hover:border-gray-400'
                                            }`}
                                    >
                                        {answers[currentQuestionIndex] === optionIndex && (
                                            <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                                        )}
                                    </div>
                                </div>
                                <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                                    {option}
                                </span>
                            </label>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between items-center">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestionIndex === 0}
                            className="text-gray-600 hover:text-gray-800 font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                        >
                            Back
                        </button>

                        {isLastQuestion ? (
                            <button
                                onClick={handleSubmit}
                                disabled={!canProceed}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                Submit Quiz
                            </button>
                        ) : (
                            <button
                                onClick={handleNext}
                                disabled={!canProceed}
                                className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-full transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                            >
                                Next
                            </button>
                        )}
                    </div>

                    {/* Progress Indicator */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {quiz.questions.map((_, index) => (
                            <div
                                key={index}
                                className={`w-2 h-2 rounded-full transition-all duration-200 ${index === currentQuestionIndex
                                    ? 'bg-yellow-400'
                                    : index < currentQuestionIndex
                                        ? 'bg-gray-400'
                                        : 'bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </BackgroundLayout>
    );
};

export default Quiz;
