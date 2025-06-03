const User = require('../models/User');
const Quiz = require('../models/Quiz');

exports.getAdminDashboardData = async (req, res) => {
    try {
        // Get the total number of users
        const totalUsers = await User.countDocuments();

        // Get the total number of quizzes
        const totalQuizzes = await Quiz.countDocuments();

        // Get the total number of users who have taken quizzes
        const totalUsersQuiz = await User.aggregate([
            { $unwind: { path: "$quizHistory", preserveNullAndEmptyArrays: true } },  // Ensure empty quizHistory is handled
            { $group: { _id: null, total: { $sum: 1 } } }
        ]);

        res.json({
            totalUsers,
            totalQuizzes,
            totalUsersQuiz: totalUsersQuiz[0] ? totalUsersQuiz[0].total : 0
        });
    } catch (err) {
        console.error('Error fetching dashboard data:', err);
        res.status(500).json({ error: err.message });
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();
        res.json({ users, totalUsers: users.length });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: err.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if user exists
        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Delete the user from the database
        await User.findByIdAndDelete(id);
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: err.message });
    }
};

// Get All Quizzes
exports.getQuizzes = async (req, res) => {
    try {
        // Fetch all quizzes from the database
        const quizzes = await Quiz.find().select('title description');
        res.json({ quizzes, totalQuizzes: quizzes.length });
    } catch (err) {
        console.error('Error fetching quizzes:', err);
        res.status(500).json({ error: err.message });
    }
};

// Delete Quiz
exports.deleteQuiz = async (req, res) => {
    try {
        const { id } = req.params;

        // Check if quiz exists
        const quiz = await Quiz.findById(id);
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

        // Delete the quiz from the database
        await Quiz.findByIdAndDelete(id);
        res.status(200).json({ message: 'Quiz deleted successfully' });
    } catch (err) {
        console.error('Error deleting quiz:', err);
        res.status(500).json({ error: err.message });
    }
};
