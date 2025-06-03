const Favorite = require('../models/Favorite');

// Add to favorites
exports.addFavorite = async (req, res) => {
  const { itemId, itemType } = req.body;
  const userId = req.user.id;

  if (!itemId || !itemType) {
    return res.status(400).json({ error: 'itemId and itemType are required' });
  }

  try {
    // Prevent duplicates
    const exists = await Favorite.findOne({ userId, itemId, itemType });
    if (exists) return res.status(409).json({ error: 'Item already favorited' });

    const favorite = await Favorite.create({ userId, itemId, itemType });
    res.status(201).json({ message: 'Added to favorites', favorite });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Remove from favorites
exports.removeFavorite = async (req, res) => {
  const userId = req.user.id;
  const { itemId, itemType } = req.body;

  try {
    const deleted = await Favorite.findOneAndDelete({ userId, itemId, itemType });
    if (!deleted) return res.status(404).json({ error: 'Favorite not found' });

    res.json({ message: 'Removed from favorites' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all favorites of current user
exports.getUserFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ userId: req.user.id });
    res.json(favorites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Check if an item is in favorites
exports.isFavorite = async (req, res) => {
  const { itemId, itemType } = req.query;
  const userId = req.user.id;

  try {
    const exists = await Favorite.findOne({ userId, itemId, itemType });
    res.json({ isFavorite: !!exists });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
