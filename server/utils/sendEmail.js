import nodemailer from "nodemailer";
import { google } from "googleapis";

// TODO : Generating Fresh CLIENT_ID and CLIENT_SECRET
// TODO : Getting App Verified from Gmail API

export const sendEmail = async (options) => {
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN } = process.env;

  const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
  );

  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

  const accessToken = oAuth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: process.env.SMPT_SERVICE,
    auth: {
      type: "OAuth2",
      user: process.env.SMPT_MAIL,
      clientId: CLIENT_ID,
      clientSecret: CLIENT_SECRET,
      refreshToken: REFRESH_TOKEN,
      accessToken: accessToken,
    },
  });

  const mailOptions = {
    from: process.env.SMPT_MAIL,
    to: process.env.SMPT_MAIL,
    subject: options.subject,
    text: options.message,
  };
  await transporter.sendMail(mailOptions);
};
