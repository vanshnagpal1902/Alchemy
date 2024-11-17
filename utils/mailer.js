const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

const sendOTP = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to: email,
            subject: 'Your Verification Code - Alchemy',
            html: `
                <h1>Email Verification</h1>
                <p>Your verification code is: <strong>${otp}</strong></p>
                <p>This code will expire in 10 minutes.</p>
            `
        });
        console.log('OTP email sent successfully');
        return true;
    } catch (error) {
        console.error('Error sending OTP:', error);
        return false;
    }
};

module.exports = { sendOTP };
