const mongoose = require('mongoose');

const favoriteSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  itemId: { type: String, required: true }, // can be a quiz ID, planet slug, etc.
  itemType: { 
    type: String, 
    enum: ['planet', 'moon', 'star', 'galaxy', 'constellation', 'mission'], 
    required: true 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Favorite', favoriteSchema);
