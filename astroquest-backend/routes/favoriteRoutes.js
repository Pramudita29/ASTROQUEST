const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const favCtrl = require('../controllers/favoriteController');

router.post('/add', auth, favCtrl.addFavorite);
router.delete('/remove', auth, favCtrl.removeFavorite);
router.get('/', auth, favCtrl.getUserFavorites);
router.get('/check', auth, favCtrl.isFavorite);

module.exports = router;
