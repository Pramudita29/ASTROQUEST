const Quiz = require('../models/Quiz');
const User = require('../models/User');

// Create a new quiz (admin only)
exports.createQuiz = async (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access only' });
    }
    const { title, description, questions } = req.body;
    if (!title || !Array.isArray(questions) || questions.length === 0) {
        return res.status(400).json({ error: 'Invalid quiz data' });
    }
    try {
        const quiz = await Quiz.create({
            title,
            description,
            questions,
            createdBy: req.user.id,
        });
        res.status(201).json({ message: 'Quiz created', quiz });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all quizzes (accessible to all authenticated users)
exports.getQuizzes = async (_req, res) => {
    try {
        const quizzes = await Quiz.find().select('title description questions');
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all quizzes for users (excludes questions, accessible to all authenticated users)
exports.getQuizzesForUsers = async (_req, res) => {
    try {
        const quizzes = await Quiz.find().select('title description createdAt');
        res.json(quizzes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single quiz by ID (accessible to all authenticated users)
exports.getQuizById = async (req, res) => {
    try {
        const quiz = await Quiz.findById(req.params.id).select('title description questions');
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });
        res.json(quiz);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Submit quiz answers (accessible to all authenticated users)
exports.submitQuiz = async (req, res) => {
    const userId = req.user.id;
    const quizId = req.params.id;
    const { answers, timeTaken } = req.body;
    try {
        const quiz = await Quiz.findById(quizId);
        if (!quiz) return res.status(404).json({ error: 'Quiz not found' });

        if (!Array.isArray(answers) || answers.length !== quiz.questions.length) {
            return res.status(400).json({ error: 'Answers length mismatch' });
        }

        let correctCount = 0;
        quiz.questions.forEach((q, idx) => {
            if (answers[idx] === q.correctAnswerIndex) correctCount++;
        });

        const total = quiz.questions.length;
        const wrongCount = total - correctCount;
        const score = Math.round((correctCount / total) * 100);

        // Save quiz history when quiz is submitted
        await User.findByIdAndUpdate(userId, {
            $push: {
                quizHistory: {
                    quizId: quizId,  // quizId should be a valid ObjectId of a Quiz
                    score,
                    correctAnswers: correctCount,
                    wrongAnswers: wrongCount,
                    totalQuestions: total,
                    timeTaken,
                    submittedAt: new Date(),
                },
            },
        });

        res.json({
            message: 'Quiz submitted',
            score,
            correctAnswers: correctCount,
            wrongAnswers: wrongCount,
            totalQuestions: total,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get user's quiz history (accessible to authenticated user)
exports.getUserQuizHistory = async (req, res) => {
    try {
        // Fetch user data and populate quizId with quiz details (title)
        const user = await User.findById(req.user.id)
            .select('quizHistory')
            .populate('quizHistory.quizId', 'title')  // Populate quizId with title
            .lean();  // Convert to plain objects for easier debugging

        if (!user) return res.status(404).json({ error: 'User not found' });

        // Log the quiz history for debugging
        console.log('User Quiz History:', user.quizHistory);

        // Send the quiz history back to the frontend
        res.json(user.quizHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};





// Get user's quiz history for a specific quiz (accessible to authenticated user)
exports.getUserQuizHistoryByQuiz = async (req, res) => {
    try {
        const quizId = req.params.quizId;
        const user = await User.findById(req.user.id)
            .select('quizHistory')
            .populate('quizHistory.quizId', 'title');
        if (!user) return res.status(404).json({ error: 'User not found' });

        const filteredHistory = user.quizHistory.filter(h => h.quizId._id.toString() === quizId);
        res.json(filteredHistory);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
