const express = require('express');
const router = express.Router();
const sendEmail = require('../utils/sendEmail');

// @desc    Send contributor access request email
// @route   POST /api/v1/email/request-contributor
// @access  Public
router.post('/request-contributor', async (req, res) => {
    const { name, email, reason, location } = req.body;

    const message = `
    New Contributor Access Request:
    
    Name: ${name}
    Email: ${email}
    Location: ${location}
    
    Reason for request:
    ${reason}
  `;

    try {
        await sendEmail({
            email: process.env.ADMIN_EMAIL || 'admin@tntemples.com',
            subject: 'New Contributor Access Request',
            message: message,
        });

        res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Email could not be sent' });
    }
});

module.exports = router;
