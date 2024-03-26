import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host:  process.BREVO_HOST,
  port:  process.BREVO_PORT,
  pool: true,
  auth: {
    user:  process.env.BREVO_USER,
    pass:  process.env.BREVO_PASSWORD,
  },
});

export default transporter;
