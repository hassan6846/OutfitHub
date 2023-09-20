const nodemailer=require("nodemailer")

const sendEmail = async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'cheyenne.reilly@ethereal.email',
        pass: 'GVvung9jKD2KACud6V',
      },
    });

    const mailOptions = {
      from: process.env.SMPT_MAIL,
      to: 'ha6817331@gmail.com',
      subject: 'This is the subject',
      text: 'This is the text content.',
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
module.exports={sendEmail}