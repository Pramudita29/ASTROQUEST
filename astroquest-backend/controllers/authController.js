const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
    const { fullName, username, email, password, confirmPassword } = req.body;

    if (!fullName || !username || !email || !password || !confirmPassword) {
        return res.status(400).json({ error: 'Please fill in all fields' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match' });
    }

    try {
        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).json({ error: 'Email already in use' });

        const existingUsername = await User.findOne({ username });
        if (existingUsername) return res.status(400).json({ error: 'Username already taken' });

        const hashed = await bcrypt.hash(password, 10);

        // Initialize exploration stats
        const newUser = {
            fullName,
            username,
            email,
            password: hashed,
            explorationStats: { planets: 0, moons: 0, asteroids: 0, visited: 0 }  // Initialize exploration stats
        };

        const user = await User.create(newUser);

        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password)
        return res.status(400).json({ error: 'Username and password required' });

    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).json({ error: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '7d' });

        res.json({
            token,
            user: {
                id: user._id,
                fullName: user.fullName,
                username: user.username,
                email: user.email,
                role: user.role,
                explorationStats: user.explorationStats  // Include explorationStats
            }
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getMe = async (req, res) => {
    try {
        // Fetch the user by ID and ensure we return everything except the password
        const user = await User.findById(req.user.id).select('-password'); // Don't include password in the response

        // Check if the user exists
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Log the full user object for debugging
        console.log("Fetched User: ", user);

        // Return all the user's info
        res.json({
            username: user.username,
            email: user.email,
            level: user.level,  // Make sure 'level' exists in the user schema
            xp: user.xp,        // Make sure 'xp' exists in the user schema
            lastVisitedPage: user.lastVisitedPage,
            explorationStats: user.explorationStats,  // Include exploration stats
            favorites: user.favorites,  // If needed, include the favorites
            quizHistory: user.quizHistory  // If needed, include quiz history
        });
    } catch (err) {
        // Log the error to help with debugging
        console.error("Error in getMe function: ", err.message);

        res.status(500).json({ error: err.message });
    }
};

