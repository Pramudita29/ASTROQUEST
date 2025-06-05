const jwt = require('jsonwebtoken');

// Auth middleware for verifying token
function auth(req, res, next) {
    const authHeader = req.header('Authorization');
    const token = authHeader?.startsWith('Bearer ') ? authHeader.split(' ')[1] : null;

    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // decoded should contain user id and role
        next();
    } catch (err) {
        console.error('JWT error:', err.message);
        res.status(401).json({ error: 'Invalid or expired token' });
    }
}

// Admin-only access middleware
function isAdmin(req, res, next) {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Admin access only' });
    }
    next();
}

module.exports = { auth, isAdmin };