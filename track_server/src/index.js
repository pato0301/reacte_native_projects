require('./models/User')
require('./models/Track')
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const bcrypt = require('bcrypt')
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');
const requireAuth = require('./middlewares/requireAuth')

const app = express();

app.use(bodyParser.json())
app.use(authRoutes)
app.use(trackRoutes)

const mongoUri = 'mongodb+srv://admin:trackadmin@track-react-native.pzwkc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(mongoUri, {
    userNewUrlParser: true,
    useCreateIndex: true,
})
// Call when connected to mongo
mongoose.connection.on('connected', () => {
    console.error('Connected to mongo instance');
})

// Call when error occur
mongoose.connection.on('error', (err) => {
    console.log('Error connecting to mongo', err);
})

app.get('/', requireAuth,(req,res) => {
    res.send(`Your Email: ${req.user.email}`)
})

app.listen(3000, () => {
    console.log('Listening on port 3000');
})