const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = mongoose.model('User');
const bcrypt = require('bcrypt')

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        // console.log('no auth');
        return res.status(401).send({ error: 'You Must Logged In'})
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'You Must Logged In'})
        }

        const { userId } = payload;

        const user = await User.findById(userId);
        req.user = user;
        next();
    })
};