const User = require('../models/User');

exports.updateLastVisited = async (req, res) => {
  try {
    const { page } = req.body;
    const userId = req.user.id;

    await User.findByIdAndUpdate(userId, { lastVisitedPage: page });

    res.json({ message: "Last visited page updated" });
  } catch (err) {
    res.status(500).json({ error: "Failed to update last visited page" });
  }
};
// Get user exploration progress
exports.getExplorationProgress = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('explorationStats');
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.json(user.explorationStats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update user exploration progress
// Update exploration progress when a user explores a page
exports.updateExplorationProgress = async (req, res) => {
  try {
    const { page } = req.body; // Page being explored, e.g., /planet/earth
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: 'User not found' });

    // Initialize visitedPages array if it doesn't exist
    if (!user.explorationStats.visitedPages) {
      user.explorationStats.visitedPages = [];
    }

    // Skip counting certain pages
    const excludedPages = ['/profile', '/favorites'];
    if (excludedPages.includes(page)) {
      return res.status(200).json({ message: "Page excluded from exploration tracking" });
    }

    // Check if the page has already been visited
    if (user.explorationStats.visitedPages.includes(page)) {
      return res.status(200).json({ message: "Page already explored" });
    }

    // Add page to visitedPages
    user.explorationStats.visitedPages.push(page);
    user.explorationStats.visited += 1; // Increment the visited count

    // Leveling logic: 5 pages = 1st level, 10 pages = 2nd level, etc.
    let level = Math.floor(user.explorationStats.visited / 5);  // 0 for 0-4 pages, 1 for 5-9, etc.
    let xp = level * 5;  // XP logic: 5 XP per level

    // Set level and XP
    user.level = level + 1;  // Adding 1 to reflect levels starting from 1
    user.xp = xp;

    // Save updated user data
    await user.save();

    res.json({
      explorationStats: user.explorationStats,
      level: user.level,
      xp: user.xp
    });
  } catch (err) {
    console.error("Error updating exploration progress:", err);
    res.status(500).json({ error: err.message });
  }
};
