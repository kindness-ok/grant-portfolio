import nodemailer from 'nodemailer';

interface mailTemplateActionProps {
    name: string;
    mail: string;
    message: string;
};

const transporter = nodemailer.createTransport({
  host: process.env.NEXT_PUBLIC_BREVO_HOST as string,
  port: process.env.NEXT_PUBLIC_BREVO_PORT,
  pool: true,
  auth: {
    user:  process.env.NEXT_PUBLIC_BREVO_USER,
    pass:  process.env.NEXT_PUBLIC_BREVO_PASSWORD,
  },
});

const mailTemplateAction = async ({name, mail, message}: mailTemplateActionProps) => {
    const messageTemplate = `
        <div>
            <table align="center" cellpadding="0" cellspacing="0" width="600" style="border-collapse: collapse;">
                <tr>
                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                        <table cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                                <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                    <b>Hello, My name is ${name}</b>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 20px 0 30px 0; color: #153643; font-family: Arial, sans-serif; font-size: 16px; line-height: 24px;">
                                    ${message}
                                </td>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    ` 
    const mailOptions = {
        from: process.env.NEXT_PUBLIC_BREVO_HOST,
        to: mail,
        subject: "New Message From grant.com site!",
        html: messageTemplate,
        text: `Message from ${mail}...`,
    };

    try {
        await transporter.sendMail(mailOptions);
    } catch (error) {
        throw {
            name: "MailerError",
            message: `Error sending mail: ${error}`
        }
    }
};

export default mailTemplateAction;
