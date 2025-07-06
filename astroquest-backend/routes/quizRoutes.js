const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const qc = require('../controllers/quizController');

// Put more specific routes before less specific routes
router.post('/:id/submit', auth, qc.submitQuiz);          // Submit quiz answers (POST)

router.post('/', auth, qc.createQuiz);                    // Admin only
router.get('/', auth, qc.getQuizzes);                     // Get all quizzes

router.get('/quiz-history', auth, qc.getUserQuizHistory);  // Endpoint for fetching quiz history
router.get('/history/:quizId', auth, qc.getUserQuizHistoryByQuiz); // Filtered quiz history

router.get('/:id', auth, qc.getQuizById);                 // Fetch single quiz

module.exports = router;
