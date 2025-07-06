const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const adminController = require('../controllers/adminController');

// Admin-only protected routes
router.get('/dashboard', auth, adminController.getAdminDashboardData);
router.get('/users', auth, adminController.getUsers);
router.delete('/users/:id', auth, adminController.deleteUser);
router.get('/quizzes', auth, adminController.getQuizzes);
router.delete('/quizzes/:id', auth, adminController.deleteQuiz);

module.exports = router;
