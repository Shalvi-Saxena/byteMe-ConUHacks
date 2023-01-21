// Import Dependencies
const path = require('path');
const envPath = path.join(__dirname, `./.env.${process.env.NODE_ENV}`);
require('dotenv').config({ path: envPath });
const express = require('express');
const router = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const passport = require('passport');
const {
  createDummyData,
} = require('./utils/sampleData');
const AuthController = require('./routes/auth.routes');
require('./config/passport')(passport);

// Setup App
const app = express();
const PORT = process.env.PORT || 8000;

// Define Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(passport.initialize());

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// API Routes
app.get('/api/', (req, res) => {
  res.json({
    name: 'PayPay Project Backend',
    message: 'Welcome Developer!',
  });
});

app.post('/createDummyData', createDummyData);
app.use('/auth', AuthController);
app.use('/api', passport.authenticate('jwt'), router);

// Start server for listen
const server = app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));

module.exports = server;
