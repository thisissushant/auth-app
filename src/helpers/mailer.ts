import User from "@/models/userModel";
import bcryptjs from "bcryptjs";
import nodemailer from "nodemailer";

export const sendEmail = async ({ email, userId, emailType }: any) => {
  try {
    const hasedToken = await bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hasedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hasedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "4dfeea3d73f7a3",
        pass: "3a8c5202b3d02a",
      },
    });
    const mailOption = {
      from: "sushant@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hasedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
      or copy and paste the link below in your browser. <br> ${
        process.env.DOMAIN
      }/verifyemail?token=${hasedToken}
      </p>`,
    };
    const mailresponse = await transport.sendMail(mailOption);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
