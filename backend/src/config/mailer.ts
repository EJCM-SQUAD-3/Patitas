import nodemailer from 'nodemailer';

const mailSender = process.env.MAIL_SENDER;
const mailPass = process.env.MAIL_PASS;
const mailToken = process.env.MAIL_TOKEN;

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    type: 'OAuth2',
    user:  mailSender,
    accessToken:mailToken,
  },
});

function createMessageObject(emailToBeSendedTo: string, subject: string, messageText: string) {
  return {
    from: mailSender,
    to: emailToBeSendedTo,
    subject,
    text: messageText,
  };
}

async function sendEmail(emailToBeSendedTo: string, subject: string, messageText: string) {
  const messageObject = createMessageObject(emailToBeSendedTo, subject, messageText);

  try {
    await transporter.sendMail(messageObject);
    console.log('Email enviado com sucesso para:', emailToBeSendedTo);
  } catch (error) {
    console.error('Erro ao enviar o email:', error);
  }
}

export {
  createMessageObject,
  sendEmail,
};
