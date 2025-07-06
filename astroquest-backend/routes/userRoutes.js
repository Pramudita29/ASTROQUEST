const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/authMiddleware');
const User = require('../models/User'); // adjust path if needed

// GET /api/user/me
router.get('/me', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
            .select('username lastVisitedPage');
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json({
            username: user.username,
            lastVisitedPage: user.lastVisitedPage || null
        });
    } catch (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Server error' });
    }
});

// PATCH /api/user/last-visited
router.patch('/last-visited', auth, async (req, res) => {
    try {
        const { page } = req.body;
        await User.findByIdAndUpdate(req.user.id, { lastVisitedPage: page });
        res.json({ message: 'Last visited page updated' });
    } catch (err) {
        console.error('Error updating last visited page:', err);
        res.status(500).json({ error: 'Failed to update last visited page' });
    }
});


// Get user's exploration progress
router.get('/exploration-progress', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('explorationStats');
        if (!user) return res.status(404).json({ error: 'User not found' });

        res.json(user.explorationStats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// Update exploration progress when a user explores a planet, moon, etc.
router.patch('/explore-page', auth, async (req, res) => {
    const { page } = req.body; // Page URL (e.g., /planet/earth)

    const excludedPages = ['/profile', '/favorites']; // Exclude pages

    try {
        const user = await User.findById(req.user.id);
        if (!user) return res.status(404).json({ error: 'User not found' });

        // Initialize visitedPages array if it doesn't exist
        if (!user.explorationStats.visitedPages) {
            user.explorationStats.visitedPages = [];
        }

        // Skip pages that should not be counted
        if (excludedPages.includes(page)) {
            return res.status(200).json({ message: "Page excluded from exploration tracking" });
        }

        // Check if page has already been visited
        if (user.explorationStats.visitedPages.includes(page)) {
            return res.status(200).json({ message: "Page already explored" });
        }

        // Add page to visited list
        user.explorationStats.visitedPages.push(page);
        user.explorationStats.visited += 1;  // Increment the visited counter

        // Level and XP Logic based on the number of pages visited
        const pagesExplored = user.explorationStats.visited;
        let newLevel = user.level;
        let newXP = user.xp;

        // Define level-up and XP logic based on pages explored
        if (pagesExplored >= 5 && pagesExplored < 10) {
            newLevel = 2;
            newXP = 5;
        } else if (pagesExplored >= 10 && pagesExplored < 15) {
            newLevel = 3;
            newXP = 10;
        } else if (pagesExplored >= 15 && pagesExplored < 20) {
            newLevel = 4;
            newXP = 15;
        } else if (pagesExplored >= 20) {
            newLevel = 5;
            newXP = 20;
        }

        // Update level and XP
        if (user.level !== newLevel || user.xp !== newXP) {
            user.level = newLevel;
            user.xp = newXP;
        }

        // Save the updated user document
        await user.save();

        // Return updated exploration stats
        res.json({
            message: 'Exploration progress updated successfully',
            explorationStats: user.explorationStats,
            level: user.level,
            xp: user.xp
        });
    } catch (err) {
        console.error("Error updating exploration progress:", err);
        res.status(500).json({ error: err.message });
    }
});





module.exports = router;
