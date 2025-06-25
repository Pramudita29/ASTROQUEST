import axios from 'axios';
import { BarChart3, ChevronDown, Edit, FileText, LogOut, Minus, Plus, Trash2, User, Users, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('dashboard');
    const [dashboardData, setDashboardData] = useState({
        totalUsers: 0,
        totalQuizzes: 0,
        usersWhoTookQuiz: 0,
        users: [],
        quizzes: []
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deleteTarget, setDeleteTarget] = useState(null);
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showCreateQuizModal, setShowCreateQuizModal] = useState(false);
    const [showEditQuizModal, setShowEditQuizModal] = useState(false);
    const [editingQuiz, setEditingQuiz] = useState(null);
    const [newQuiz, setNewQuiz] = useState({
        title: '',
        description: '',
        questions: [{ questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 }]
    });
    const activeInputRef = useRef(null); // Ref to track active input

    useEffect(() => {
        const fetchDashboardData = async () => {
            try {
                setLoading(true);
                setError(null);

                const token = localStorage.getItem('token');
                console.log('Token:', token);
                if (!token) {
                    throw new Error('No authentication token found. Please log in.');
                }

                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Cache-Control': 'no-cache',
                    },
                };

                console.log('Fetching dashboard data...');
                const [dashboardResponse, usersResponse, quizzesResponse] = await Promise.allSettled([
                    axios.get('http://localhost:3000/api/admin/dashboard', config),
                    axios.get('http://localhost:3000/api/admin/users', config),
                    axios.get('http://localhost:3000/api/admin/quizzes', config),
                ]);

                const getResponseData = (result, key) => {
                    if (result.status === 'fulfilled') {
                        console.log(`${key} Response:`, result.value.data);
                        return result.value.data;
                    }
                    console.error(`Error in ${key} request:`, result.reason.response?.data || result.reason.message);
                    setError(`Failed to fetch ${key} data: ${result.reason.message}`);
                    return {};
                };

                const newData = {
                    totalUsers: getResponseData(dashboardResponse, 'dashboard').totalUsers || 0,
                    totalQuizzes: getResponseData(dashboardResponse, 'dashboard').totalQuizzes || 0,
                    usersWhoTookQuiz: getResponseData(dashboardResponse, 'dashboard').totalUsersQuiz || 0,
                    users: Array.isArray(getResponseData(usersResponse, 'users').users) ? getResponseData(usersResponse, 'users').users : [],
                    quizzes: Array.isArray(getResponseData(quizzesResponse, 'quizzes').quizzes) ? getResponseData(quizzesResponse, 'quizzes').quizzes : [],
                };

                console.log('Updated dashboardData:', newData);
                setDashboardData(newData);
            } catch (err) {
                console.error('Error fetching dashboard data:', err);
                if (err.response?.status === 401 || err.response?.status === 403) {
                    setError('Authentication failed. Please log in again.');
                    localStorage.removeItem('token');
                    window.location.href = '/login';
                } else {
                    setError(err.response?.data?.error || 'Failed to load dashboard data. Please try again.');
                }
                setDashboardData({
                    totalUsers: 0,
                    totalQuizzes: 0,
                    usersWhoTookQuiz: 0,
                    users: [],
                    quizzes: [],
                });
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    useEffect(() => {
        console.log('dashboardData state updated:', dashboardData);
    }, [dashboardData]);

    const handleCreateQuiz = () => {
        setNewQuiz({ title: '', description: '', questions: [{ questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 }] });
        setShowCreateQuizModal(true);
    };

    const handleEditQuiz = async (quiz) => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found. Please log in.');
            }

            const response = await axios.get(`http://localhost:3000/api/quizzes/${quiz._id}`, {
                headers: { Authorization: `Bearer ${token}`, 'Cache-Control': 'no-cache' },
            });

            console.log('Quiz Details:', response.data);
            setEditingQuiz(response.data);
            setNewQuiz({
                title: response.data.title || '',
                description: response.data.description || '',
                questions: Array.isArray(response.data.questions) && response.data.questions.length > 0
                    ? response.data.questions.map(q => ({
                        questionText: q.questionText,
                        options: q.options,
                        correctAnswerIndex: q.correctAnswerIndex
                    }))
                    : [{ questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 }],
            });
            setShowEditQuizModal(true);
        } catch (error) {
            console.error('Error fetching quiz details:', error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                setError('Authentication failed. Please log in again.');
                localStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                alert(`Failed to load quiz: ${error.response?.data?.error || error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteQuiz = (quizId) => {
        setDeleteTarget({ type: 'quiz', id: quizId });
        setShowDeleteConfirm(true);
    };

    const handleDeleteUser = (userId) => {
        setDeleteTarget({ type: 'user', id: userId });
        setShowDeleteConfirm(true);
    };

    const confirmDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found. Please log in.');
            }

            const config = {
                headers: { Authorization: `Bearer ${token}`, 'Cache-Control': 'no-cache' },
            };

            if (deleteTarget.type === 'quiz') {
                await axios.delete(`http://localhost:3000/api/admin/quizzes/${deleteTarget.id}`, config);
                setDashboardData(prev => ({
                    ...prev,
                    quizzes: prev.quizzes.filter(quiz => quiz._id !== deleteTarget.id),
                    totalQuizzes: prev.totalQuizzes - 1,
                }));
            } else if (deleteTarget.type === 'user') {
                await axios.delete(`http://localhost:3000/api/admin/users/${deleteTarget.id}`, config);
                setDashboardData(prev => ({
                    ...prev,
                    users: prev.users.filter(user => user._id !== deleteTarget.id),
                    totalUsers: prev.totalUsers - 1,
                }));
            }
            alert(`${deleteTarget.type} deleted successfully!`);
        } catch (error) {
            console.error(`Error deleting ${deleteTarget.type}:`, error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                setError('Authentication failed. Please log in again.');
                localStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                alert(`Failed to delete ${deleteTarget.type}: ${error.response?.data?.error || error.message}`);
            }
        } finally {
            setShowDeleteConfirm(false);
            setDeleteTarget(null);
        }
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
        setDeleteTarget(null);
    };

    const handleLogout = () => {
        localStorage.clear();
        alert('Logged out successfully!');
        setShowUserDropdown(false);
        window.location.href = '/login';
    };

    const addQuestion = () => {
        setNewQuiz(prev => ({
            ...prev,
            questions: [...prev.questions, { questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 }],
        }));
        // Focus the new question's input after adding
        setTimeout(() => {
            const newQuestionInput = document.querySelector(`input[name="question-${newQuiz.questions.length}"]`);
            if (newQuestionInput) {
                newQuestionInput.focus();
                newQuestionInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 0);
    };

    const removeQuestion = (index) => {
        setNewQuiz(prev => ({
            ...prev,
            questions: prev.questions.filter((_, i) => i !== index),
        }));
    };

    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...newQuiz.questions];
        updatedQuestions[index][field] = field === 'correctAnswerIndex' ? parseInt(value, 10) : value;
        setNewQuiz(prev => ({ ...prev, questions: updatedQuestions }));
    };

    const handleOptionChange = (questionIndex, optionIndex, value) => {
        const updatedQuestions = [...newQuiz.questions];
        updatedQuestions[questionIndex].options[optionIndex] = value;
        setNewQuiz(prev => ({ ...prev, questions: updatedQuestions }));
    };

    const handleSubmitQuiz = async (e) => {
        e && e.preventDefault();
        if (!newQuiz.title || newQuiz.questions.some(q => !q.questionText || q.options.some(opt => !opt) || q.correctAnswerIndex < 0 || q.correctAnswerIndex >= q.options.length)) {
            alert('Please fill in all required fields and select a valid correct answer.');
            return;
        }

        setLoading(true);
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No authentication token found. Please log in.');
            }

            if (showEditQuizModal) {
                alert('Quiz editing is not supported by the backend yet.');
            } else {
                const response = await axios.post('http://localhost:3000/api/quiz', newQuiz, {
                    headers: { Authorization: `Bearer ${token}`, 'Cache-Control': 'no-cache' },
                });
                setDashboardData(prev => ({
                    ...prev,
                    quizzes: [...prev.quizzes, response.data.quiz],
                    totalQuizzes: prev.totalQuizzes + 1,
                }));
                alert('Quiz created successfully!');
            }
            closeModal();
        } catch (error) {
            console.error('Error submitting quiz:', error);
            if (error.response?.status === 401 || error.response?.status === 403) {
                setError('Authentication failed. Please log in again.');
                localStorage.removeItem('token');
                window.location.href = '/login';
            } else {
                alert(`Failed to ${showEditQuizModal ? 'update' : 'create'} quiz: ${error.response?.data?.error || error.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    const closeModal = () => {
        setShowCreateQuizModal(false);
        setShowEditQuizModal(false);
        setEditingQuiz(null);
        setNewQuiz({ title: '', description: '', questions: [{ questionText: '', options: ['', '', '', ''], correctAnswerIndex: 0 }] });
    };

    const StatCard = ({ title, value, icon: Icon, color }) => (
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
                </div>
                <div className={`p-3 rounded-lg ${color}`}>
                    <Icon size={24} className="text-white" />
                </div>
            </div>
        </div>
    );

    const ConfirmationModal = ({ isOpen, onConfirm, onCancel, title, message }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-md">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">{title}</h3>
                    <p className="text-gray-600 mb-6">{message}</p>
                    <div className="flex justify-end space-x-3">
                        <button
                            onClick={onCancel}
                            className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    const QuizModal = ({ isOpen, onClose, title, onSubmit }) => {
        if (!isOpen) return null;

        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-scroll scroll-smooth">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="space-y-6 pb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Quiz Title</label>
                            <input
                                type="text"
                                value={newQuiz.title}
                                onChange={(e) => setNewQuiz(prev => ({ ...prev, title: e.target.value }))}
                                onFocus={(e) => { activeInputRef.current = e.target; }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                            <textarea
                                value={newQuiz.description}
                                onChange={(e) => setNewQuiz(prev => ({ ...prev, description: e.target.value }))}
                                onFocus={(e) => { activeInputRef.current = e.target; }}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-4">Questions</label>
                            {newQuiz.questions.map((question, index) => (
                                <div key={`question-${index}`} className="mb-6 p-4 border border-gray-200 rounded-lg relative">
                                    <div className="flex justify-between items-center mb-3">
                                        <label className="block text-sm font-medium text-gray-600">Question {index + 1}</label>
                                        {newQuiz.questions.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeQuestion(index)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                <Minus size={16} />
                                            </button>
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="text"
                                            name={`question-${index}`}
                                            placeholder="Enter question text"
                                            value={question.questionText}
                                            onChange={(e) => handleQuestionChange(index, 'questionText', e.target.value)}
                                            onFocus={(e) => { activeInputRef.current = e.target; }}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 mb-3">
                                        {question.options.map((option, optionIndex) => (
                                            <div key={`option-${index}-${optionIndex}`} className="flex items-center space-x-2">
                                                <input
                                                    type="radio"
                                                    name={`correctAnswer-${index}`}
                                                    checked={question.correctAnswerIndex === optionIndex}
                                                    onChange={() => handleQuestionChange(index, 'correctAnswerIndex', optionIndex)}
                                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                                                />
                                                <input
                                                    type="text"
                                                    name={`option-${index}-${optionIndex}`}
                                                    placeholder={`Option ${optionIndex + 1}`}
                                                    value={option}
                                                    onChange={(e) => handleOptionChange(index, optionIndex, e.target.value)}
                                                    onFocus={(e) => { activeInputRef.current = e.target; }}
                                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                    required
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={addQuestion}
                                className="flex items-center px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50"
                            >
                                <Plus size={16} className="mr-2" />
                                Add Question
                            </button>
                        </div>
                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={onClose}
                                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                onClick={onSubmit}
                                disabled={loading}
                                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : (showEditQuizModal ? 'Update Quiz' : 'Create Quiz')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    console.log('Rendering dashboard, loading:', loading, 'dashboardData:', dashboardData);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="flex">
                <div className="w-64 bg-white shadow-lg">
                    <div className="p-6">
                        <div className="flex items-center space-x-2 mb-8">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold">A</span>
                            </div>
                            <span className="text-xl font-bold text-gray-900">AstroQuest</span>
                        </div>
                        <nav className="space-y-2">
                            <button
                                onClick={() => setActiveTab('dashboard')}
                                className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${activeTab === 'dashboard' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <BarChart3 size={20} className="mr-3" />
                                Dashboard
                            </button>
                            <button
                                onClick={() => setActiveTab('users')}
                                className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${activeTab === 'users' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <Users size={20} className="mr-3" />
                                Manage Users
                            </button>
                            <button
                                onClick={() => setActiveTab('quizzes')}
                                className={`w-full flex items-center px-4 py-3 rounded-lg text-left ${activeTab === 'quizzes' ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'}`}
                            >
                                <FileText size={20} className="mr-3" />
                                Manage Quizzes
                            </button>
                        </nav>
                    </div>
                </div>

                <div className="flex-1 p-8">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {activeTab === 'dashboard' && 'Dashboard'}
                                {activeTab === 'users' && 'Manage Users'}
                                {activeTab === 'quizzes' && 'Manage Quizzes'}
                            </h1>
                            <p className="text-gray-600">Welcome back, Admin</p>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <button
                                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                                    className="flex items-center space-x-2 px-3 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
                                >
                                    <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                                        <User size={16} className="text-gray-600" />
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">Admin</span>
                                    <ChevronDown size={16} className="text-gray-500" />
                                </button>
                                {showUserDropdown && (
                                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center px-4 py-2 text-left text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            <LogOut size={16} className="mr-2" />
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                            {activeTab === 'quizzes' && (
                                <button
                                    onClick={handleCreateQuiz}
                                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    <Plus size={16} className="mr-2" />
                                    Create Quiz
                                </button>
                            )}
                        </div>
                    </div>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6">
                            {error}
                        </div>
                    )}

                    {activeTab === 'dashboard' && (
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <StatCard
                                    title="Total Users"
                                    value={loading ? '...' : dashboardData.totalUsers}
                                    icon={Users}
                                    color="bg-blue-600"
                                />
                                <StatCard
                                    title="Total Quizzes"
                                    value={loading ? '...' : dashboardData.totalQuizzes}
                                    icon={FileText}
                                    color="bg-green-600"
                                />
                                <StatCard
                                    title="Active Quiz Takers"
                                    value={loading ? '...' : dashboardData.usersWhoTookQuiz}
                                    icon={BarChart3}
                                    color="bg-purple-600"
                                />
                            </div>
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                                <div className="p-6 border-b border-gray-100">
                                    <h2 className="text-lg font-semibold text-gray-900">Recent Quizzes</h2>
                                </div>
                                <div className="p-6">
                                    {loading ? (
                                        <p className="text-gray-600">Loading quizzes...</p>
                                    ) : Array.isArray(dashboardData.quizzes) && dashboardData.quizzes.length > 0 ? (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {dashboardData.quizzes.slice(0, 6).map(quiz => (
                                                <div key={quiz._id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                                                            <FileText size={16} className="text-blue-600" />
                                                        </div>
                                                        <span className="text-xs text-gray-500">Quiz</span>
                                                    </div>
                                                    <h3 className="font-medium text-gray-900 mb-1">{quiz.title}</h3>
                                                    <p className="text-sm text-gray-600">{quiz.description || 'No description'}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-gray-600">No quizzes available.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'users' && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-lg font-semibold text-gray-900">Manage Users</h2>
                            </div>
                            <div className="p-6">
                                {loading ? (
                                    <p className="text-gray-600">Loading users...</p>
                                ) : dashboardData.users.length > 0 ? (
                                    <div className="space-y-4">
                                        {dashboardData.users.map(user => (
                                            <div key={user._id} className="flex items-center justify-between py-3 border-b border-gray-200">
                                                <div>
                                                    <p className="font-medium text-gray-900">{user.username}</p>
                                                    <p className="text-sm text-gray-500">{user.email}</p>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <button
                                                        onClick={() => handleDeleteUser(user._id)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600">No users available.</p>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'quizzes' && (
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                            <div className="p-6 border-b border-gray-100">
                                <h2 className="text-lg font-semibold text-gray-900">Manage Quizzes</h2>
                            </div>
                            <div className="p-6">
                                {loading ? (
                                    <p className="text-gray-600">Loading quizzes...</p>
                                ) : dashboardData.quizzes.length > 0 ? (
                                    <div className="space-y-4">
                                        {dashboardData.quizzes.map(quiz => (
                                            <div key={quiz._id} className="flex items-center justify-between py-3 border-b border-gray-200">
                                                <div>
                                                    <p className="font-medium text-gray-900">{quiz.title}</p>
                                                    <p className="text-sm text-gray-500">{quiz.description || 'No description'}</p>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <button
                                                        onClick={() => handleEditQuiz(quiz)}
                                                        className="text-blue-600 hover:text-blue-800"
                                                    >
                                                        <Edit size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteQuiz(quiz._id)}
                                                        className="text-red-600 hover:text-red-800"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-600">No quizzes available.</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <ConfirmationModal
                isOpen={showDeleteConfirm}
                onConfirm={confirmDelete}
                onCancel={cancelDelete}
                title="Are you sure?"
                message={`Do you want to delete this ${deleteTarget?.type}?`}
            />

            <QuizModal
                isOpen={showCreateQuizModal || showEditQuizModal}
                onClose={closeModal}
                title={showEditQuizModal ? 'Edit Quiz' : 'Create Quiz'}
                onSubmit={handleSubmitQuiz}
            />
        </div>
    );
};

export default AdminDashboard;