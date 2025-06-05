const mongoose = require('mongoose'); // Add this line to import mongoose

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    lastVisitedPage: { type: String, default: '/home' },
    favorites: [{ type: String }],
    quizHistory: [
        {
            quizId: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' },  // Reference to the Quiz model
            score: { type: Number },
            correctAnswers: { type: Number },
            wrongAnswers: { type: Number },
            totalQuestions: { type: Number },
            timeTaken: { type: Number },
            submittedAt: { type: Date, default: Date.now },
        }
    ],
    explorationStats: {
        planets: { type: Number, default: 0 },
        moons: { type: Number, default: 0 },
        asteroids: { type: Number, default: 0 },
        visited: { type: Number, default: 0 },
        visitedPages: { type: [String], default: [] }
    },
    level: { type: Number, default: 1 },  // Initialize level
    xp: { type: Number, default: 0 },     // Initialize XP
});

module.exports = mongoose.model('User', userSchema);
