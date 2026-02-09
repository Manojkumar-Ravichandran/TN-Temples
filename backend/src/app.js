const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Basic Route
app.get('/', (req, res) => {
    res.json({ message: 'Welcome to TN Temples API v1' });
});

// TODO: Import routes
const authRoutes = require('./routes/authRoutes');
const templeRoutes = require('./routes/templeRoutes');
const submissionRoutes = require('./routes/submissionRoutes');
const festivalRoutes = require('./routes/festivalRoutes');
const updateRoutes = require('./routes/updateRoutes');
const emailRoutes = require('./routes/emailRoutes');

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/temples', templeRoutes);
app.use('/api/v1/submissions', submissionRoutes);
app.use('/api/v1/festivals', festivalRoutes);
app.use('/api/v1/updates', updateRoutes);
app.use('/api/v1/email', emailRoutes);

module.exports = app;
